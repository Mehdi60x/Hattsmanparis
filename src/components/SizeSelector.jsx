export default function SizeSelector({ sizes, unavailable = [], selected, onSelect, onGuideClick, shake }) {
  if (!sizes.length) return null
  return (
    <div className="option-block">
      <div className="option-label">
        <span>Taille</span>
        <button className="size-guide-link" onClick={onGuideClick} type="button">
          Guide des tailles
        </button>
      </div>
      <div className={`size-selector ${shake ? 'shake' : ''}`}>
        {sizes.map((size) => {
          const isUnavailable = unavailable.includes(size)
          return (
            <button
              key={size}
              className={`size-btn ${selected === size ? 'active' : ''} ${isUnavailable ? 'unavailable' : ''}`}
              disabled={isUnavailable}
              aria-pressed={selected === size}
              aria-label={`Taille ${size}${isUnavailable ? ' indisponible' : ''}`}
              onClick={() => !isUnavailable && onSelect(size)}
            >
              {size}
            </button>
          )
        })}
      </div>
    </div>
  )
}
