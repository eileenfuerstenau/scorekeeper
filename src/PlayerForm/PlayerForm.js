import './PlayerForm.css'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add Player:
        <input name="player" placeholder="Player name..." />
      </label>
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
