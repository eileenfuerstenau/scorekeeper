import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      <h1>{nameOfGame}</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <span>{player.name} </span>
            <span> {player.score} </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
