# Personal Portfolio — React + TypeScript + Vite + Tailwind

This project is my personal portfolio, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
It showcases my work, skills, and experience as a front‑end developer, following a clean and scalable architecture.  
The goal is to maintain a modern, responsive, and accessible interface while keeping the codebase organized and easy to extend.

---

## 📌 Features

- Fully responsive layout using **Tailwind CSS**
- Modular and scalable folder architecture
- Reusable UI components
- Sections structured independently for maintainability
- Smooth development experience with **Vite**
- Type‑safe codebase with **TypeScript**
- Ready for deployment on platforms like Vercel, Netlify, or GitHub Pages

---

## 🛠️ Tech Stack

- **React** — UI library  
- **TypeScript** — Type safety  
- **Vite** — Fast dev server and bundler  
- **Tailwind CSS** — Utility‑first styling  

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

```
http://localhost:5173
```

---

## 📂 Project Structure

Claro, Luiza — aqui está a **estrutura de pastas com visual mais organizado**, usando ícones e indentação clara para facilitar a leitura.

Você pode usar exatamente assim no README.

---

```markdown
## 📂 Project Structure

personal-portfolio/
├─ src/
│  ├─ assets/                   # Static files (images, icons)
│  │  ├─ images/
│  │  └─ icons/
│  │
│  ├─ components/               # Reusable UI and layout components
│  │  ├─ ui/
│  │  │  ├─ Button.tsx          # Generic button component
│  │  │  └─ SectionTitle.tsx    # Section heading component
│  │  └─ layout/
│  │     ├─ Header.tsx          # Top navigation bar
│  │     └─ Footer.tsx          # Page footer
│  │
│  ├─ sections/                 # Page sections
│  │  ├─ Hero/
│  │  │  └─ Hero.tsx            # Intro section with name and role
│  │  ├─ About/
│  │  │  └─ About.tsx           # Personal bio and background
│  │  ├─ Skills/
│  │  │  └─ Skills.tsx          # Technologies and tools
│  │  ├─ Projects/
│  │  │  └─ Projects.tsx        # Portfolio showcase
│  │  └─ Contact/
│  │     └─ Contact.tsx         # Contact form or links
│  │
│  ├─ hooks/                    # Custom React hooks
│  │  ├─ useScrollToSection.ts  # Smooth scroll navigation
│  │  └─ useTheme.ts            # Theme toggle logic
│  │
│  ├─ lib/                      # Utilities and constants
│  │  ├─ analytics.ts           # Tracking and metrics
│  │  └─ constants.ts           # Static values and config
│  │
│  ├─ styles/                   # Global styles and animations
│  │  ├─ globals.css            # Tailwind base styles
│  │  └─ animations.css         # Custom animations
│  │
│  ├─ App.tsx                   # Main app component
│  └─ main.tsx                  # Application entry point
│
├─ index.html                   # Root HTML file
├─ package.json                 # Dependencies, scripts, metadata
├─ postcss.config.cjs           # PostCSS configuration
├─ tailwind.config.ts           # Tailwind configuration
└─ README.md                    # Project documentation

---

## 🧱 Folder Overview

### **assets/**
Static files such as images, icons, and illustrations.

### **components/**
Reusable UI elements and layout components.

- **ui/** → Buttons, titles, cards, inputs  
- **layout/** → Header, Footer, Navigation  

### **sections/**
Each page section is isolated for clarity and scalability.

### **hooks/**
Custom React hooks used across the application.

### **lib/**
Utilities, constants, and integrations.

### **styles/**
Global styles, Tailwind imports, and custom animations.

---

## 🚀 Deployment

This project can be deployed on:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

Build command:

```bash
npm run build
```

Output folder:

```
dist/
```

---

## 📈 Next Steps

- Add dark/light theme toggle  
- Add animations with Framer Motion  
- Add project filtering  
- Add contact form with backend integration  
- Improve accessibility (ARIA, keyboard navigation)  

---

## 🧑‍💻 Author

Created by **Luiza** — Front‑end Developer.  
This portfolio is part of my journey in building modern, accessible, and scalable web interfaces.

```
