import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntrySection>
      {nameOfGame}
      <section>
        {players.map((player, index) => (
          <Player key={index} className="HistoryEntry__player">
            <span>{player.name} </span>
            <span> {player.score} </span>
          </Player>
        ))}
      </section>
    </HistoryEntrySection>
  )
}

const HistoryEntrySection = styled.section`
  display: grid;
  gap: 10px;
`
const Player = styled.section`
  display: flex;
  justify-content: space-between;
`
