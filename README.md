# Personal Portfolio — React + TypeScript + Vite + Tailwind

This project is my personal portfolio, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
It showcases my profile, skills, projects, and work experience in a clean, modern, and scalable way.  
The architecture is designed to be easy to maintain, extend, and test.

---

## 📌 Features

- Responsive layout built with **Tailwind CSS**
- Clean and modular **React + TypeScript** architecture
- Dedicated sections for **Profile**, **Skills**, **Projects**, **Experience**, and **Contact**
- Reusable UI and layout components
- Centralized static data (skills, projects, experience)
- Custom hooks for navigation and theme handling
- Automated testing:
  - **Cypress** for front‑end E2E
  - **Pactum** for API tests
  - **k6** for performance tests
- Ready for seamless deployment on **Vercel**

---

## 🛠️ Tech Stack

### Frontend

- **React** — UI library  
- **TypeScript** — Type safety and better DX  
- **Vite** — Fast dev server and bundler  
- **Tailwind CSS** — Utility‑first CSS framework  

### Testing

- **Cypress** — End‑to‑end and UI interaction testing  
- **Pactum** — API and integration testing  
- **k6** — Load and stress testing  

### Deployment

- **Vercel** — Zero‑config deploy for Vite + React apps  

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/personal-portfolio.git
cd personal-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The project will be available at:

```text
http://localhost:5173
```

---

## 📂 Project structure

```text
personal-portfolio/
├─ src/
│  ├─ assets/
│  │  ├─ images/                    # Profile and project images
│  │  │  └─ profile.jpg
│  │  ├─ icons/                     # SVG icons
│  │  │  └─ react.svg
│  │  └─ data/                      # Static data used in the UI
│  │     ├─ skills.ts               # Skills list
│  │     ├─ projects.ts             # Projects list
│  │     └─ experience.ts           # Work experience timeline
│  │
│  ├─ components/
│  │  ├─ layout/                    # Layout-level components
│  │  │  ├─ Header.tsx
│  │  │  ├─ Footer.tsx
│  │  │  └─ Layout.tsx              # Main layout wrapper
│  │  └─ ui/                        # Reusable UI pieces
│  │     ├─ Button.tsx
│  │     ├─ SectionTitle.tsx
│  │     ├─ Card.tsx
│  │     └─ Badge.tsx
│  │
│  ├─ sections/                     # Page sections
│  │  ├─ Hero/
│  │  │  └─ Hero.tsx                # Intro, name, role, CTA
│  │  ├─ About/
│  │  │  └─ About.tsx               # About me, background
│  │  ├─ Skills/
│  │  │  └─ Skills.tsx              # Skills grid/badges
│  │  ├─ Projects/
│  │  │  └─ Projects.tsx            # Portfolio projects
│  │  ├─ Experience/
│  │  │  └─ Experience.tsx          # Work experience timeline
│  │  └─ Contact/
│  │     └─ Contact.tsx             # Contact info/form
│  │
│  ├─ hooks/                        # Custom React hooks
│  │  ├─ useScrollToSection.ts      # Smooth scroll navigation
│  │  └─ useTheme.ts                # Theme (light/dark) handling
│  │
│  ├─ utils/                        # Helper functions
│  │  └─ scrollToId.ts              # Scroll to element by id
│  │
│  ├─ styles/
│  │  ├─ globals.css                # Global styles and Tailwind base
│  │  └─ animations.css             # Optional custom animations
│  │
│  ├─ App.tsx                       # Main app component
│  └─ main.tsx                      # React entry point
|  └─ index.css
|
├─ cypress/
│  ├─ e2e/
│  │  └─ portfolio.cy.ts            # E2E tests for main user flows
│  ├─ fixtures/
│  ├─ support/
│  └─ cypress.config.ts
│
├─ tests/
│  ├─ api/                          # Pactum API tests
│  │  └─ api.test.ts
│  └─ performance/                  # k6 performance tests
│     └─ load-test.ts
│
├─ index.html                       # Root HTML file
├─ package.json                     # Scripts and dependencies
├─ postcss.config.cjs               # PostCSS configuration
├─ tailwind.config.ts               # Tailwind configuration
└─ README.md                        # Project documentation
```

---

## 📜 NPM scripts (suggested)

These are typical scripts you might have in your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "test:api": "node tests/api/api.test.ts",
    "test:perf": "k6 run tests/performance/load-test.ts",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}
```

---

## 🚀 Deployment (Vercel)

This project is optimized for **Vercel**:

1. Push your code to GitHub.
2. Go to [https://vercel.com](https://vercel.com).
3. Click **"New Project"** and import your repository.
4. Vercel will auto‑detect:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

Each new push to the main branch will trigger a new deployment automatically.

---

## 🧪 Testing

### Cypress — Frontend E2E

Run Cypress tests:

```bash
npm run cypress:open
```

or headless:

```bash
npm run cypress:run
```

---

### Pactum — API Testing

Run API tests:

```bash
npm run test:api
```

---

### k6 — Performance / Load Testing

Run performance tests:

```bash
npm run test:perf
```

---

## 📈 Future improvements

- Add dark/light theme toggle  
- Add animations (e.g. with Framer Motion)  
- Add filtering for projects (by tech, type, etc.)  
- Integrate a real backend for the contact form  
- Improve accessibility (ARIA roles, keyboard navigation)  
- Increase and refine automated test coverage  

---

## 🧑‍💻 Author

Created by **Luiza Gusmão de Andrade Lima** — QA Engineer.  
This portfolio is part of my journey in building clean, modern, and well‑tested web interfaces.
```