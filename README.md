# CELL 120 AI Teaching Assistant — Setup Guide

This is a minimal, working chat app: a static frontend (`index.html`) and a
backend function (`api/chat.js`) that holds your Anthropic API key and talks
to Claude. Your key never appears in anything a student's browser can see.

## 1. Fill in your course content

Two places to edit:

- **`api/chat.js`** — the `BASE_SYSTEM_PROMPT` near the top holds course-wide
  info (tone, learning outcomes, academic integrity policy). This is already
  filled in from your syllabus.
- **`data/units.js`** — one entry per unit, with a `topics` field (for
  students studying a concept) and a `sampleProblems` field (for students
  working practice problems). These are currently placeholders — replace
  each `[EDIT THIS: ...]` with real content. Only the selected unit's
  content gets sent on any given request, so feel free to make these as
  detailed as you want without worrying about bloating every message.

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

## 2. Get the code onto GitHub

Vercel deploys from a GitHub repo. If you don't already have one for this:

1. Create a new repository on GitHub (public or private, either works).
2. Push this folder's contents to it. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial CELL 120 TA"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## 3. Deploy on Vercel

1. Go to vercel.com and sign in (GitHub login is easiest).
2. Click **Add New → Project**, and import the repository you just pushed.
3. Vercel will auto-detect this as a static project with a serverless
   function — you don't need to change any build settings.
4. Before clicking Deploy, open **Environment Variables** and add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: the key you generated in the Anthropic Console (starts `sk-ant-`)
5. Click **Deploy**. You'll get a live URL like `cell120-ta.vercel.app`
   within about a minute.

## 4. Test it

Open the URL, ask it a cell biology question, confirm you get a real answer
and that the "Thinking…" state resolves properly. Try a couple of edge
cases: a very short message, a multi-turn back-and-forth, and something
off-topic (to see how it redirects).

## 5. (Later) Point a custom domain at it

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
