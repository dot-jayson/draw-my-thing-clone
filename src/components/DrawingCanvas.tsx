import React, { useRef } from 'react'
import ReactCanvasDraw from 'react-canvas-draw'

const DrawingCanvas: React.FC = () => {
  // Reference to canvas instance
  const canvasRef = useRef<typeof ReactCanvasDraw>(null)

  // Clear canvas function
  const clearCanvas = () => {
    canvasRef.current?.clear() // Call clear method on the canvas
  }

  const undoLastStroke = () => {
    canvasRef.current?.undo() // Call undo method on the canvas
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* ReactCanvasDraw Component */}
      <ReactCanvasDraw
        ref={canvasRef} // Attach ref for programmatic control
        canvasWidth={800} // Canvas Width
        canvasHeight={600} // Height of the canvas
        brushColor="#000" // Default brush colour
        brushRadius={4} // Default brush size
        className="border border-gray-400"
      />
      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear
        </button>
        <button
          onClick={undoLastStroke}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Undo
        </button>
      </div>
    </div>
  )
}

export default DrawingCanvas
