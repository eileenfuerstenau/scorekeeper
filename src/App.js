import { useState } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import PlayPage from './PlayPage'
import GamePage from './GamePage'
import GameForm from './GameForm'
import HistoryPage from './HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('play')
  const [history, setHistory] = useState([])

  return (
    <Applayout>
      {currentPage === 'play' && <GameForm onCreateGame={createGame} />}

      {currentPage === 'game' && (
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onPlus={onPlus}
          onMinus={onMinus}
          resetScores={resetScores}
          endGame={endGame}
        />
      )}

      {currentPage === 'history' && <HistoryPage history={history} />}

      {(currentPage === 'history' || currentPage === 'play') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </Applayout>
  )

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
