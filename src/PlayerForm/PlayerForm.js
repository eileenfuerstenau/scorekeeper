import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Add Player:
        <Input name="player" placeholder="Player name..." />
      </Label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Input = styled.input`
  border: 1px solid #bbb;
`
const Label = styled.label`
  display: grid;
  gap: 4px;
`
