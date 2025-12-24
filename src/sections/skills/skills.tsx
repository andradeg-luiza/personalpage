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

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/40 hover:bg-pink-500/30 transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}