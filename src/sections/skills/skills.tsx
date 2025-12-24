import { skills } from "../../assets/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-start"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        My <span className="text-pink-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-pink-300 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}