# Ludo Arena

A responsive Ludo web experience built with Next.js App Router, TypeScript, React, and Bootstrap 5. The repository currently focuses on the frontend and local interaction prototypes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js App Router + React + TypeScript
- Bootstrap 5 as the UI toolkit
- Lucide React icons
- Custom responsive CSS design system (no Tailwind CSS)

## Frontend routes

| Route | Purpose |
| --- | --- |
| `/` | Dashboard overview |
| `/play` | Game mode selection |
| `/play/offline` | Local pass-and-play prototype |
| `/play/online` | Online room UI preview |
| `/play/bot` | Practice mode preview |
| `/friends` | Friends list preview |
| `/leaderboard` | Sample rankings |
| `/rewards` | Achievements and demo points |
| `/profile` | Guest profile |
| `/settings` | Local preference controls |
| `/notifications` | Notification center preview |
| `/search` | Search frontend pages |
| `/help` | Game guide and FAQ |
| `/login`, `/register` | Authentication UI previews |

## Project structure

```
src/
  app/
    (routes and global layouts)
  components/
    layout/       # App shell, sidebar, topbar
    dashboard/    # Dashboard sections
    game/         # Board and game UI
    shared/       # Reusable page components
```

## Product and safety principles

- Friendly, skill-based play for local and online experiences.
- Arena points are earned through play and achievements.
- Points are non-purchasable, non-transferable, and have no cash value.
- No entry fees, betting, cash-out, or pooled-stake mechanics.
- Frontend first: authentication, persistence, database, and realtime multiplayer require a separately planned backend phase.

## Verification

GitHub Actions runs a production build on pushes and pull requests to `main`.
