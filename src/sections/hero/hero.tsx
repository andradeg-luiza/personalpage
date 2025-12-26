import { motion } from "framer-motion";
import profileImg from "/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        pt-40 pb-32 px-6
        max-w-7xl mx-auto
      "
    >
      {/* Glow bordô metálico atrás da foto */}
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          w-[420px] h-[420px]
          bg-[#5A1F2A]/40
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      ></div>

      {/* Linhas tech sutis */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C97A50] to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C97A50] to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-16">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h1
            className="
              text-5xl md:text-6xl font-bold leading-tight
              text-[#F2E9E4]
            "
          >
            Quality Assurance Engineer <br />
            <span className="text-[#C97A50]">& Software Developer</span>
          </h1>

          <p
            className="
              text-lg text-[#D9C7B8]/90 leading-relaxed mt-6
            "
          >
            I’m a QA Engineer with 5+ years of experience ensuring reliability,
            performance and usability in large-scale systems. I combine strong QA
            expertise with modern frontend development skills to deliver stable,
            scalable and user‑focused digital experiences.
          </p>

          <p
            className="
              text-base text-[#C97A50] mt-4 font-medium tracking-wide
            "
          >
            Creator of DinoLab — an interactive tech project blending science,
            storytelling and modern development.
          </p>

          {/* Botões de currículo */}
          <div className="flex flex-wrap gap-6 mt-10">
            <a
              href="/cv/cv_portuguese.pdf"
              download
              className="
                px-8 py-3 rounded-md text-base font-semibold
                bg-gradient-to-r from-[#5A1F2A] to-[#C97A50]
                text-white
                shadow-[0_0_20px_rgba(201,122,80,0.35)]
                hover:shadow-[0_0_30px_rgba(201,122,80,0.55)]
                transition-all
              "
            >
              Currículo (PT)
            </a>

            <a
              href="/cv/cv_english.pdf"
              download
              className="
                px-8 py-3 rounded-md text-base font-semibold
                border border-[#C97A50]/40
                text-[#C97A50]
                hover:bg-[#C97A50]/10
                transition-all
              "
            >
              Resume (EN)
            </a>
          </div>
        </motion.div>

        {/* Foto + Nome/Cargo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="
            flex flex-col items-center
          "
        >
          <div
            className="
              relative w-[320px] h-[420px]
              rounded-xl overflow-hidden
              border border-[#C97A50]/30
              shadow-[0_0_25px_rgba(90,31,42,0.35)]
            "
          >
            <img
              src={profileImg}
              alt="Luiza Andrade"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nome + Cargo */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-[#F2E9E4]">
              Luiza Andrade Lima
            </h3>
            <p className="text-[#C97A50] text-sm tracking-wide">
              QA Engineer & Software Developer
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}