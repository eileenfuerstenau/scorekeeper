import GameForm from './GameForm'

export default function PlayPage({ createGame, onCreateGame }) {
  return (
    <div>
      <GameForm onCreateGame={createGame} />
    </div>
  )
}
