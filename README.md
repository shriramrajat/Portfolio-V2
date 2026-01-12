# Rajat Shriram | Portfolio

**Live URL**: [https://port-folio-omega-jade.vercel.app](https://port-folio-omega-jade.vercel.app)

## 🧊 UI STATUS: FROZEN

**This project is in "Maintenance Mode" regarding its design and interface.**

The UI/UX is considered **complete and stable**. Use this repository as a document of work, not a design playground.

### 🚫 STRICT PROHIBITIONS
*   **NO** Redesigns
*   **NO** New Sections
*   **NO** UI Experiments or "Tweaks"

### ✅ ALLOWED UPDATES
*   **Content**: Updating text, descriptions, and biographies.
*   **Projects**: Adding new case studies to `src/data/projects.ts`.
*   **Photography**: Adding new images to `src/data/photos.ts`.

---

## 🛠️ Tech Stack
*   **Framework**: React + Vite
*   **Type Safety**: TypeScript
*   **Styling**: Tailwind CSS (Shadcn UI components)
*   **Deployment**: Vercel

## 📂 How to Add Content

### Adding a New Project
1.  Navigate to `src/data/projects.ts`.
2.  Add a new entry to the `projects` array following the `Project` interface.
3.  The UI will automatically render the new card and detail page.

### Adding Photography
1.  Navigate to `src/data/photos.ts`.
2.  Add a new entry to the `photos` array.
3.  Ensure images are optimized (WebP/JPEG, <300KB) before importing.

## 🚀 Running Locally

```bash
npm install
npm run dev
```

## 📦 Deployment

Deployments are automated via Vercel.

```bash
# To trigger a manual deployment
npx vercel --prod
```
