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
        {/* Project Image */}
        <div className="md:w-1/2 w-full">
          <div
            className="
              w-full h-64 md:h-full rounded-xl overflow-hidden
              border border-[var(--accent-green)]/40
              shadow-[0_0_20px_rgba(62,243,192,0.15)]
            "
          >
            <img
              src="/src/assets/images/placeholder.png"
              alt="DinoExplorer Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-[var(--accent-green)] mb-4">
            DinoExplorer: Chronicles of the Wild
          </h3>

          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            DinoExplorer is a scientific exploration game where players travel through vibrant
            prehistoric biomes to discover, study, and document real dinosaur species. Customize your
            explorer, build emotional bonds with creatures, and complete the Primeval Encyclopedia
            through realistic cards, dynamic weather, and immersive gameplay.
          </p>

          <ul className="list-disc list-inside text-[var(--text-muted)] text-base space-y-2 mb-6">
            <li>🧬 Realistic dinosaur behavior and bonding system</li>
            <li>📘 Scientific cards with accurate data and reconstructions</li>
            <li>🌍 Biomes based on paleoclimate studies</li>
            <li>🎮 Coming soon to Android and iOS</li>
            <li>🎯 Final goal: complete the Primeval Encyclopedia</li>
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
              Game Development
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
              Scientific Design
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
              Educational Gameplay
            </span>
          </div>

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