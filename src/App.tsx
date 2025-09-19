const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Teste Maru
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Plataforma de desenvolvimento moderna e eficiente
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ⚡ Desenvolvimento Rápido
            </h3>
            <p className="text-gray-600">
              Construído com Vite para HMR ultrarrápido e experiência de desenvolvimento fluida.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🎨 Interface Moderna
            </h3>
            <p className="text-gray-600">
              Design limpo e responsivo com TailwindCSS para uma experiência de usuário premium.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🔧 TypeScript First
            </h3>
            <p className="text-gray-600">
              TypeScript estrito para maior confiabilidade e melhor experiência de desenvolvimento.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              📦 Code Quality
            </h3>
            <p className="text-gray-600">
              ESLint e Prettier configurados para manter padrões de código consistentes e limpos.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-gray-600 mb-6">
              Esta base está preparada para seu próximo projeto incrível!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Explorar Projeto
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Desenvolvido com React, TypeScript, Vite e TailwindCSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default App