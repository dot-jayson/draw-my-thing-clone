import React from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Drawing game</h1>
      </header>
      <main className="flex-grow">
        {children}
        <footer className="bg-gray-800 text-white py-2 text-center">
          <p>&copy; 2025 Drawing game</p>
        </footer>
      </main>
    </div>
  )
}

export default MainLayout
