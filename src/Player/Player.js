import styled from 'styled-components/macro'
import Button from '../Button'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <>
      <PlayerWrapper>
        <h2> {name} </h2>
        <ScoreWrapper>
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
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`
const CounterButton = styled(Button)`
  background-color: palevioletred;
  border: none;
  color: white;
`
