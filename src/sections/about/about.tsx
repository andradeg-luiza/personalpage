export default function About() {
  return (
    <section
      id="about"
      className="soft-container py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-heading text-center md:text-left">
        About Me
      </h2>

      <div className="max-w-3xl text-center md:text-left mx-auto space-y-6 text-[var(--text-muted)] text-lg leading-relaxed">
        <p>
          I'm Luiza, a front-end developer focused on building clean, modern, and meaningful digital
          experiences. I believe that great interfaces are not just visually appealing — they tell a
          story, guide users with intention, and reflect the identity behind the product.
        </p>

        <p>
          My work blends aesthetics with functionality, always aiming for clarity, accessibility, and
          a strong sense of personality. I enjoy transforming ideas into interfaces that feel smooth,
          intuitive, and visually consistent.
        </p>

        <p>
          Beyond coding, I care deeply about design, user experience, and the emotional impact that
          technology can create. Every project is an opportunity to craft something that feels both
          human and technically refined.
        </p>
      </div>
    </section>
  );
}