import Player from '../Player'
import Button from '../Button'
import { useState } from 'react'
import GameForm from '../GameForm'
import Navigation from '../Navigation'
import Header from '../Header'
import HistoryEntry from '../HistoryEntry'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('play')
  const [history, setHistory] = useState([])

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('play')
  }

  return (
    <Applayout>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={createGame} />
        </div>
      )}

      {currentPage === 'game' && (
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
      )}

      {currentPage === 'history' && (
        <HistoryWrapper>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
          ))}
        </HistoryWrapper>
      )}

      {(currentPage === 'history' || currentPage === 'play') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
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
const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`
