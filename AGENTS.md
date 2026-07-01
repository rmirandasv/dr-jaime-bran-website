# AGENTS.md

Marketing site for *Clínica Odontológica Dr. Jaime Bran* (odontología, San Salvador, SV). Spanish (`lang="es"`, locale `es_SV`).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript 5.
- Tailwind **v4**, CSS-first — no `tailwind.config.js`. Theme tokens and color variables live in `src/app/globals.css` via `@theme inline` + `:root` (OKLCH).
- UI primitives in `src/components/ui/*` are hand-written wrappers around **`@base-ui/react`** (MUI's Base UI), **not** Radix. shadcn is installed only as a CLI (`style: base-nova`, see `components.json`) — do not let it overwrite the Base-UI files.
- Icons: `lucide-react`.
- Package manager: **pnpm** (`packageManager: pnpm@11.5.1`). Do not use npm/yarn.

## Commands

| Task | Command |
| --- | --- |
| Dev server (`:3000`) | `pnpm dev` |
| Production build (also typechecks) | `pnpm build` |
| Serve build | `pnpm start` |
| Lint | `pnpm lint` |

There is **no** test, format, or standalone typecheck script. Type errors surface during `pnpm build`.

## Repo layout

- `src/app/` — App Router. `layout.tsx` loads Google fonts (DM Sans → `--font-sans`, Playfair Display → `--font-heading`). One route: `page.tsx` composes the section components.
- `src/components/sections/` — `hero-section`, `services-section`, `about-section`, `clinic-gallery-section`, `contact-section`.
- `src/components/` — chrome: `site-header.tsx`, `site-footer.tsx`, `whatsapp-button.tsx`, `whatsapp-floating-button.tsx`.
- `src/components/ui/` — Base UI primitives (`button`, `card`, `badge`, `separator`).
- `src/lib/site-content.ts` — **single source of truth for all copy, hours, address, image paths, nav anchors, and the WhatsApp URL builder.** Edit text here, not in components.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge).
- `public/images/` — `logo.png`, `clinic-exterior.jpg`, `clinic-interior.jpg` (committed; referenced by `site-content.ts`).

## Conventions

- Section anchor IDs match `siteContent.nav[].href`: `inicio`, `servicios`, `nosotros`, `clinica`, `contacto`. To add a section: create file in `src/components/sections/`, import it in `src/app/page.tsx`, add the entry to `nav` in `site-content.ts` with a matching `id` on the section element.
- Aliases: `@/*` → `src/*` (`tsconfig.json`); shadcn aliases map `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks` (`components.json`).
- Server components by default. The only `"use client"` files today: `src/components/site-header.tsx` (mobile menu state) and `src/components/ui/separator.tsx`.
- Polymorphic anchor/button pattern: Base UI's `Button` and `Badge` use `render={<a .../>}` with `nativeButton={false}` on the button only. See `src/components/whatsapp-button.tsx` for the canonical example and `src/components/sections/contact-section.tsx:46` for an outline variant.
- WhatsApp phone: SV country code +503 → `50378882489` (display: `7888 2489`). Change in `getWhatsAppUrl` (`src/lib/site-content.ts`).
- Next/Image: hero `<Image>` uses `priority`; every other `<Image>` should set a `sizes` prop.
- Tailwind dark-mode is wired via `@custom-variant dark (&:is(.dark *))` — toggle by adding `.dark` to a parent.

## Skills already in scope

Use the opencode `skill` tool to load any of these (versions pinned in `skills-lock.json`):

- `interface-design` — UI craft review for product-style work (skip for routine copy/layout tweaks).
- `vercel-react-best-practices` — React/Next.js performance patterns. Apply when adding data fetching, client state, or dynamic imports.
- `web-design-guidelines` — a11y/UX audit when asked to "review my UI" / "check accessibility".

## Gotchas

- The shipped `README.md` is the unmodified `create-next-app` template and tells you to use `npm` — ignore it; this repo is pnpm-only.
- `pnpm-workspace.yaml` lists no `packages` — it's present only for `allowBuilds: [sharp, unrs-resolver]`. Treat as a single-package repo.
- `next-env.d.ts` is generated/owned by Next — do not edit (it's gitignored anyway).
- No CI, no pre-commit, no editor config. If you add any, mirror `pnpm lint && pnpm build`.
- `.agents/` is gitignored; only `skills-lock.json` and the curated `skills/` tree are intentional. Add/update skills via the opencode skill tool, not by hand.
- No env vars / secrets in use today; `.env*` is gitignored. If you add one, commit a `.env.example` and document it here.
- `next.config.ts` is the empty default — no customization. Keep it that way unless you introduce a runtime feature that needs it.
