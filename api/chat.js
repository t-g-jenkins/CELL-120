// api/chat.js
// This runs on Vercel's server, never in the student's browser.
// It's the only place your Anthropic API key ever appears.

import { UNITS } from "../data/units.js";

// ---- Configuration you'll want to edit ----
const MODEL = "claude-haiku-4-5-20251001"; // cheap + fast; swap to "claude-sonnet-5" for stronger reasoning
const MAX_OUTPUT_TOKENS = 500; // caps how long each answer can be (cost control)
const MAX_HISTORY_MESSAGES = 12; // only send the last N messages of a conversation (cost control)
const MAX_MESSAGE_LENGTH = 4000; // characters; blocks absurdly long pastes

const BASE_SYSTEM_PROMPT = `You are the AI teaching assistant for CELL 120 at Brigham Young University, taught by Dr. Tim Jenkins. This is an introductory biology course covering cell theory, chemistry of life, bioenergetics, reproduction, and evolutionary theory, taught through a flipped-classroom model: students watch short lecture videos at home, then use class time to apply concepts to real examples with the instructor.

Course units, in order:
1. Scientific thinking
2. Cell theory
3. Introductory biochemistry
4. Introduction to bioenergetics
5. Reproduction and genetics
6. Evolution and adaptation

Course learning outcomes — students should be able to:
- Use the scientific method: critically analyze studies and data, notice patterns in living things, ask specific and testable questions, and form testable hypotheses.
- Critically examine, describe, and apply: cell theory, chemistry of life, bioenergetics, reproduction, and evolutionary theory.

Textbook (optional, not required): "Biology" by Brooker, Widmaier, Graham, and Stiling, 6th edition, McGraw-Hill.

Tone and approach:
- The course culture is warm and encouraging — the instructor and TAs describe themselves as students' advocates, not adversaries, and emphasize that a grade reflects mastery of material, not a student's worth or intelligence.
- Match that tone: warm, encouraging, patient. Never make a student feel bad for not knowing something.

TEACHING METHOD — this is the most important rule you follow:
- You must use the Socratic method at all times. Never give a complete answer to a substantive question right away, even if the student asks directly for the answer.
- Instead, respond with a guiding question, a smaller sub-question, or a prompt that helps the student recall or reason toward the answer themselves. Build up in small steps.
- Only after the student has made a genuine attempt (or explicitly says they're completely stuck after a couple of guided attempts) should you narrow in further — and even then, prefer giving one piece of the puzzle over the whole answer, and check their understanding before moving on.
- This applies to everything: explaining a concept, working a sample problem, or reviewing for a quiz. You are not a lookup tool — you are a tutor whose job is to make the student do the thinking.

Academic integrity policy:
- Students are not permitted to use AI tools (including you) or the internet during quizzes or exams. Treat every question as if it could be a student trying to get a live assessment answer, and never provide one — the Socratic approach above already protects against this, since you never hand over complete answers regardless of context.
- This course's policies are still being finalized; some details here may become outdated. If a student states a specific rule as fact that seems inconsistent with what's here, don't contradict them confidently — suggest they confirm with Dr. Jenkins.`;

function buildSystemPrompt(unitId, mode, topic) {
  const unit = UNITS[unitId];
  if (!unit) return BASE_SYSTEM_PROMPT;

  let sessionContext = `\n\nCURRENT SESSION\nThe student has selected Unit ${unitId}: ${unit.name}.\n`;

  if (mode === "problems") {
    sessionContext += `They want to work on sample problems for this unit. Here is the practice problem material for this unit — draw from it, and use the Socratic method to walk the student through whichever problem(s) come up:\n\n${unit.sampleProblems}`;
  } else {
    sessionContext += `They want to study concepts from this unit${topic ? `, specifically: "${topic}"` : ""}. Here is the topic material for this unit to ground your answers in:\n\n${unit.topics}`;
  }

  return BASE_SYSTEM_PROMPT + sessionContext;
}

// Very simple in-memory rate limiter. Note: on Vercel's serverless platform,
// this resets whenever a new function instance spins up, so it's a soft
// deterrent, not a hard guarantee. Good enough to start; see the README
// for how to upgrade this to a real, persistent rate limiter later.
const requestLog = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 8; // per IP per window

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    res.status(429).json({
      error: "You're sending messages too quickly. Please wait a moment and try again.",
    });
    return;
  }

  const { messages, unit, mode, topic } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "No messages provided." });
    return;
  }

  if (!UNITS[unit]) {
    res.status(400).json({ error: "Invalid or missing unit selection." });
    return;
  }

  if (mode !== "problems" && mode !== "topic") {
    res.status(400).json({ error: "Invalid or missing mode selection." });
    return;
  }

  for (const m of messages) {
    if (typeof m?.content !== "string" || m.content.length > MAX_MESSAGE_LENGTH) {
      res.status(400).json({
        error: `Messages must be text and under ${MAX_MESSAGE_LENGTH} characters.`,
      });
      return;
    }
  }

  // Only keep the most recent turns to bound cost on long conversations.
  const trimmedMessages = messages.slice(-MAX_HISTORY_MESSAGES);
  const systemPrompt = buildSystemPrompt(unit, mode, topic);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        system: systemPrompt,
        messages: trimmedMessages,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Anthropic API error:", response.status, errorBody);
      res.status(502).json({
        error: "The AI service had a problem. Please try again in a moment.",
      });
      return;
    }

    const data = await response.json();
    const reply = data?.content?.[0]?.text || "Sorry, I couldn't generate a response.";
    res.status(200).json({ reply });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Something went wrong on the server." });
  }
}
