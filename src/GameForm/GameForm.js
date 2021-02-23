import './GameForm.css'
import Button from '../Button'
import Input from '../Input/Input.js'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Carcassonne"
      />
      <Input
        name="playerNames"
        labelText="Player name"
        placeholder="e.g. John Doe, Jane Doe"
      />
      <div>
        <Button text="Create game" />
      </div>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements // destructuring assigment
    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    //"Betty, Heidi" -> soll Array sein, daher Split, trim entfernt extra Whitespace
    form.reset()
  }
}
