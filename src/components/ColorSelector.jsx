export default function ColorSelector({ colors, selected, onSelect }) {
  return (
    <div className="option-block">
      <div className="option-label">
        <span>Couleur</span>
        <span>{selected?.name}</span>
      </div>
      <div className="color-selector">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`color-swatch ${selected?.name === color.name ? 'active' : ''}`}
            style={{ '--swatch-color': color.hex }}
            aria-label={`Couleur ${color.name}`}
            aria-pressed={selected?.name === color.name}
            onClick={() => onSelect(color)}
          >
            <span className="color-tooltip">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
