# Nova Ventures / Zenply - Landing Page

A premium, futuristic landing page built with React, Vite, and Tailwind CSS v4. Designed for Venture Capital firms, Web3 Incubators, or High-Tech Consultancies.

## 🎨 Theme Switcher

This project supports two distinct visual themes. The source code allows you to toggle between them without changing the component logic, effectively "white-labeling" the structure.

### Available Themes

1.  **Nova** (Default):
    *   **Aesthetic**: Dark, Cyberpunk, High-Tech.
    *   **Colors**: Deep Black Background, Neon Orange Primary, Electric Blue Secondary.
    *   **Vibe**: Aggressive, Innovative, Web3.

2.  **Zenply**:
    *   **Aesthetic**: Organic, Calm, Professional.
    *   **Colors**: Deep Organic Dark Background, Deep Purple Primary, Bamboo Green Secondary.
    *   **Vibe**: Strategic, Reliable, Growth-Oriented.

### How to Switch Themes

1.  Open `src/config/theme.ts`.
2.  Change the `active` property to either `'nova'` or `'zenply'`.

```typescript
// src/config/theme.ts
export const themeConfig = {
  active: 'zenply', // <--- Change this value
};
```

3.  Save the file. The site will check this config on load and apply the correct CSS variables globally.

---

## 🛠 Tech Stack

*   **Framework**: React 18 + TypeScript + Vite
*   **Styling**: Tailwind CSS v4 (using the new CSS-first `@theme` configuration)
*   **Animations**: Framer Motion (complex scroll triggers, layout animations)
*   **Icons**: Lucide React

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

*   `src/components/`: Reusable UI sections (Hero, Services, Portfolio, etc.).
*   `src/config/`: Configuration files (Theme settings).
*   `src/index.css`: Global styles and Theme variable definitions.

## ✨ Key Features

*   **Dynamic Theming**: CSS Variable abstraction for easy rebranding.
*   **Performance**: Optimized animations using hardware-accelerated transforms.
*   **Responsive**: Mobile-first design architecture.
*   **Interactive**: Infinite marquees, hover effects, and parallax backgrounds.
