# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development:**
- `yarn dev` - Start development server on port 4022
- `yarn build` - Production build (includes prebuild image copying)
- `yarn lint` - ESLint with Prettier integration
- `yarn lint:fix` - Auto-fix linting issues

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