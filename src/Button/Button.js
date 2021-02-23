import './Button.css'

function Button({ text, onClick, isActive }) {
  return (
    <>
      <button
        className={isActive ? 'Button Button__active' : 'Button'}
        onClick={onClick}
      >
        {' '}
        {text}{' '}
      </button>
    </>
  )
}

export default Button
