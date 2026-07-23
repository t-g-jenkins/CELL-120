# CELL 120 Socrates — Setup Guide

This is a minimal, working chat app: a static frontend (`index.html`) and a
backend function (`api/chat.js`) that holds your Anthropic API key and talks
to Claude. Your key never appears in anything a student's browser can see.

## 1. Course content is already loaded

`data/units.js` is now filled in with real material pulled from your Canvas
export: each unit's lecture outlines (for "Studying a topic" mode) and each
unit's "Things to Know" sheets, practice questions, and fact-check materials
(for "Sample problems" mode) — mapped using the quiz-to-unit structure from
your course (Quiz 1 → Unit 1, Quizzes 2–3 → Unit 2, Quizzes 4–6 → Unit 3,
Quiz 7 → Unit 4, Quizzes 8–9 → Unit 5, Quiz 10 → Unit 6). Unit 6 also
includes the BYU Evolution Packet.

This will need periodic updates as the course changes semester to semester
— re-export from Canvas and ask your TA-setup assistant to regenerate this
file when quiz numbers, units, or content shift.

This app is now named and branded as **CELL 120 Socrates**, matching the
name your Canvas course already references for Socratic study help (not
allowed during quizzes/exams). Your course also references a second tool,
"BUBA" (allowed during quizzes/exams, for question-wording clarification
only, never confirms correctness) — that's a separate, differently-scoped
tool if you want to build it later.

## 2. Prompt caching is enabled

Since each unit's content is now substantial (a few thousand words), the
backend marks the system prompt and unit content as cacheable
(`cache_control: { type: "ephemeral" }` in `api/chat.js`). In practice this
means the first message in a unit costs full price, and follow-up messages
— from the same student or any other student in the same unit/mode, within
the cache window — cost roughly 90% less on that portion. This is the "prompt
caching" lever mentioned earlier as the biggest cost lever available; it's
already wired in, nothing further to do.

## How the question picker works

In "Sample problems" mode, students now see a screen listing individual
review questions for that unit — grouped by source document (e.g. "Quiz 6 -
Fact Check", "Quiz 6 - Things to Know"), pulled from `data/questions.js`
(583 questions total across all 6 units, parsed from your Canvas practice
materials). Clicking one pins it at the top of the chat and tells Socrates
exactly which question the student is working on. A "Skip" option is always
available for general, non-question-specific chat.

Each question is tagged with the specific lecture outline(s) it draws from
(figured out from the "Use Outline N" notes in your Things to Know sheets).
When a student seems to be missing the underlying concept, Socrates is
instructed to point them to that material by name before continuing to
guide them Socratically.

**Answers stay server-side.** `api/questions.js` strips answer keys before
sending the question list to the browser — a student checking the page
source or network tab won't see correct answers, only question text. The
full answer (used internally to keep Socrates' guidance accurate, never
shown outright) only exists in `api/chat.js`'s calls to the Claude API.

## How the unit/mode selection works

Before chatting, students pick a unit (1–6) and a mode — "Studying a topic"
or "Sample problems" — on a setup screen. That selection is sent along with
every message and used to pull in just that unit's content from
`data/units.js`, so the TA is always grounded in the right material. A
"Change" link lets them switch units or modes at any time, which starts a
fresh conversation in the new context.

## Teaching method

The TA is instructed to always use the Socratic method — guiding questions
first, never a complete answer up front, even when directly asked. This is
enforced in `BASE_SYSTEM_PROMPT` in `api/chat.js` and applies in both modes.

## 3. Get the code onto GitHub

Vercel deploys from a GitHub repo. If you don't already have one for this:

1. Create a new repository on GitHub (public or private, either works).
2. Push this folder's contents to it. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial CELL 120 Socrates"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## 4. Deploy on Vercel

1. Go to vercel.com and sign in (GitHub login is easiest).
2. Click **Add New → Project**, and import the repository you just pushed.
3. Vercel will auto-detect this as a static project with a serverless
   function — you don't need to change any build settings.
4. Before clicking Deploy, open **Environment Variables** and add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: the key you generated in the Anthropic Console (starts `sk-ant-`)
5. Click **Deploy**. You'll get a live URL like `cell120-ta.vercel.app`
   within about a minute.

## 5. Test it

Open the URL, ask it a cell biology question, confirm you get a real answer
and that the "Thinking…" state resolves properly. Try a couple of edge
cases: a very short message, a multi-turn back-and-forth, and something
off-topic (to see how it redirects).

## 6. (Later) Point a custom domain at it

In the Vercel project → **Settings → Domains**, add the domain you've
registered and follow the DNS instructions it gives you. This step is
independent of everything else — you can do it whenever you're ready, and
the `.vercel.app` URL keeps working either way.

## Notes on the guardrails already built in

- **Response length is capped** (`MAX_OUTPUT_TOKENS`) so no single answer
  can run away in cost.
- **Conversation history is trimmed** (`MAX_HISTORY_MESSAGES`) so long
  back-and-forth threads don't keep growing the cost of every new message.
- **Basic per-IP rate limiting** is in place, but it's in-memory, so it
  resets whenever Vercel spins up a new instance of the function — treat it
  as a soft deterrent against accidental spam, not a hard guarantee. If you
  want a real, persistent rate limiter later, Vercel's own KV/Upstash Redis
  integration is the standard way to do it — worth revisiting once the bot
  is live and you can see real usage patterns.
- **Model is set to Haiku 4.5** for cost efficiency. If answers feel too
  shallow for the material, change `MODEL` in `api/chat.js` to
  `"claude-sonnet-5"` — one line, no other changes needed.

## If something breaks

- **401 error in the browser console**: your API key is missing or wrong in
  Vercel's environment variables. Double check it was saved and redeploy.
- **429 "sending messages too quickly"**: the rate limiter tripped — wait a
  minute and try again, or raise `RATE_LIMIT_MAX_REQUESTS` in `api/chat.js`.
- **Blank or broken page**: check the Vercel deployment logs (Project →
  Deployments → click the deployment → Logs) for the actual error.
