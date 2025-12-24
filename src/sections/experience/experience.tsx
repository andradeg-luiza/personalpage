import { experience } from "../../assets/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-start"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        My <span className="text-pink-400">Experience</span>
      </h2>

      <div className="flex flex-col gap-10 w-full border-l border-white/10 pl-6">
        {experience.map((item, index) => (
          <div key={index} className="relative">
            
            {/* Bolinha da timeline */}
            <span className="absolute -left-[14px] top-2 w-3 h-3 bg-pink-400 rounded-full"></span>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
              
              <h3 className="text-xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="text-pink-400 text-sm font-medium mt-1">
                {item.company}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {item.period}
              </p>

              {item.location && (
                <p className="text-gray-500 text-sm mt-1">
                  {item.location}
                </p>
              )}

              {/* Lista formatada */}
              <ul className="text-gray-300 text-sm leading-relaxed mt-4 list-disc pl-5 space-y-2">
                {item.description
                  .trim()
                  .split("\n")
                  .map((line, i) => (
                    <li key={i}>{line.replace(/^- /, "")}</li>
                  ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}