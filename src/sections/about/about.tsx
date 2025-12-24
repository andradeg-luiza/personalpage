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
            I’m a Quality Assurance Engineer with a strong foundation in software
            development — a combination that allows me to understand systems
            deeply, anticipate failures, and build solutions that are not only
            functional, but truly reliable.
          </p>

          <p className="text-lg text-[#D9C7B8]/90 leading-relaxed mb-6">
            My experience spans manual and automated testing, API validation,
            CI/CD pipelines, quality strategy, and technical analysis. I bring a
            holistic view to the development lifecycle, ensuring that quality is
            not a final step, but a continuous and integrated part of the
            process.
          </p>

          <p className="text-lg text-[#D9C7B8]/90 leading-relaxed mb-6">
            As a developer, I leverage my coding skills to create efficient test
            automation, improve workflows, and collaborate closely with
            engineering teams. My approach blends precision, curiosity, and
            creativity — always aiming for scalable, maintainable, and elegant
            solutions.
          </p>

          <p className="text-lg text-[#C97A50] leading-relaxed font-medium">
            I’m also the creator of <span className="font-semibold">DinoLab</span>,
            a unique tech project that merges science, storytelling, and modern
            development — a space where I explore innovation, experimentation,
            and the joy of building something truly original.
          </p>
        </motion.div>
      </div>
    </section>
  );
}