import './App.css'
import PlayerForm from '../PlayerForm'
import Player from '../Player'
import Button from '../Button'

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={() => console.log('onAddPlayer')} />
      <Player
        name="John Doe"
        score="20"
        onMinus={() => console.log('Minus was clicked')}
        onPlus={() => console.log('Plus was clicked')}
      />
      <Player
        name="Jane Doe"
        score="30"
        onMinus={() => console.log('Minus was clicked')}
        onPlus={() => console.log('Plus was clicked')}
      />
      <Button text="Reset scores" onClick={() => console.log('Reset scores')} />
      <Button text="Reset all" onClick={() => console.log('Reset all')} />
    </div>
  )
}

export default App
