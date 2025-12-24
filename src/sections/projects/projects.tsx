export default function Projects() {
  return (
    <section id="projects" className="soft-container py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-heading text-center md:text-left">
        Projects
      </h2>

      <div
        className="
          border border-[var(--accent-green)]/30 rounded-2xl p-8
          bg-white/5 backdrop-blur-xl
          shadow-[0_0_25px_rgba(62,243,192,0.12)]
          transition-all duration-300
          hover:shadow-[0_0_35px_rgba(62,243,192,0.22)]
          flex flex-col md:flex-row gap-10
        "
      >
        {/* Placeholder image */}
        <div className="md:w-1/2 w-full">
          <div
            className="
              w-full h-64 md:h-full rounded-xl overflow-hidden
              border border-[var(--accent-green)]/40
              shadow-[0_0_20px_rgba(62,243,192,0.15)]
            "
          >
            <img
              src="/placeholder-project.png"
              alt="Dino Expedition Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-[var(--accent-green)] mb-4">
            Dino Expedition
          </h3>

          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            Dino Expedition is an adventure game currently in development, focused on exploration,
            survival, and discovery in a prehistoric world filled with dinosaurs. The project blends
            immersive environments, engaging mechanics, and a strong visual identity to create a
            unique gameplay experience.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
              Game Development
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
              Design & Worldbuilding
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
              Creative Direction
            </span>
          </div>

          {/* Button */}
          <a
            href="#"
            className="
              glass-panel glass-panel-hover
              px-8 py-3 rounded-xl text-lg font-medium
              text-[var(--accent-green)]
              w-fit
            "
          >
            View Details
          </a>
        </div>
      </div>
    </section>
  );
}