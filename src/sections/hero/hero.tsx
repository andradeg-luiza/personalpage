import profile from "../../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 pt-32 pb-40 soft-container"
    >
      {/* Glow técnico esverdeado */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_60%_40%,rgba(62,243,192,0.22),transparent_70%)]
          blur-3xl opacity-70
        "
      />

      {/* Texto */}
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight neon-heading">
          Developing interfaces with identity and precision
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[var(--text-muted)]">
          I’m Luiza, a front-end developer passionate about creating digital experiences that combine aesthetics, functionality, and personality.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="
              glass-panel glass-panel-hover
              px-6 py-3 rounded-xl text-lg font-medium
              transition-all duration-300
              text-[var(--accent-green)]
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-xl text-lg font-medium
              bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-green-dark)]
              hover:opacity-90 transition-all duration-300
              shadow-[0_0_20px_rgba(62,243,192,0.35)]
              text-black font-semibold
            "
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Foto */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[var(--accent-green)] shadow-[0_0_30px_rgba(62,243,192,0.25)]">
          <img
            src={profile}
            alt="Luiza"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}