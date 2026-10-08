# Architecture — ElderGuard Health

## Intent

ElderGuard Health combines a care-focused marketing site with a staff dashboard for care coordination, analytics, and billing.

## System shape

SPA with public marketing routes and dashboard care modules. Query hooks prepare the UI for authenticated API integration.

## Stack decisions

- React
- Vite
- TypeScript
- TanStack Query
- Tailwind + shadcn/ui
- GSAP

## Boundaries

- Secrets stay in environment variables / secret managers — never in git.
- Client bundles only receive public configuration (`NEXT_PUBLIC_*` / `VITE_*`).
- Tenant or role checks belong in middleware / server layers, not UI-only gates.
- Heavy or long-running work should not run inside short-lived serverless handlers unless designed for it.

## Quality bar

- Prefer typed contracts at API and domain boundaries.
- Ship a vertical slice (auth → persisted outcome) before a broad feature surface.
- Document trade-offs in PRs when changing data models or auth.

