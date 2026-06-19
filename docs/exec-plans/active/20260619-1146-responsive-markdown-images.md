# Add Responsive Markdown Image Sizes

**IMPLEMENTER INSTRUCTION: Keep this plan up to date as you work.**
After each significant step, update the `Progress` section with what was done
and what remains. If context is lost or you are interrupted, this plan must
contain everything needed to resume. Treat this file as the source of truth for
this work until it is completed, abandoned, or superseded.

This ExecPlan is a living document. The sections `Progress`, `Surprises &
Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to
date as work proceeds.

Reference: This plan follows conventions from `AGENTS.md` and
`docs/exec-plans/create-plan-file.md`.

## Purpose / Big Picture

Authors should be able to control image width in Markdown content without
leaving Markdown, importing components, or changing layout code per article.
After this change, banners on generated blog, note, and page routes are 20%
wider than the prose column on desktop, while normal Markdown images keep the
current prose-column width unless an author opts into `?size=narrow` or
`?size=wide`.

The visible behavior is simple: desktop readers see banners and explicitly wide
images extend beyond the text column in a controlled way; mobile readers see a
single practical image width. Existing Markdown images with no size query keep
the old width.

## Assumptions

The prose column remains `--maxWidth-wrapper`, currently `38rem`.

The wide media rail should be exactly 20% wider than the prose column on
desktop. With the current prose width, that is `45.6rem`.

The narrow media rail should be exactly 20% narrower than the prose column on
desktop. With the current prose width, that is `30.4rem`.

The public authoring syntax is:

    ![Alt text](./image.png)
    ![Alt text](./image.png?size=normal)
    ![Alt text](./image.png?size=narrow)
    ![Alt text](./image.png?size=wide)

The `full` name is intentionally not supported. Use `normal` for prose-column
width.

On mobile, all three sizes render at the available content width. This avoids
tiny images and horizontal overflow on small screens.

Frontmatter banners do not need per-banner author control in this change.
Banners default to the wide media rail.

## Open Questions

There are no open questions at plan creation time. If implementation discovers
that the current Next Image usage cannot be cleaned up without a broader image
metadata pass, record the finding in `Surprises & Discoveries` and either update
this plan or stop for review before widening scope.

## Progress

- [x] (2026-06-19 09:46Z) Inspected current Markdown rendering, layout CSS, image copying, content examples, and repo conventions.
- [x] (2026-06-19 09:46Z) Installed a repo-local ExecPlan entrypoint under `docs/exec-plans/`.
- [x] (2026-06-19 09:46Z) Drafted this implementation plan.
- [ ] Implement the layout rails and image metadata/rendering changes.
- [ ] Validate desktop and mobile behavior visually and with DOM measurements.
- [ ] Update this plan with implementation outcomes and move it to `completed/` after the change is done.

## Surprises & Discoveries

- Observation: At plan creation time, `README.md` was still the default
  create-next-app text, while `AGENTS.md` contained the real repo orientation.
  Evidence: `README.md` mentioned port 3000 and `pages/index.js`; `AGENTS.md`
  correctly said `pnpm dev` runs on port 4022 and the project uses
  `src/pages/[slug].tsx`.

- Observation: The same `[slug].tsx` route renders blog posts, notes, and
  Markdown-backed pages, so a scoped change there supports pages by default.
  Evidence: `src/lib/posts.ts` resolves slugs across `content/blog/`,
  `content/notes/`, and `content/pages/`; `src/pages/[slug].tsx` receives
  `contentPath` and renders the shared article body.

- Observation: Several SPWZ and custom page components also use the global
  `.image-wrapper` class.
  Evidence: `rg` shows `.image-wrapper` usage in `src/pages/spwz-ebook.tsx`,
  `src/pages/spwz-szkolenie.tsx`, `src/spwz/LandingSprzedaz.tsx`,
  `src/spwz/LandingMailing.tsx`, and `src/spwz/OMnie.tsx`.

- Observation: The current Markdown and banner image rendering relies on
  `NextImage fill` plus `.image-wrapper img { position: relative !important; }`.
  This works today but is not a clean foundation for width variants.
  Evidence: `src/pages/[slug].tsx` renders Markdown images with `fill`; the only
  global image-specific CSS is `.image-wrapper` and `.image-wrapper img`.

## Decision Log

- Decision: Support only `normal`, `narrow`, and `wide` as author-facing image
  sizes.
  Rationale: `normal` names the current prose-column width precisely. `full`
  is ambiguous because it can mean full viewport width, full layout width, or
  full prose width.
  Date/Author: 2026-06-19 / agent, based on user direction.

- Decision: Mobile uses one practical width for all variants.
  Rationale: The user explicitly agreed that one mobile size is enough, and
  breakout widths create more risk than value on narrow screens.
  Date/Author: 2026-06-19 / agent, based on user direction.

- Decision: Use Markdown query strings for per-image control:
  `?size=normal`, `?size=narrow`, and `?size=wide`.
  Rationale: Query strings keep layout metadata out of `alt` text, avoid MDX,
  do not require custom shortcode syntax, and can be stripped before building
  the public image URL.
  Date/Author: 2026-06-19 / agent.

- Decision: Do not globally change `.image-wrapper`.
  Rationale: SPWZ and custom landing components use the same class. The new
  behavior belongs to Markdown-backed content rendered through
  `src/pages/[slug].tsx`.
  Date/Author: 2026-06-19 / agent.

- Decision: Make the layout clean by separating the media rail from the prose
  rail.
  Rationale: The current `.global-wrapper` is both the page frame and the prose
  width. A wide image feature needs a wider layout frame while prose remains
  constrained to the normal readable width.
  Date/Author: 2026-06-19 / agent.

- Decision: Do not run `pnpm build` as routine verification.
  Rationale: `AGENTS.md` explicitly says build can kill a potentially working
  dev server and should only be run when the user asks for it.
  Date/Author: 2026-06-19 / agent.

## Outcomes & Retrospective

Not started. Fill this section after implementation and validation.

## Context and Orientation

This repository is a Next.js site using the Pages Router. The generated content
route is `src/pages/[slug].tsx`. It renders Markdown from `content/blog/`,
`content/notes/`, and `content/pages/`. The loader lives in `src/lib/posts.ts`
and decides which content type a slug belongs to.

Content images live next to each `index.md` file. For example,
`content/blog/bottom-up/index.md` references `./zestaw-notatek.png`, and the
actual image file lives in the same folder. The script
`scripts/copy-images.mjs` copies those files into `public/images/<contentPath>/<slug>/`.
The Markdown renderer then turns `./zestaw-notatek.png` into a public path such
as `/images/blog/bottom-up/zestaw-notatek.png`.

The current layout wrapper is `src/components/layout.tsx`. It renders a single
`div.global-wrapper` around the header, main content, and footer. CSS for that
wrapper lives in `src/styles/style.css`; it currently uses
`max-width: var(--maxWidth-wrapper)` where `--maxWidth-wrapper` is `38rem`.
That means the page frame and the prose column are currently the same width.

The current Markdown image component is `MarkdownImage` inside
`src/pages/[slug].tsx`. It returns a `span.image-wrapper` with a `NextImage`
using `fill`. The banner image uses the same `.image-wrapper` class. Because
other parts of the site also use `.image-wrapper`, this feature must not change
global `.image-wrapper` semantics for every component.

Key files for this change:

- `src/pages/[slug].tsx` - Markdown image parsing, banner rendering, article
  body rendering, and image metadata passed from static props.
- `src/components/layout.tsx` - layout mode or width variant for Markdown-backed
  pages that need a wider media rail.
- `src/styles/style.css` - width variables, media rail CSS, prose rail CSS, and
  image-size classes.
- `content/blog/bottom-up/index.md` - useful existing post with several
  Markdown images for manual verification.
- `content/pages/dodaj-mnie/index.md` - useful Markdown-backed page with images
  and `isLanding: true`, proving pages still support the feature.

No external services, API routes, background jobs, analytics, dashboards, or
database migrations are involved.

## Plan of Work

First, introduce a content layout distinction instead of stretching individual
images with one-off offsets. In `src/components/layout.tsx`, add a typed prop
that defaults to the current prose-width behavior and allows generated
Markdown-backed pages to request a media-width frame. A suitable shape is:

    type LayoutContentWidth = 'prose' | 'media'

    type LayoutProps = {
      children: ReactNode
      isLandingPage?: boolean
      contentWidth?: LayoutContentWidth
    }

The default remains `prose`. When `contentWidth` is `media`, add a modifier
class such as `global-wrapper--media` alongside `global-wrapper`.

In `src/pages/[slug].tsx`, pass `contentWidth="media"` to `Layout` for all
Markdown-backed blog, note, and page content. This is what makes content pages
support the feature by default. It should not affect bespoke routes such as
`src/pages/spwz-ebook.tsx`, because those routes keep using the default layout.

Second, add explicit width variables and rails in `src/styles/style.css`. Keep
`--maxWidth-wrapper` as the prose width to avoid breaking existing assumptions.
Add media-specific variables with concrete values derived from the current
prose width:

    --maxWidth-content-narrow: 30.4rem;
    --maxWidth-content-wide: 45.6rem;

Then add CSS so `.global-wrapper--media` has a max width of
`--maxWidth-content-wide`, while its site header, site footer, article header,
article footer, and normal prose blocks stay constrained to
`--maxWidth-wrapper`. The intended model is:

- The outer page frame may be wide enough for media.
- Text, headings, blockquotes, lists, code blocks, and tables remain in the
  normal prose rail.
- Image figures can choose normal, narrow, or wide media widths.

Avoid negative margins, transforms, or viewport-based magic for the normal
desktop case. Use centered rails with `max-width` and `margin-left/right: auto`.
Use a media query so narrow and wide variants collapse to the available width
on mobile.

Third, replace the current Markdown image wrapper with a block-level figure
component scoped to generated content. A clean target shape is:

    type MarkdownImageSize = 'normal' | 'narrow' | 'wide'

    type ContentImageProps = {
      src: string
      alt: string
      width: number
      height: number
      blurDataURL?: string
      size: MarkdownImageSize
      priority?: boolean
    }

    const ContentImage = ({
      src,
      alt,
      width,
      height,
      blurDataURL,
      size,
      priority = false,
    }: ContentImageProps) => {
      return (
        <figure className={`content-image content-image--${size}`}>
          <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            placeholder={blurDataURL ? 'blur' : undefined}
            blurDataURL={blurDataURL}
            priority={priority}
            quality="50"
            sizes="(max-width: 38rem) 100vw, 46rem"
            className="content-image__img"
          />
        </figure>
      )
    }

Do not copy this exact code blindly if TypeScript's Next Image types require a
slightly different prop shape. Preserve the intent: intrinsic `width` and
`height`, CSS-controlled rendered width, no `fill`, no `position: relative
!important` dependency for generated content images.

Fourth, create a helper in `src/pages/[slug].tsx` for parsing Markdown image
sources. It must accept existing local syntaxes:

    ./image.png
    /./image.png
    image.png
    ./image.png?size=wide

It must return the normalized file name without the query string and a size.
Unknown or missing size values must fall back to `normal` so existing content
keeps working.

Fifth, build image metadata in `getStaticProps`. The clean path is to read image
files from `content/<contentPath>/<slug>/`, because that is the source of truth
for content-local images. For every allowed image file in that directory, read
the buffer, call `getPlaiceholder(buffer, { size: 10 })`, and store metadata by
file name:

    type ContentImageMetadata = {
      src: string
      width: number
      height: number
      blurDataURL: string
    }

The `src` should still point to `/images/<contentPath>/<slug>/<fileName>` so
Next Image serves the public copy. The metadata should come from the content
file. This keeps image sizing independent from whether `public/images/` has
already been regenerated in dev.

Reuse the same metadata approach for banners. `getBannerImageProps` currently
reads from `public/` and returns CSS intended for `fill`. Change it to read
from the content source file or otherwise return intrinsic `width`, `height`,
and `blurDataURL`. Render banners through the same `ContentImage` component
with `size="wide"` and `priority`.

Sixth, customize ReactMarkdown rendering. The `img` renderer should:

1. Read the original `src`.
2. Parse its file name and size query.
3. Look up metadata for that file.
4. Render `ContentImage` with the parsed size.

If metadata is missing, render a safe fallback with the normalized public path
and document the fallback in code only if it is not self-explanatory. Prefer not
to throw during static generation for a missing optional image unless current
site behavior already fails in that case.

ReactMarkdown normally wraps image-only Markdown lines in paragraphs. Avoid
invalid or awkward HTML such as `p > figure` by adding a custom paragraph
renderer that unwraps paragraphs whose only meaningful child is a Markdown
image. Keep ordinary paragraphs as paragraphs. If the shape of the ReactMarkdown
node is awkward to type, use a narrow local type or one controlled type
assertion with a comment; do not spread `any` wider through the component.

Seventh, remove generated-content dependence on `.image-wrapper img { position:
relative !important; }` only after the new `ContentImage` path is working. Do
not delete or change `.image-wrapper` globally if SPWZ or other custom routes
still depend on it. It is acceptable for `.image-wrapper` to remain for custom
routes while generated content uses `.content-image`.

Finally, update this plan's `Progress`, `Surprises & Discoveries`, and
`Outcomes & Retrospective` sections as implementation proceeds.

## Concrete Steps

Run these commands from the repository root:

    pwd
    # Expected: the repository root containing package.json

    git status --short
    # Expected: inspect the worktree and leave unrelated local changes
    # untouched unless the user explicitly asks to include them.

Edit `src/components/layout.tsx` to add the layout width prop and modifier
class.

Edit `src/styles/style.css` to add width variables, the media wrapper modifier,
the prose rail rules, and `.content-image` size variants. Keep the changes
scoped to generated content routes and avoid changing SPWZ behavior.

Edit `src/pages/[slug].tsx` to add image source parsing, content image metadata,
the shared `ContentImage` component, banner rendering through `ContentImage`,
and ReactMarkdown image/paragraph handling.

Run:

    pnpm typecheck
    # Expected: no TypeScript errors.

Run:

    pnpm lint
    # Expected: no new lint errors. If existing warnings remain, record them in
    # this plan and in the final response.

Start the dev server:

    pnpm dev
    # Expected: Next.js starts on http://localhost:4022.

Do not run `pnpm build` unless the user explicitly asks for it.

## Validation and Acceptance

Validate existing behavior first. Open a generated blog post with a banner and
normal Markdown images, such as:

    http://localhost:4022/bottom-up/

On desktop, the banner should be visibly wider than the paragraphs by about
20%. Existing Markdown images without a query string should remain aligned to
the paragraph width.

Validate page support with a Markdown-backed page that has images:

    http://localhost:4022/dodaj-mnie/

The page should render without layout regression even though it has
`isLanding: true`. Its existing images should keep normal width unless their
Markdown source is changed to include a size query.

Validate per-image sizing by temporarily editing one local Markdown image in
`content/blog/bottom-up/index.md` during the working session:

    ![Zestaw Notatek](./zestaw-notatek.png?size=wide)
    ![Pomysł](./idea.png?size=narrow)
    ![Wpis](./blog.png?size=normal)

Use the actual existing alt text from the file. After browser validation,
either keep only intentional content edits requested by the user or revert the
temporary content edits before finalizing.

In the browser console on a desktop viewport, compare widths:

    const text = document.querySelector('.blog-post [itemprop="articleBody"] p')
    const wide = document.querySelector('.content-image--wide')
    const narrow = document.querySelector('.content-image--narrow')
    text.getBoundingClientRect().width
    wide.getBoundingClientRect().width
    narrow.getBoundingClientRect().width

Expected desktop result: wide is approximately 1.2x the text width; narrow is
approximately 0.8x the text width; normal images match the text width.

On a mobile viewport, repeat the visual check. Normal, narrow, and wide images
should all fit the available content width with no horizontal scrolling.

Also verify custom SPWZ pages still render basic images normally, because they
reuse `.image-wrapper` outside this new generated-content path:

    http://localhost:4022/spwz-ebook/
    http://localhost:4022/spwz-szkolenie/

Acceptance criteria:

- `pnpm typecheck` passes.
- `pnpm lint` has no new errors.
- Generated blog, note, and page routes can render banners and Markdown images.
- Banners default to wide on desktop.
- Markdown images default to normal.
- `?size=normal`, `?size=narrow`, and `?size=wide` work.
- Unknown `?size=` values fall back to normal.
- Mobile has a single practical image width and no horizontal overflow.
- SPWZ/custom routes using `.image-wrapper` do not pick up the new generated
  content image sizing unintentionally.

## Idempotence and Recovery

The implementation is additive and safe to repeat. If typecheck fails after the
image metadata pass, first restore the previous `src/pages/[slug].tsx` rendering
path from git diff context, then reapply the helper and component changes in
smaller steps.

Temporary Markdown edits for visual validation should be reverted unless the
user explicitly wants to keep them as real content changes. Use `git diff` to
confirm only intended files remain changed.

If the new intrinsic `ContentImage` component cannot fully replace the current
`fill` image behavior in one pass, keep the old `.image-wrapper` path for
custom routes and update this plan before broadening the generated-content
implementation.

Do not touch unrelated dirty files unless they become directly relevant or the
user asks.

## Artifacts and Notes

Important current CSS:

    :root {
      --maxWidth-wrapper: 38rem;
      --maxWidth-wrapper-wide: var(--maxWidth-3xl);
    }

    .global-wrapper {
      margin: var(--spacing-0) auto;
      max-width: var(--maxWidth-wrapper);
      padding: var(--spacing-10) var(--spacing-5);
      overflow-x: auto;
    }

    .image-wrapper {
      position: relative;
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }

    .image-wrapper img {
      position: relative !important;
    }

The important implementation direction is to stop depending on the last rule
for generated Markdown content images.

## Interfaces and Dependencies

Do not add a new image library. The repo already depends on:

- `next/image` through Next.js.
- `plaiceholder` for blur placeholders and image metadata.
- `sharp`, used by `plaiceholder`.
- `react-markdown`, `remark-gfm`, and `rehype-slug` for Markdown rendering.

The implementation should introduce local types in `src/pages/[slug].tsx` or a
small helper file only if the route file becomes too dense. Acceptable types:

    type MarkdownImageSize = 'normal' | 'narrow' | 'wide'

    type ParsedMarkdownImageSrc = {
      fileName: string
      size: MarkdownImageSize
    }

    type ContentImageMetadata = {
      src: string
      width: number
      height: number
      blurDataURL: string
    }

    type ContentImageMetadataByFileName = Record<string, ContentImageMetadata>

If the helper moves out of `[slug].tsx`, put it somewhere narrow and honest
such as `src/lib/content-images.ts`. Do not create a broad image framework or a
new content abstraction for this feature.
