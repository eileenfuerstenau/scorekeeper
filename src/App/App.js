import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player'
import Button from '../Button'
import { useState } from 'react'
import styled from 'styled-components/macro'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <Applayout>
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
      <ButtonGrid>
        <Button onClick={resetScores}> Score </Button>
        <ResetButton onClick={resetAll}> Reset All </ResetButton>
      </ButtonGrid>
    </Applayout>
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

const Applayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const ButtonGrid = styled.section`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
`
const ResetButton = styled(Button)`
  background-color: darksalmon;
  border: 1px solid black;
`
