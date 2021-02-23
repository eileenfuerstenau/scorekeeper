export default function GameForm({ labelText, placeholder, name }) {
  return (
    <label>
      {labelText}
      <input name={name} type="text" placeholder={placeholder} />
    </label>
  )
}
