const experiences = [
  {
    role: "Quality Analyst",
    company: "ClearSale",
    date: "Jan 2023 — Present · 4 years",
    location: "São Paulo, Brazil · Remote",
    description: [
      "Planning, designing, and executing test cases aligned with functional and non-functional requirements.",
      "Conducting UI tests with a focus on usability validation and frontend quality.",
      "Performing API tests to ensure efficient and accurate communication between backend services.",
      "Executing regression, integration, functional, and exploratory testing to guarantee system stability.",
      "Identifying issues, performing detailed analysis, and preparing comprehensive bug reports to support development teams."
    ],
  },
  {
    role: "Quality Assurance Engineer",
    company: "Digibee",
    date: "Jan 2022 — Sep 2022 · 9 months",
    location: "São Paulo, Brazil · Remote",
    description: [
      "Creating and reviewing test scenarios based on functional and business requirements.",
      "Executing manual tests to validate functionality and identify inconsistencies.",
      "Developing automated tests using Cypress, Cucumber, and JavaScript.",
      "Maintaining automated test scripts to improve efficiency and reliability.",
      "Collaborating with development and product teams to enhance software quality.",
      "Analyzing test results, documenting issues, and supporting defect resolution."
    ],
  },
  {
    role: "Quality Analyst",
    company: "Linx",
    date: "Aug 2021 — Jan 2022 · 6 months",
    location: "Recife, Pernambuco, Brazil · Remote",
    description: [
      "Developing, executing, and maintaining automated test scripts for desktop applications.",
      "Using TestComplete to create and execute functional and regression tests.",
      "Programming automated tests using JavaScript for critical business scenarios.",
      "Diagnosing failures and analyzing test results to identify performance issues and bugs.",
      "Monitoring test performance and suggesting improvements for optimization.",
      "Documenting processes, test cases, and results to ensure traceability.",
      "Contributing to the evolution of the automation strategy with best practices and new tools."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="soft-container py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-heading text-center md:text-left">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              group relative border border-[var(--accent-green)]/30 rounded-xl p-6
              bg-white/5 backdrop-blur-xl
              shadow-[0_0_25px_rgba(62,243,192,0.12)]
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(62,243,192,0.22)]
              cursor-pointer
            "
          >
            {/* Cargo em destaque */}
            <h3 className="text-xl font-semibold text-[var(--text-main)]">
              {exp.role}
            </h3>

            {/* Empresa logo abaixo */}
            <p className="text-[var(--text-muted)] mb-2">
              {exp.company}
            </p>

            {/* Conteúdo expandido */}
            <div
              className="
                max-h-0 overflow-hidden opacity-0
                group-hover:max-h-[800px] group-hover:opacity-100
                transition-all duration-500 ease-in-out mt-2
              "
            >
              <p className="text-sm text-[var(--accent-green)] font-medium mb-1">
                {exp.date}
              </p>

              <p className="text-sm text-[var(--text-muted)] mb-4">
                {exp.location}
              </p>

              <ul className="list-disc list-inside space-y-2 text-[var(--text-muted)] text-base leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}