# Tech Stack

## Framework & Runtime
- **Next.js 16** (Pages Router) with **React 19**
- **TypeScript 5** — strict mode enabled
- **Node.js 24.x**

## Styling
- **Tailwind CSS 3** (JIT mode) — primary styling approach
- CSS Modules (`*.module.css`) for component-scoped styles
- Custom breakpoints are max-width based (mobile-first inverted):
  - `2xl`: max 1535px, `xl`: max 1279px, `lg`: max 1023px, `md`: max 767px, `sm`: max 639px, `xs`: max 479px

## Key Libraries
- `framer-motion` — animations and transitions
- `@fortawesome/react-fontawesome` — icons
- `swr` — data fetching/caching

## Path Aliases
- `@/*` maps to `./src/*`

## Environment
- `.env.development` and `.env.production` for environment-specific config
- `assetPrefix` in `next.config.js` is set to `http://localhost:3000` in dev, empty in prod

## Common Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with zero warnings tolerance
```
