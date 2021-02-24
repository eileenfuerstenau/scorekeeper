import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      {nameOfGame}
      <ul>
        {players.map((player, index) => (
          <li key={index} className="HistoryEntry__player">
            <span>{player.name} </span>
            <span> {player.score} </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
