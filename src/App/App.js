import './App.css'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player'
import Button from '../Button'
import { useState } from 'react'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onAddPlayer={addPlayer} />
      {players.map((player, index) => (
        <Player
          key={player.id}
          name={player.name}
          score={player.score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={resetScores}> Reset Score </Button>
      <Button onClick={resetAll}> Reset All </Button>
    </div>
  )

  function onPlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function onMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function addPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.length + 1 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }
}
