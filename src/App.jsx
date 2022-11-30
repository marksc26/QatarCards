import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'
import playersDB from "./db/players.json"

function App() {

  const getRandom = (array) =>{
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]
  }

  const [players, setPlayers] = useState(getRandom(playersDB))

  const getNewPlayer = () =>{
    const newPlayer = getRandom(playersDB)
    setPlayers(newPlayer)
  }

  return (
    <div className="App">
      <Card 
      player={players}
      getNewPlayer={getNewPlayer}
      />
    </div>
  )
}

export default App
