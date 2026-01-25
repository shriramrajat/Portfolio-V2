# Rajat Shriram | Portfolio

A minimalist, high-performance portfolio website built with modern web technologies. Designed to be a stable "living document" of my engineering work and photography.

**[View Live Site →](https://portfolio-v2-eight-gamma.vercel.app/)**

---

## ❄️ Maintenance Status: FROZEN UI

**The design and architecture of this project are locked.**
This repository represents a finished product interface. The focus going forward is strictly on content updates (adding new projects or photos) and maintaining stability.

- **✅ Allowed**: Content updates, adding new projects/photos, critical bug fixes.
- **❌ Prohibited**: Redesigns, adding new UI sections, experimental features.

---

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/UI (Radix Primitives)
- **Deployment**: Vercel
- **Linting**: ESLint

## 📂 Project Structure

```
src/
├── components/   # UI Components (Layout, Shadcn primitives)
├── data/         # Content Source of Truth (Projects, Photos)
├── pages/        # Route Components (Home, Projects, etc.)
└── index.css     # Global Styles & Tailwind Config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start local dev server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build
```

---

## 📝 Managing Content

### Adding a New Project
1.  Navigate to `src/data/projects.ts`.
2.  Add a new entry to the `projects` array adhering to the `Project` interface.
3.  The UI will automatically generate the card and detail page.

### Adding Photography
1.  Add your optimized image (WebP/JPEG, <300KB) to the `public/` directory.
2.  Navigate to `src/data/photos.ts`.
3.  Add a new entry referencing the image path.

---

## 📄 License

© 2026 Rajat Shriram. All Rights Reserved.
