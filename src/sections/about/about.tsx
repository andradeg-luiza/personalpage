import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-32 px-6 max-w-7xl mx-auto
      "
    >
      {/* Glow decorativo bordô */}
      <div
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-[380px] h-[380px]
          bg-[#5A1F2A]/35 blur-[130px]
          rounded-full pointer-events-none
        "
      ></div>

      {/* Linhas tech sutis */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C97A50] to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C97A50] to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-12">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            text-4xl md:text-5xl font-bold
            text-[#F2E9E4]
            drop-shadow-[0_0_12px_rgba(201,122,80,0.35)]
          "
        >
          About Me
        </motion.h2>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="
            bg-white/5 backdrop-blur-xl
            border border-[#C97A50]/25
            rounded-xl p-10
            shadow-[0_0_25px_rgba(90,31,42,0.25)]
            max-w-4xl
          "
        >
          <p className="text-lg text-[#D9C7B8]/90 leading-relaxed mb-6">
            I’m Luiza Gusmão Lima, a Quality Assurance Engineer and Software
            Developer focused on building technology that is reliable,
            intentional and genuinely impactful. My work is grounded in a
            methodical, curious and analytical mindset — the kind that values
            clarity, structure and long‑term quality over quick fixes.
          </p>

          <p className="text-lg text-[#D9C7B8]/90 leading-relaxed mb-6">
            Throughout my career, I’ve developed a strong interest in how
            storytelling, design and engineering intersect. That curiosity led
            me to create <span className="text-[#C97A50] font-semibold">Dino
            Expedition</span>, a long‑term project where I explore world‑building,
            scientific structure and modern development practices to craft an
            experience that is both technical and creative. It represents the
            type of work I aspire to continue building: thoughtful, polished and
            driven by purpose.
          </p>

          <p className="text-lg text-[#D9C7B8]/90 leading-relaxed mb-6">
            I believe quality is not just a phase of development — it’s a
            philosophy. It shapes how systems evolve, how teams collaborate and
            how users trust the products they interact with. Because of that, I
            approach engineering with a balance of precision and creativity,
            always aiming to deliver solutions that are stable, scalable and
            meaningful.
          </p>

        </motion.div>
      </div>
    </section>
  );
}