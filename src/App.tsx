export default function App() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center">
        Olá, eu sou <span className="text-blue-400">Luiza</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-xl">
        Desenvolvedora Front-end apaixonada por criar interfaces modernas, acessíveis e cheias de personalidade.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-lg font-medium">
        Ver meus projetos
      </button>
    </section>
  )
}