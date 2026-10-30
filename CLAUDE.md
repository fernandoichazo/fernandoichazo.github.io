# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Fernando Ichazo Cisneros, built with Astro 7 (static output, no UI framework integrations yet). Requires Node >= 22.22.0. Content and some UI text are in Spanish.

## Commands

- `npm install` — install dependencies
- `astro dev --background` (or `npx astro dev --background`) — start the dev server in background mode at `localhost:4321`. Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`. Prefer this over a foreground `npm run dev`.
- `npm run build` — production build to `./dist/`
- `npm run preview` — serve the built site
- `npx astro check` — type-check `.astro` files (tsconfig extends `astro/tsconfigs/strict`)

There is no test suite or linter configured.

## Architecture rules

`.rules/arquitectura.md` is the authoritative architecture guide. **It is read-only: never modify, overwrite, or delete it unless the user explicitly grants permission in a dedicated prompt.** Read it before scaffolding or refactoring. Key points:

- Routes live in `src/pages/` (file-based routing). Keep pages lean and declarative — markup, logic, and large styles belong in `src/components/`, `src/layouts/`, or utilities.
- Layouts in `src/layouts/` wrap pages via `<slot />` and own `<html>`/`<head>`/nav/footer.
- Default to `.astro` components. Add React/Vue/Svelte only when stateful client interactivity is required, and hydrate with the most conservative directive (`client:idle`/`client:visible` over `client:load`).
- Processed images go in `src/images/` (used via `<Image />`/`<Picture />`); untouched static files go in `public/`. Global CSS goes in `src/styles/`.
- Content collections go in `src/content/` with schemas in `src/content.config.ts`.
- Prefer alias imports like `@components/...`, `@layouts/...` (note: these aliases are not yet defined in `tsconfig.json`; add `paths` there when introducing them).
- Do not create new top-level directories outside `src/` and `public/` without explicit instructions.

## Current state

The project is early-stage: `src/pages/` has `index.astro`, `about.astro`, and `contact.astro`, each a standalone HTML document with no shared layout or components yet (the starter's assets/layouts were removed intentionally). `index.astro` demonstrates the server-vs-client rendering split: frontmatter values are computed at build time, while the `<script>` block runs in the browser.

## Repo notes

- `.gitignore` ignores all `*.md` files except `README.md`, `CLAUDE.md`, and `.rules/**` — new Markdown files elsewhere will not be tracked unless whitelisted.
- Astro docs: https://docs.astro.build (see `AGENTS.md` for links to routing, components, framework integrations, content collections, styling, and i18n guides — consult the relevant one before working on those areas).
