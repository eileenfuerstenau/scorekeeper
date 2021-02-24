import Button from '../Button'
import Input from '../Input/Input.js'
import styled from 'styled-components/macro'

export default function GameForm({ onCreateGame }) {
  return (
    <Form className="GameForm" onSubmit={handleSubmit}>
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
        <Button> Create Game </Button>
      </div>
    </Form>
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

const Form = styled.form`
  display: grid;
  grid-auto-flow: row;
`
