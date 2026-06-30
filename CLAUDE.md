# Sub-tracker Web

Next.js 14 (App Router) + TypeScript frontend. Consumes sub-tracker-api.

## Stack
- Next.js 14 App Router, TypeScript, Tailwind, Zustand
- Auth: Clerk (Next.js SDK). API calls via typed fetch wrappers in lib/api/

## Conventions
- Types in lib/types/ MIRROR the API contract (openapi.yaml). Keep in sync.
- Money formatted via lib/utils/currency.ts — never raw-render Decimals
- Server Components by default; "use client" only when needed

## The contract
- API is the source of truth: ../sub-tracker-api/api/openapi.yaml
- Don't invent response shapes — match the API.

## Workflow
- Branch off `dev`, PR into `dev`. feature/web-*, fix/web-*
- Run: pnpm dev / pnpm build / pnpm lint