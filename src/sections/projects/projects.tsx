import { projects } from "../../assets/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-start"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        My <span className="text-pink-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}