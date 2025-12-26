import { motion } from "framer-motion";
import {
  SiCypress,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Cypress", icon: <SiCypress /> },
  {
    name: "PactumJS",
    icon: (
      <img
        src="/images/logopactum.jpg"
        className="w-10 h-10 object-contain drop-shadow-[0_0_6px_rgba(201,122,80,0.45)]"
        alt="PactumJS Logo"
      />
    ),
  },
  { name: "Postman", icon: <SiPostman /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "SQL", icon: <SiMysql /> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 max-w-7xl mx-auto">

      {/* Glow decorativo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#5A1F2A]/35 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col gap-12">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#F2E9E4] drop-shadow-[0_0_12px_rgba(201,122,80,0.35)]"
        >
          Skills
        </motion.h2>

        {/* Grid de skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
                flex flex-col items-center gap-3
                bg-white/5 backdrop-blur-xl
                border border-[#C97A50]/25
                rounded-xl p-6
                shadow-[0_0_20px_rgba(90,31,42,0.25)]
                hover:shadow-[0_0_30px_rgba(201,122,80,0.35)]
                transition-all
              "
            >
              <div className="text-4xl text-[#C97A50]">{skill.icon}</div>
              <p className="text-[#D9C7B8]/90 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}