# Astro Architecture Guidelines & Project Structure

> **CRITICAL INSTRUCTION FOR AI AGENTS (Claude Code, Impeccable, etc.):**
> - **READ-ONLY FILE:** You are **STRICTLY FORBIDDEN** from modifying, overwriting, deleting, or altering this file (`ASTRO_ARCHITECTURE.md`) unless the user explicitly grants direct permission in a dedicated prompt.
> - **ARCHITECTURAL ADHERENCE:** All code generation, directory scaffolding, asset placement, and refactoring **MUST strictly respect** the architecture and separation of concerns outlined in this document.

---

## 1. Project Overview & Philosophy

Astro uses an opinionated, content-first directory structure designed for high performance:
- **Zero JS by default:** Components render to static HTML on the server/build step unless explicitly hydrated using Astro Client Directives (`client:load`, `client:idle`, `client:visible`).
- **Asset optimization:** Processed assets live inside `src/`, while untouched static assets live in `public/`.
- **File-based routing:** The contents of `src/pages/` define the routes of the application.

---

## 2. Directory Layout & Roles

```text
.
├── public/               # Static, unbundled, unprocessed assets
├── src/                  # Application source code (compiled/bundled by Astro)
│   ├── components/       # Reusable UI components (Astro, React, etc.)
│   ├── layouts/          # Reusable page templates & document wrappers
│   ├── pages/            # File-based routing & endpoint definitions
│   ├── styles/           # Global styles, variables, reset CSS
│   ├── images/           # Processed & optimized images
│   ├── content/          # Content collections (Markdown/MDX, schemas)
│   └── content.config.ts # Content Collections configuration
├── astro.config.mjs      # Astro project configuration
├── package.json          # Dependencies & scripts
└── tsconfig.json         # TypeScript compiler configuration
```

---

## 3. Directory Specifications & Boundaries

### 3.1. `public/` (Unprocessed Assets)
- **Role:** Holds static assets served directly as-is to the root URL (e.g., `/favicon.svg`, `/robots.txt`, `/cv.pdf`).
- **Rules:**
  - Files here are **never** bundled, minified, or processed by Astro's asset pipeline.
  - Do **not** place images or styles here if they require optimization or import into Astro components.

### 3.2. `src/` (Source Code)
The core of the application where all source code lives:

#### `src/components/`
- Reusable UI elements (`.astro` or UI framework files like `.jsx`, `.tsx`, `.vue`).
- Components should prefer `.astro` unless interactive client-side logic requires a UI framework.
- Favor micro-components and atomic modularity.

#### `src/layouts/`
- `.astro` components that provide standard page structure (HTML wrapper, `<head>`, metadata, navbars, and footers).
- Must utilize Astro's `<slot />` tag to inject content from pages or markdown files.

#### `src/pages/`
- Handles file-based routing:
  - `src/pages/index.astro` $\rightarrow$ `/`
  - `src/pages/about.astro` $\rightarrow$ `/about`
  - `src/pages/projects/[slug].astro` $\rightarrow$ Dynamic route `/projects/:slug`
- Only files intended to become reachable web pages or API routes (`.js`/`.ts` endpoints) should live here.

#### `src/styles/`
- Holds global stylesheets (e.g., `global.css`, Tailwind definitions, theme configurations, CSS resets).

#### `src/images/`
- Images meant to be processed, converted (e.g., WebP/AVIF), and optimized using Astro's `<Image />` or `<Picture />` components.

#### `src/content/` & `content.config.ts`
- Reserved for Astro Content Collections (e.g., blog posts, projects, case studies).
- Type-safe schemas and frontmatter validation must be defined in `src/content.config.ts`.

---

## 4. Architectural Rules for Claude Code & Impeccable

1. **Keep `src/pages` Lean:** Business logic, complex UI markup, and large styles must live in `src/components/`, `src/layouts/`, or utilities, keeping page templates clear and declarative.
2. **Favor Astro Components:** Always default to `.astro` components. Only add React/Vue/Svelte components when stateful client-side interactivity is mandatory.
3. **Island Architecture Restraint:** If a client framework component is necessary, hydrate it with the most conservative directive needed (`client:idle` or `client:visible` over `client:load`).
4. **Imports & Aliases:** Prefer clean, relative or configured alias imports (e.g., `@components/...`, `@layouts/...`).
5. **No Ad-Hoc Root Folders:** Do not create top-level directories outside of `src/` and `public/` without explicit instructions.