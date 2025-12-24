export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12"
    >
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-white mb-6">
          About <span className="text-pink-400">Me</span>
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          I’m a Quality Assurance Engineer with over 5 years of experience
          ensuring the reliability, performance, and scalability of digital
          products. I work across manual and automated testing for web and
          backend systems, focusing on preventing issues early and delivering
          consistent, user‑ready software.
        </p>

        <p className="text-gray-400 leading-relaxed text-lg mt-4">
          My background includes building automated test suites, validating
          complex integrations, and collaborating daily in Agile environments to
          maintain high standards in large‑scale applications.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-pink-500/40 to-purple-600/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-gray-300">
          Your Photo Here
        </div>
      </div>
    </section>
  );
}