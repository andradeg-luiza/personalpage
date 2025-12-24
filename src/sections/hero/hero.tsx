export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-6 max-w-7xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        Hi, I'm <span className="text-pink-400">Luiza</span>
      </h1>

      <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-xl">
        Quality Assurance Engineer specializing in automated and manual testing
        for high‑performance systems.
      </p>

      <button
        className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors"
        onClick={() => {
          const el = document.getElementById("projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        View My Work
      </button>
    </section>
  );
}