# GEMINI.md - Portfolio Project Context

## Project Overview
This is a high-end, professional portfolio website for **Aziz Fekih**, an IT student specializing in Python, API Architecture, and Business Intelligence. The project is designed with a "15+ years experience" aesthetic, focusing on modern web standards, smooth animations, and a polished dark-mode UI.

### Key Technologies
- **Frontend Framework**: React 19 (TypeScript)
- **Build Tool**: Vite 7
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with a custom-built utility system (defined in `src/index.css`)
- **Aesthetic**: Glassmorphism, Dark Theme, Fluid Transitions

## Architecture & Conventions
- **Modular Components**: Located in `src/components/`. Each component is self-contained.
- **Global Styles**: Centralized in `src/index.css` using CSS Variables for theme management.
- **Utility First**: Leverages a custom utility-class system for layout (`.flex`, `.grid`, `.bg-glass`, etc.) to keep the codebase clean and avoid heavy external dependencies like Tailwind.
- **Responsive Design**: Mobile-first approach with CSS media queries.
- **Performance**: Optimized via Vite and TypeScript for type safety and fast HMR.

## Building and Running
| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Production Build** | `npm run build` |
| **Preview Build** | `npm run preview` |
| **Linting** | `npm run lint` |

## Development Guidelines
1. **Styling**: Prefer using the established CSS variables and utility classes in `index.css`. For component-specific overrides, use inline styles or a dedicated CSS file if complex.
2. **Animations**: Use `framer-motion` for all transitions to maintain consistency. Prefer `whileInView` for entry animations.
3. **Icons**: Exclusively use `lucide-react`.
4. **Type Safety**: Maintain strict TypeScript typing for all props and state.
5. **Responsiveness**: Always verify changes on mobile and desktop viewports.

## Core Mandates for AI Interactions
- **No Tailwind**: Do not introduce Tailwind CSS. Maintain the Vanilla CSS / Utility approach.
- **Maintain Aesthetic**: Keep the Glassmorphism and "Deep Dark" theme intact.
- **Surgical Updates**: When modifying components, ensure animations remain fluid and do not break the scroll-reveal logic.
