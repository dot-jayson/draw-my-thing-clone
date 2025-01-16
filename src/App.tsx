// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MainLayout from './layouts/MainLayout'
// import Home from './pages/Home'
// import Game from './pages/Game'

// const App: React.FC = () => {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />
//           <Route
//             path="/game"
//             element={<Game />}
//           />
//         </Routes>
//       </MainLayout>
//     </Router>
//   )
// }

// export default App

import { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { createGame, Game } from './lib/games'
import { db } from './lib/firebase'

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    // Real time listener for games collection
    const unsubscribe = onSnapshot(collection(db, 'games'), (snapshot) => {
      const updatedGames = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Game[]
      setGames(updatedGames)
    })
    return () => unsubscribe()
  }, [])

  const handleCreateGame = async () => {
    const newGame: Omit<Game, 'id'> = {
      players: [{ name: 'Alice' }, { name: 'Bob' }],
      round: 1,
      word: 'apple',
      status: 'waiting',
    }

    try {
      const createdGame = await createGame(newGame)
      console.log('Game created: ', createdGame)
    } catch (error) {
      console.error('Error creating game: ', error)
    }
  }

  return (
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleCreateGame}
      >
        Create Game
      </button>
      <h1 className="text-2xl font-bold mb-4">Available Games</h1>
      <ul className="space-y-2">
        {games.map((game) => (
          <li
            key={game.id}
            className="p-4 border rounded shadow-sm bg-white"
          >
            <p>
              <strong>ID:</strong> {game.id}
            </p>
            <p>
              <strong>Status:</strong> {game.status}
            </p>
            <p>
              <strong>Players:</strong>{' '}
              {game.players.map((p) => p.name).join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
