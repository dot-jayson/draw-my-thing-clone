import React from 'react'
import DrawingCanvas from '../components/DrawingCanvas'

const Game: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-gray-700">Drawing Canvas</h2>
      <DrawingCanvas />
    </div>
  )
}

export default Game
