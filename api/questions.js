// api/questions.js
// Serves the browsable question list to the frontend picker. Deliberately
// strips out the answer field and outlineRefs before sending — those stay
// server-side (used only in api/chat.js) so a student can't just view page
// source or the network tab to see correct answers.

import { QUESTIONS } from "../data/questions.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { unit } = req.query;

  if (!QUESTIONS[unit]) {
    res.status(400).json({ error: "Invalid or missing unit." });
    return;
  }

  const list = QUESTIONS[unit].map((q) => ({
    id: q.id,
    question: q.question,
    source: q.source,
  }));

  res.status(200).json({ questions: list });
}
