import { motion } from "framer-motion";
import DinoLabCompact from "./dinolabcompact";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          w-[380px] h-[380px]
          bg-[#5A1F2A]/35 blur-[130px]
          rounded-full pointer-events-none
        "
      />

      {/* Linhas tech */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C97A50] to-transparent" />
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C97A50] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col gap-12">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#F2E9E4]"
        >
          Projects
        </motion.h2>

        {/* Dino Expedition Project */}
        <DinoLabCompact />
      </div>
    </section>
  );
}
