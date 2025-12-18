# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager:**
- Use `pnpm` for all package management commands in this repository
- Do not use `npm` or `yarn` commands
- pnpm is managed via corepack for version consistency

**Development:**
- `pnpm dev` - Start development server on port 4022
- `pnpm build` - Production build (includes prebuild image copying)
- `pnpm lint` - ESLint with Prettier integration
- `pnpm lint:fix` - Auto-fix linting issues

**Database migrations:**
- Never run migrations unless asked. If they need to be run, inform the user and print the command he should use.

## TypeScript/React Best Practices

### Avoid React.FC
- Never use `React.FC` or `React.FunctionComponent` for typing React components
- Instead, type props directly in the function parameter
- Example: `const Component = ({ prop }: Props) => { ... }` not `const Component: React.FC<Props> = ({ prop }) => { ... }`
- Reason: React.FC is outdated, adds unnecessary complexity, interferes with TypeScript inference, and automatically includes children even when not needed

### Prefer Types over Interfaces
- Use `type` instead of `interface` for object shapes and component props
- Example: `type Props = { name: string }` not `interface Props { name: string }`
- Exception: Only use `interface` when you need declaration merging or extending other interfaces
- Reason: Types are more flexible, support unions/intersections better, and are more consistent with modern TypeScript practices

### Type Definitions vs Type Assertions
- **ALWAYS prefer type definitions (`:Type`) over type assertions (`as Type`)**
- Type definitions provide compile-time type checking and catch mismatches
- Type assertions bypass type checking and should only be used when you know more than TypeScript
- Examples:
  ```typescript
  // Good - type definition
  const getData = (): ApiData => fetchData()
  const user: User = { name: 'John', age: 30 }
  
  // Avoid - type assertion (unless necessary)
  const data = fetchData() as ApiData
  ```
- **When type assertions are acceptable:**
  - DOM elements: `element as HTMLInputElement`
  - Working with untyped third-party libraries
  - When you have more type information than TypeScript can infer

### Additional TypeScript Rules
- Always use explicit return types for functions when not obvious
- Prefer const assertions over type annotations when possible
- Use meaningful names for generic type parameters (not just T, U, V)
- Use generic functions instead of type assertions when possible

## Architecture Overview

**Framework:** Next.js 15.0.2 with TypeScript using Pages Router (not App Router)

**Content Management System:**
- File-based content using markdown with gray-matter frontmatter
- Three content types: `content/blog/`, `content/notes/`, `content/pages/`
- Additional content in `blog-posts-collection/`
- Images automatically copied from content dirs to `public/images/` during build

**Routing Strategy:**
- Single dynamic route `pages/[slug].tsx` handles all blog posts, notes, and pages
- Content path detection logic in `src/lib/posts.ts`
- Static generation with `getStaticProps` and `getStaticPaths`

## Project Structure

```
src/
├── pages/           # Next.js Pages Router
├── components/      # Shared React components
├── lib/            # Content loading and utility functions
├── styles/         # Custom CSS (no framework)
├── spwz/           # SPWZ product-specific components
└── config.ts       # Site metadata and configuration

content/
├── blog/           # Personal articles and experiences  
├── notes/          # Book summaries and learning notes
└── pages/          # Static pages (terms, privacy, etc.)
```

## Content Creation Patterns

**Content Structure:**
- Each piece of content lives in its own directory with `index.md`
- Frontmatter: `title`, `createdAt`, `updatedAt`, `published`, `description`, optional `banner`
- Images placed alongside markdown files are copied to `public/images/` during build
- Content is primarily in Polish

**SEO Strategy:**
- Different `ogType` values: "article" for blog posts, "page" for static content
- Custom SEO component handles meta tags and Open Graph
- Automatic slug generation from directory names

## Styling Approach

- Custom CSS in `src/styles/style.css` with CSS custom properties
- Dark/light theme support via `next-themes` and CSS classes
- Component-specific CSS files imported in `_app.tsx`
- No CSS framework - hand-crafted responsive styles

## Special Features

**SPWZ Product Ecosystem:**
- Dedicated component library in `src/spwz/` for training program
- Multiple MailerLite form integrations with different campaigns
- Product-specific landing pages and sales funnels

**Analytics Integration:**
- Custom analytics (analytics.krzysztof.io)
- Meta Pixel tracking with product-specific events
- Conditional tracking based on page types

**Image Handling:**
- `plaiceholder` for blur placeholders
- Automatic optimization via Next.js Image component
- Build-time copying from content directories

## Development Notes

**Content Loading:**
- `src/lib/posts.ts` contains the core content loading logic
- Supports three content types with different handling
- Automatic excerpt generation and date formatting

**Component Patterns:**
- Layout component with conditional rendering for landing pages
- ReactMarkdown with custom renderers for images and headers
- Reusable components for social sharing, testimonials, highlights

**Deployment:**
- Netlify deployment with `netlify.toml` configuration
- Prebuild script copies images before Next.js build
- Static export to `.next/` directory

## API Routes

- Calendar integration API at `pages/api/calendar/[code].ts`
- Rate limiting implemented with in-memory storage
- Cache-busting headers for Netlify compatibility