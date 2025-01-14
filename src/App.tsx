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

import { collection, addDoc } from 'firebase/firestore'
import { db } from './lib/firebase'

const App: React.FC = () => {
  const handleAddDocument = async () => {
    try {
      await addDoc(collection(db, 'test'), {
        message: 'Add document test!',
      })
      console.log('Document added!')
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  return (
    <div>
      <button onClick={handleAddDocument}>Add Document</button>
    </div>
  )
}

export default App
