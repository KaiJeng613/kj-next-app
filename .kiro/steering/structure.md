# Project Structure

```
src/
  app/           # Next.js app dir assets (globals.css, favicon) — not used for routing
  components/    # Shared UI components
    hooks/       # Custom React hooks
  pages/         # File-based routing (Pages Router)
    api/         # API route handlers
  styles/        # Global and module CSS files
  util/          # TypeScript types and utility functions
public/          # Static assets (images, PDF, favicon, robots.txt, sitemap.xml)
json/            # Static JSON data files (e.g. contact.json)
```

## Conventions

- Pages live in `src/pages/` — each file is a route
- API routes live in `src/pages/api/` and export a default `handler` function
- Reusable UI goes in `src/components/`
- Types and non-React utilities go in `src/util/`
- Static data that doesn't need a DB lives in `json/`
- Images and downloadable files (e.g. Resume.pdf) go in `public/`

## Component Patterns

- Functional components with TypeScript props interfaces
- `Layout` component wraps page content and injects `<Head>` metadata
- `Navbar` is rendered per-page (not in `_app.tsx`)
- Inline sub-components (e.g. `FeaturedProject`) are defined in the same file as the page that uses them
- `framer-motion` used for hover/tap interactions and scroll-based animations

## Styling Patterns

- Tailwind utility classes are the default — avoid writing custom CSS unless necessary
- CSS Modules used for legacy or complex component styles
- Dark mode classes (`dark:`) are applied manually via Tailwind
- Color tokens like `text-dark`, `text-light`, `bg-dark` are used consistently — check `tailwind.config.js` and `styles.css` before adding new ones
