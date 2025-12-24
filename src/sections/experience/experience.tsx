import { motion } from "framer-motion";

const experiences = [
  {
    company: "ClearSale",
    role: "Quality Analyst",
    period: "Jan 2023 — Present",
    location: "São Paulo, Brasil · Remota",
    description: [
      "Planning, designing, and executing test cases aligned with functional and non-functional requirements.",
      "Conducting UI tests with focus on usability validation and frontend quality.",
      "Performing API tests to ensure efficient and accurate communication between backend services.",
      "Executing regression, integration, functional, and exploratory testing to guarantee system stability.",
      "Identifying issues, performing detailed analysis, and preparing comprehensive bug reports to support development teams.",
    ],
  },
  {
    company: "Digibee",
    role: "Quality Assurance Engineer",
    period: "Jan 2022 — Sep 2022",
    location: "São Paulo, Brasil · Remota",
    description: [
      "Creation and review of test scenarios based on functional and business requirements.",
      "Execution of manual tests to validate functionality and identify inconsistencies.",
      "Development of automated tests using Cypress, Cucumber, and JavaScript.",
      "Maintenance and optimization of automated test scripts to improve efficiency.",
      "Collaboration with development and product teams to align expectations and enhance software quality.",
      "Analysis of test results, documentation of issues, and support in defect resolution.",
    ],
  },
  {
    company: "Linx",
    role: "Quality Analyst",
    period: "Aug 2021 — Jan 2022",
    location: "Recife, Pernambuco, Brasil · Remota",
    description: [
      "Development, execution, and maintenance of automated test scripts for desktop applications.",
      "Use of TestComplete to create and execute functional and regression tests.",
      "Programming automated tests using JavaScript to cover critical business scenarios.",
      "Diagnosing failures and performing detailed analysis of test results.",
      "Monitoring test performance and suggesting improvements to optimize processes.",
      "Documenting processes, test cases, and results to ensure traceability.",
      "Contributing to the evolution of the test automation strategy with best practices and new tools.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute left-0 top-1/2 -translate-y-1/2
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
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-[#C97A50]/30 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                relative pl-10 pb-16 group
                transition-all duration-300
              "
            >
              {/* Ponto da timeline */}
              <div
                className="
                  absolute left-[-9px] top-2 w-4 h-4
                  bg-gradient-to-br from-[#5A1F2A] to-[#C97A50]
                  rounded-full shadow-[0_0_12px_rgba(201,122,80,0.45)]
                "
              />

              {/* Cargo — sempre visível */}
              <h3 className="text-2xl font-semibold text-[#C97A50]">
                {exp.role}
              </h3>

              {/* Empresa — sempre visível */}
              <p className="text-[#F2E9E4] text-lg font-medium">
                {exp.company}
              </p>

              {/* Detalhes — só aparecem no hover */}
              <div
                className="
                  max-h-0 overflow-hidden opacity-0
                  group-hover:max-h-[500px] group-hover:opacity-100
                  transition-all duration-500 ease-out
                "
              >
                {(exp.period || exp.location) && (
                  <p className="text-[#D9C7B8]/80 text-sm mt-3">
                    {exp.period}
                    {exp.period && exp.location && " · "}
                    {exp.location}
                  </p>
                )}

                {exp.description && (
                  <ul className="mt-4 space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-[#D9C7B8]/90 text-base leading-relaxed"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}