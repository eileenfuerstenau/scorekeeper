import { useState } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import GamePage from './GamePage'
import GameForm from './GameForm'
import HistoryPage from './HistoryPage'
import { Route, Switch, useHistory } from 'react-router-dom'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])
  const { push } = useHistory()

  return (
    <Applayout>
      <Switch>
        <Route exact path="/">
          <GameForm onCreateGame={createGame} />
        </Route>
        <Route path="/game">
          <GamePage
            nameOfGame={nameOfGame}
            players={players}
            onPlus={onPlus}
            onMinus={onMinus}
            resetScores={resetScores}
            endGame={endGame}
          />
        </Route>
        <Route path="/history">
          <HistoryPage history={history} />
        </Route>
      </Switch>
      <Route exact path={['/', '/history']}>
        <Navigation />
      </Route>
    </Applayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    push('/game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    push('/history')
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
