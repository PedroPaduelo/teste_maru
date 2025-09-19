import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Teste Maru
          </h1>
          <p className="text-lg text-gray-600">
            React + TypeScript + Vite + TailwindCSS
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-24 animate-spin-slow" alt="React logo" />
          </a>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Count is {count}
            </button>
            <p className="mt-4 text-gray-600">
              Edit <code className="font-mono text-primary-600">src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App