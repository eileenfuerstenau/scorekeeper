import './Navigation.css'

export default function Navigation({ onNavigate }) {
  return (
    <nav className="Navigation">
      <button onClick={onNavigate}> Play </button>
      <button onClick={onNavigate}> History </button>
    </nav>
  )
}
