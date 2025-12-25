import { motion } from "framer-motion";
import DinoLabCompact from "./dinolabcompact";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="relative z-10 flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#F2E9E4]"
        >
          Projects
        </motion.h2>

        <DinoLabCompact />
      </div>
    </section>
  );
}