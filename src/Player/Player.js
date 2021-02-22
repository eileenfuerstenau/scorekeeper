import './Player.css'

function Player({name, score, onMinus, onPlus}) {
    return <>
    <section className="Player__section">
        <h2> {name} </h2> 
        <div className="Player__score">
            <button 
            onClick={onMinus} 
            className="Player__Button" > ➖ 
            </button > 
            <span> {score} </span>
            <button 
            onClick={onPlus} 
            className="Player__Button" > ➕ 
            </button>  
        </div>
    </section>
    </>
  }
  
  export default Player;
  