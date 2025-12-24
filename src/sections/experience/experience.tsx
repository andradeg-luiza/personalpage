export default function Contact() {
  return (
    <section id="contact" className="soft-container py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 neon-heading text-left">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6">
        
        {/* Email */}
        <a
          href="mailto:andradeg.luiza@outlook.com"
          className="
            flex items-center justify-center
            px-10 py-4 rounded-xl
            border border-[var(--accent-green)]/40
            bg-white/5 backdrop-blur-xl
            text-[var(--accent-green)] text-xl font-semibold
            shadow-[0_0_20px_rgba(62,243,192,0.12)]
            hover:shadow-[0_0_30px_rgba(62,243,192,0.22)]
            hover:bg-[var(--accent-green)]/10
            transition-all duration-300
            w-full md:w-[260px]
          "
        >
          Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/andradegluiza/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            px-10 py-4 rounded-xl
            border border-[var(--accent-green)]/40
            bg-white/5 backdrop-blur-xl
            text-[var(--accent-green)] text-xl font-semibold
            shadow-[0_0_20px_rgba(62,243,192,0.12)]
            hover:shadow-[0_0_30px_rgba(62,243,192,0.22)]
            hover:bg-[var(--accent-green)]/10
            transition-all duration-300
            w-full md:w-[260px]
          "
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/andradeg-luiza"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            px-10 py-4 rounded-xl
            border border-[var(--accent-green)]/40
            bg-white/5 backdrop-blur-xl
            text-[var(--accent-green)] text-xl font-semibold
            shadow-[0_0_20px_rgba(62,243,192,0.12)]
            hover:shadow-[0_0_30px_rgba(62,243,192,0.22)]
            hover:bg-[var(--accent-green)]/10
            transition-all duration-300
            w-full md:w-[260px]
          "
        >
          GitHub
        </a>

      </div>
    </section>
  );
}