# Content Learning Platform (CLP)

CLP is a React/Vite learning platform prototype with separate Admin, Educator, and Learner workspaces. The app covers course management, enrollment, learner progress, quizzes, certificates, responsive navigation, and dark mode.

This repository is currently frontend-only. Dashboard behavior is backed by local domain fixtures so the product flows can be tested before the backend, storage, payments, and certificate services are connected.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Radix UI primitives
- Lucide icons
- Recharts
- Sonner toast notifications

## Project Structure

```text
src/
  app/
    App.tsx                    # Role-based dashboard entry point
    components/                # Dashboard, course, certification, and shared UI components
    data/                      # Local fixtures used by dashboard workflows
  styles/                      # Theme variables, Tailwind entry files, and global styles
guidelines/
  FIGMA_HANDOFF.md             # Design handoff and component map for Figma work
  figma-tokens.json            # Token reference for Figma/Tokens Studio
```

Generated or packaged output lives in `dist/`, `.figma-make-package/`, and `figma-upload/`. Treat those folders as build artifacts unless you are intentionally preparing a new handoff package.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying to Vercel

This project is configured for Vercel as a Vite static app.

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` also rewrites all routes to `index.html`, which keeps client-side navigation working after refreshes.

## Demo Access

The sign-in screen includes role selection for testing:

- Admin: platform analytics, course approvals, users, certification center, settings
- Educator: creator analytics, course content, quiz builder, students, earnings
- Learner: enrolled courses, quizzes, progress, achievements, certificates

## Design Handoff

For continued Figma work, use:

- `guidelines/FIGMA_HANDOFF.md`
- `guidelines/figma-tokens.json`
- `figma-upload/CLP-figma-code-upload.zip`

The handoff notes cover component names, route IDs, spacing, color tokens, and responsive behavior.

## Implementation Notes

- Keep fixture data in `src/app/data` until a service layer is introduced.
- Certificate download and payment actions currently show UI feedback instead of calling production services.
- Avoid broad visual rewrites. Prefer focused changes tied to a specific workflow.
- Preserve route IDs and role navigation when making UI changes.
