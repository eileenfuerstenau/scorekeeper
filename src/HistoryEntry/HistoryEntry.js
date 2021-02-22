import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      <h1>{nameOfGame}</h1>
      <ul>
        {players.map(player => (
          <li key={player}>
            Player <span> Score</span>{' '}
          </li>
        ))}
      </ul>
    </section>
  )
}
