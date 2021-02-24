import Player from './Player'
import Button from './Button'
import Header from './Header'
import styled from 'styled-components/macro'

export default function GamePage({
  nameOfGame,
  players,
  onPlus,
  onMinus,
  resetScores,
  endGame,
}) {
  return (
    <div>
      <Header> {nameOfGame} </Header>
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
        <Button onClick={resetScores}> Reset </Button>
        <Button onClick={endGame}> End Game </Button>
      </ButtonGrid>
    </div>
  )
}
const ButtonGrid = styled.section`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
`
