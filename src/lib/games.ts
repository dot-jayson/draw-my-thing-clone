import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from './firebase'

// Define the Player type
export interface Player {
  id: string
  name: string
}

// Define possible game statuses
export type GameStatus = 'waiting' | 'in-progress' | 'completed'

// Define the Game type
export interface Game {
  id: string
  players: { name: string }[]
  round: number
  word: string
  status: GameStatus
}

export const createGame = async (gameData: Omit<Game, 'id'>): Promise<Game> => {
  try {
    const docRef = await addDoc(collection(db, 'games'), gameData)
    console.log('Game created with ID: ', docRef.id)
    // Return the complete game object with the Firestore-generated ID
    return { ...gameData, id: docRef.id }
  } catch (error) {
    console.error('Error creating game: ', error)
    throw error
  }
}

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const gamesCollection = collection(db, 'games')
    const snapshot = await getDocs(gamesCollection)
    const games = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Game[]
    return games
  } catch (error) {
    console.error('Error fetching games: ', error)
    throw error
  }
}
