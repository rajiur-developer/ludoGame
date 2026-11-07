# Ludo Arena

A modular, responsive Ludo experience built with Next.js App Router, TypeScript, React, and Bootstrap 5.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js App Router + React + TypeScript
- Bootstrap 5 for the base UI toolkit
- Lucide React icons
- Custom CSS design system (no Tailwind CSS)

## Project structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      AppShell.tsx
      Sidebar.tsx
      Topbar.tsx
    dashboard/
      DashboardHome.tsx
      WelcomeHero.tsx
      QuickStats.tsx
    game/
      GameBoardPreview.tsx
```

## Product principles

- Friendly, skill-based play for local and online experiences.
- Arena points are non-purchasable, non-transferable, and have no cash value.
- No entry-fee, betting, cash-out, or pooled-stake mechanics.
- Frontend first; backend and real-time services are separate future phases.
