import './Button.css'

function Button({text, onClick}) {
    return <>
    <button className="Button" onClick={onClick}> {text} </button>
    </>
  }

  
  export default Button;
  