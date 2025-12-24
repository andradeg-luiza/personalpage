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
          I'm Luiza, a Frontend Developer passionate about crafting beautiful,
          intuitive and high‑performance digital experiences.
        </p>

        <p className="text-gray-400 leading-relaxed text-lg mt-4">
          My focus is on building clean, accessible and scalable interfaces
          using technologies like React, TypeScript and TailwindCSS.
        </p>

        <p className="text-gray-400 leading-relaxed text-lg mt-4">
          When I'm not coding, I’m exploring design trends or studying UI/UX.
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