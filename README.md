# krzysztof.io

Personal website and blog built with Next.js, TypeScript, file-based Markdown
content, and custom CSS.

## Stack

- Next.js Pages Router
- TypeScript
- React
- Markdown content with `gray-matter` frontmatter
- `react-markdown` for rendering
- Next Image and `plaiceholder` for content images
- Netlify deployment

## Content Model

Content lives in three main folders:

- `content/blog/` - articles and personal writing
- `content/notes/` - notes and book summaries
- `content/pages/` - static Markdown-backed pages

Each content item lives in its own directory with an `index.md` file. Images
used by that entry live next to the Markdown file and are copied into
`public/images/` during the build.

Additional older drafts live in `blog-posts-collection/`.

## Development

Use pnpm for all commands.

```bash
pnpm dev
```

The dev server runs on:

```text
http://localhost:4022
```

Useful checks:

```bash
pnpm typecheck
pnpm lint
```

Production build:

```bash
pnpm build
```

Do not use `pnpm build` as routine local verification. See `AGENTS.md` for the
repo-specific rule.

## Repository Map

- `src/pages/[slug].tsx` - shared route for Markdown-backed blog posts, notes,
  and pages
- `src/lib/posts.ts` - content loading and slug resolution
- `src/components/layout.tsx` - shared site layout
- `src/styles/style.css` - global custom CSS
- `src/spwz/` - product-specific components
- `scripts/copy-images.mjs` - copies content-local images to `public/images/`
- `docs/exec-plans/` - execution plans for larger changes

## Agent Notes

Read `AGENTS.md` before making changes. For larger changes that do not fit in
one clean implementation pass, create or update an ExecPlan under
`docs/exec-plans/active/`.
