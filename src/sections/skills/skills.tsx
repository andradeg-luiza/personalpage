const skillGroups = [
  {
    title: "Core Technologies",
    items: [
      "Semantic HTML",
      "Modern CSS (Flexbox, Grid)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Responsive Design",
      "Accessibility (A11y)",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "React (Hooks, Context, Custom Hooks)",
      "Vite",
      "Tailwind CSS",
      "Styled Components",
      "REST APIs",
      "Figma",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Pactum JS",
      "K6 (Performance)",
      "Debugging & Troubleshooting",
    ],
  },
  {
    title: "Workflow & Best Practices",
    items: [
      "Git & GitHub",
      "Clean Code",
      "Component Architecture",
      "Version Control",
      "Agile Collaboration",
      "Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="soft-container py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-heading text-center md:text-left">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              border border-[var(--accent-green)]/30 rounded-2xl p-6
              bg-white/5 backdrop-blur-xl
              shadow-[0_0_25px_rgba(62,243,192,0.12)]
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(62,243,192,0.22)]
            "
          >
            <h3 className="text-2xl font-semibold text-[var(--accent-green)] mb-4">
              {group.title}
            </h3>

            <ul className="space-y-2 text-[var(--text-muted)] text-lg">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="
                    flex items-center gap-2
                    before:content-[''] before:w-2 before:h-2
                    before:rounded-full before:bg-[var(--accent-green)]
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}