import { projects } from "../../assets/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-start"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        Featured <span className="text-pink-400">Project</span>
      </h2>

      <div className="w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:bg-white/10 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <button
              disabled={!project.link}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                project.link
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              {project.link ? "View on GitHub →" : "Coming soon"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}