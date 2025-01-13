import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Game from './pages/Game'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/game"
            element={<Game />}
          />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
