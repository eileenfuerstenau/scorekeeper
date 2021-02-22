import './App.css'
import PlayerForm from '../PlayerForm'
import Player from '../Player'
import Button from '../Button'
import { useState } from 'react'
import GameForm from '../GameForm'
import Navigation from '../Navigation'
import Header from '../Header'
import HistoryEntry from '../HistoryEntry'

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
      <Button text="Reset scores" onClick={resetScores} />
      <Button text="Reset all" onClick={resetAll} />
      <GameForm onCreateGame={() => console.log('Create Game')} />
      <Navigation onNavigate={() => console.log('Navigate')} />
      <Header text="Hello" />
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[{ name: 'heidi', score: 20 }]}
      />
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
