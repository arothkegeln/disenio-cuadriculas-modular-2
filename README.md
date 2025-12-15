# 🧘 Zenply - Web3 Consultancy & Investment (Context for AI Agents)

**Current Status:** Production Ready (V1)
**Last Updated:** December 14, 2025

This `README.md` is specifically structured to provide **context for AI Agents** (and humans) picking up this project. It outlines the architecture, key systems (i18n, theming), and design philosophy to ensure consistent future development.

---

## 🛠 Technology Stack

- **Core**: React 18, TypeScript, Vite.
- **Styling**: Tailwind CSS v4.
  - *Note*: We use the **v4 CSS-first configuration** in `src/index.css`. There is NO `tailwind.config.js`. Theme variables are defined in the `@theme` block.
- **Animation**: Framer Motion (heavy usage for scroll-triggered reveals, infinite marquees, and parallax).
- **Icons**: Lucide React.
- **Routing**: Single Page Application (SPA) with section-based scrolling (anchors).

---

## 🌍 Internationalization (i18n) System

The project implements a **custom, lightweight i18n system** without external heavy libraries like `i18next`.

### 📂 Structure
- `src/i18n/en.ts`: **Source of Truth** for English text.
- `src/i18n/es.ts`: Spanish translations. Must strictly mirror the keys in `en.ts`.
- `src/contexts/LanguageContext.tsx`: Provides the `useLanguage()` hook.

### 🔑 Usage Pattern
To make any text dynamic:

1.  **Add Key**: Add the string to `src/i18n/en.ts` and `src/i18n/es.ts`.
    ```typescript
    // en.ts
    home: { title: "Welcome" }
    // es.ts
    home: { title: "Bienvenido" }
    ```
2.  **Consume Hook**:
    ```tsx
    import { useLanguage } from '../contexts/LanguageContext';

    export default function MyComponent() {
        const { t } = useLanguage();
        return <h1>{t('home.title')}</h1>;
    }
    ```

**IMPORTANT**: Never hardcode text in components. Always use `t()`.

---

## 🎨 Theming System (Dark/Light)

The project supports specific **Light** and **Dark** modes which are more than just color swaps; they are distinct brands.

- **Theme Context**: `src/contexts/ThemeContext.tsx`.
- **Toggle**: Managed via `Navbar` button (Moon/Sun).
- **Persistence**: Saves preference to `localStorage`.

### Logic
The theme is applied as a class (`.dark` or `.light`) on the `<html>` element. Tailwind uses generic variables that mapped differently in CSS:

```css
/* src/index.css */
@theme {
    --color-bg-base: var(--bg-deep-black) OR var(--bg-white);
    --color-text-primary: var(--white) OR var(--deep-black);
}
```

When building new components, **always use the semantic color names** (e.g., `bg-bg-base`, `text-text-primary`) rather than hardcoded colors like `bg-black` or `text-white`, so they adapt automatically.

---

## 📂 Project Structure

```
/public
  /assets/images    # Team avatars, Blog thumbnails. NO hardcoded imports.
  logo-full.png     # Main logo
/src
  /components
    /layout         # Navbar, Layout wrappers
    Hero.tsx        # Main entry (Parallax, particles)
    Services.tsx    # Grid layout
    Portfolio.tsx   # Infinite scroll marquee
    Team.tsx        # Grid with hover effects
    ...
  /config
    theme.ts        # (Legacy) Initial theme config, largely superseded by Context.
  /contexts         # Global State (Theme, Language)
  /i18n             # Translation dictionaries
  index.css         # Tailwind v4 setup & Global CSS Variables
  main.tsx          # App entry point with Providers
```

---

## 📸 Asset Management

- **Images**: Stored in `public/assets/images`.
- **Usage**: Reference them as absolute paths string in code: `src="/assets/images/team-1.png"`.
- **Missing Images**: If creating new sections, use CSS placeholders (gradients) or generated assets. Do not leave broken `<img>` tags.

---

## ⚠️ Known Behaviors & Guidelines

1.  **Navbar Logic**: It's sticky and glassmorphic. It looks for IDs (`#hero`, `#services`, etc.) for scrolling.
2.  **Mobile Menu**: Fully responsive overlay. Ensure z-indexes are high enough (`z-50`).
3.  **HMR**: If editing `LanguageContext`, Vite might do a full reload. This is normal.
4.  **Animations**: We use `whileInView={{ opacity: 1, y: 0 }}` heavily. ensure `viewport={{ once: true }}` is set to prevent repetitive distractions.

## 🚀 Running the Project

```bash
npm install
npm run dev
npm run build
```

**Next Agent**: If you are adding a new section, remember to:
1. Define the component.
2. Add text to `i18n`.
3. Add the ID for navigation.
4. Ensure it looks good in both Dark (Purple/Green) and Light (White/Gray) modes.
