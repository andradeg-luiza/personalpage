import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Quality Assurance",
    skills: [
      "REST API Testing",
      "PactumJS",
      "Cypress",
      "Exploratory Testing",
      "Regression & Smoke Testing",
      "Test Planning & Strategy",
      "Bug Tracking & Reporting",
      "Test Documentation",
    ],
  },
  {
    title: "Automation & Tools",
    skills: [
      "Cypress",
      "PactumJS",
      "Postman",
      "Playwright",
      "CI/CD Pipelines",
      "Git & Version Control",
      "Selenium",
      "JUnit / Jest",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "JavaScript (JS)",
      "TypeScript (TS)",
      "Clean Code",
      "SQL",
      "Node.js",
      "React",
      "REST APIs",
      "Debugging",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Attention to Detail",
      "Collaboration",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-32 px-6 max-w-7xl mx-auto
      "
    >
      {/* Glow decorativo bordô */}
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2
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
          Skills
        </motion.h2>

        {/* Grid de categorias */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/5 backdrop-blur-xl
                border border-[#C97A50]/25
                rounded-xl p-8
                shadow-[0_0_25px_rgba(90,31,42,0.25)]
              "
            >
              <h3 className="text-2xl font-semibold text-[#C97A50] mb-6">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="text-[#D9C7B8]/90 text-base">{skill}</span>

                    {/* Barra metálica */}
                    <div className="w-full h-[6px] bg-[#5A1F2A]/40 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#5A1F2A] to-[#C97A50]"
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}