import styled from 'styled-components/macro'
import Button from '../Button'

export default function Player({ name, score, onMinus, onPlus }) {
  const hue = Math.min(score * 10, 120)

  return (
    <>
      <PlayerWrapper>
        <span> {name} </span>
        <ScoreWrapper color={`hsl(${hue}, 50%, 50%)`}>
          <CounterButton onClick={onMinus}>➖</CounterButton>
          <span> {score} </span>
          <CounterButton onClick={onPlus}>➕</CounterButton>
        </ScoreWrapper>
      </PlayerWrapper>
    </>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ScoreWrapper = styled.div`
  color: ${props => props.color || 'black'};
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`
const CounterButton = styled(Button)`
  background-color: darksalmon;
  border: 1px solid black;
  color: white;
`
