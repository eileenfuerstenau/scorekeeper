import './GameForm.css'

export default function GameForm({ onCreateGame }) {
  return (
    <section className="GameForm">
      <label>
        Name of game:
        <input placeholder="e.g. Carcassonne" />
      </label>
      <label>
        Player names:
        <input placeholder="e.g. John Doe, Jane Doe" />
      </label>
      <div>
        <button onClick={onCreateGame}> Create Game </button>
      </div>
    </section>
  )
}
