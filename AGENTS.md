# AGENTS.md

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

## [RULES GROUP] Nextjs Rules

This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## [RULES GROUP] React Rules

### [RULE] Naming Conventions

**@when**: always

**@description**: Consistent naming across the codebase.

- **Components** (`.tsx` files containing a React component): PascalCase. `HeroSection.tsx`, `CopyButton.tsx` — correct. `heroSection.tsx`, `copy-button.tsx` — forbidden.
