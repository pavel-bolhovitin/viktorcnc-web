# AGENTS.md

## Project Architecture

**Stack**: React + Next.js (App Router) + shadcn/ui + Tailwind CSS. Deployed as static site to AWS S3.

**Rendering**: SSG only. All pages use `generateStaticParams` / `export const dynamic = 'force-static'` where needed. No SSR, no server actions that require a running server. Output: `next export` (`output: 'export'` in `next.config`).

**Hosting**: S3 static website hosting (+ CloudFront CDN). No Node.js server at runtime. API routes forbidden — they won't run.

**UI components**: shadcn/ui (Radix primitives + Tailwind). Add components via `npx shadcn@latest add <component>`, never hand-roll what shadcn provides. Always check `src/components/ui/` for an existing component before writing a custom one — use what's already there.

**Styling**: Tailwind CSS utility classes only. No CSS modules, no styled-components.

**Key constraints**:

- No dynamic routes that aren't statically pre-rendered at build time.
- No `useSearchParams` without a Suspense boundary (Next.js static export requirement).
- Images: use `next/image` from `next-export-optimize-images` (drop-in replacement that optimizes images at build time for static export). Import from `next-export-optimize-images`, not `next/image`.

---

*Rules Template:*

```md
### [RULES GROUP] Rules Group Name

#### [RULE] Rule Name

**@when**: description when to apply (e.g. always, *.ts, *.tsx)

**@description**: description about rule

- **Something A**: description about something A.
- **Something B**: description about something B.
- **Something C**: description about something C.
```

## Scripts

### `scripts/generate-cnc-parts-meta.mjs`

Scans `public/images/` for all `cnc-part-set-*.webp` files, reads each image's pixel dimensions via `image-size`, and writes the result to `public/images/cnc-parts-meta.json`.

**When to run**: after adding new CNC part set images to `public/images/`. The JSON is imported by `src/components/sections/gallery/photoSets.ts` — the `CncPartSetId` type and per-set metadata (number, image dimensions) come from it.

```sh
node scripts/generate-cnc-parts-meta.mjs
```

---

## [RULES GROUP] shadcn Rules

### [RULE] Use shadcn Design Tokens, Not Tailwind Color Primitives

**@when**: always, any `*.tsx` or `*.css` file

**@description**: Always use shadcn semantic tokens (`bg-background`, `text-foreground`, `border-border`, etc.) instead of Tailwind color primitives (`bg-white`, `text-gray-900`, `border-gray-200`, etc.). shadcn tokens are CSS variables that switch automatically between light, dark, and any future theme. Tailwind primitives are hardcoded and break theming.

- **Wrong**: `bg-white text-gray-900 border-gray-200`
- **Right**: `bg-background text-foreground border-border`

| Token | What it controls | Used by |
| --- | --- | --- |
| `background` / `foreground` | Default app background and text color | Page shell, page sections, default text |
| `card` / `card-foreground` | Elevated surfaces and content inside them | Card, dashboard panels, settings panels |
| `popover` / `popover-foreground` | Floating surfaces and content inside them | Popover, DropdownMenu, ContextMenu, overlays |
| `primary` / `primary-foreground` | High-emphasis actions and brand surfaces | Default Button, selected states, badges, active accents |
| `secondary` / `secondary-foreground` | Lower-emphasis filled actions and supporting surfaces | Secondary buttons, secondary badges, supporting UI |
| `muted` / `muted-foreground` | Subtle surfaces and lower-emphasis content | Descriptions, placeholders, empty states, helper text, subdued surfaces |
| `accent` / `accent-foreground` | Interactive hover, focus, and active surfaces | Ghost buttons, menu highlight states, hovered rows, selected items |
| `destructive` | Destructive actions and error emphasis | Destructive buttons, invalid states, destructive menu items |
| `border` | Default borders and separators | Cards, menus, tables, separators, layout dividers |
| `input` | Form control borders and input surface treatment | Input, Textarea, Select, outline-style controls |
| `ring` | Focus rings and outlines | Buttons, inputs, checkboxes, menus, focusable controls |
| `chart-1` ... `chart-5` | Default chart palette | Charts and chart-driven dashboard blocks |
| `sidebar` / `sidebar-foreground` | Base sidebar surface and default sidebar text | Sidebar container and its default content |
| `sidebar-primary` / `sidebar-primary-foreground` | High-emphasis actions inside the sidebar | Active items, icon tiles, badges, sidebar CTAs |
| `sidebar-accent` / `sidebar-accent-foreground` | Hover and selected states inside the sidebar | Sidebar menu hover states, open items, interactive rows |
| `sidebar-border` | Sidebar-specific borders and separators | Sidebar headers, groups, internal dividers |
| `sidebar-ring` | Sidebar-specific focus rings | Focused controls inside the sidebar |
| `radius` | Base corner radius scale | Cards, inputs, buttons, popovers, derived `radius-*` tokens |

---

## [RULES GROUP] Nextjs Rules

This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## [RULES GROUP] React Rules

### [RULE] Naming Conventions

**@when**: always

**@description**: Consistent naming across the codebase.

- **Components** (`.tsx` files containing a React component): PascalCase. `HeroSection.tsx`, `CopyButton.tsx` — correct. `heroSection.tsx`, `copy-button.tsx` — forbidden.
- **Props types**: export the props type as `export type {ComponentName}Props`. Example: `export type GalleryCardProps = { ... }`. Always exported so consumers can reference it.

### [RULE] Use Existing UI Components First

**@when**: always, before writing any interactive or styled element

**@description**: Always check `src/components/ui/` before building a custom element. shadcn/ui components cover buttons, toggles, dialogs, inputs, carousels, etc. Hand-rolling duplicates what's already there and drifts from design system tokens.

- **Check first**: look in `src/components/ui/` before creating any new interactive element.
- **Customize via className**: pass Tailwind overrides via `className` — `cn` uses `tailwind-merge` so conflicts resolve correctly.
- **Add missing**: if a needed component is absent, add it via `npx shadcn@latest add <component>`, don't hand-roll.

### [RULE] No Blank Lines Between Imports

**@when**: `*.ts`, `*.tsx`

**@description**: All import statements must be contiguous — no blank lines between them. Import order is handled by the linter; blank lines are not needed and will trigger lint errors.

### [RULE] No Section Label Comments in JSX

**@when**: *.tsx

**@description**: Do not add `{/* Label */}` comments that merely name the block below them (e.g. `{/* Header */}`, `{/* Quality Control */}`, `{/* CTA */}`). Well-named elements and structure make these redundant. Only add a JSX comment when explaining a non-obvious constraint or workaround.
