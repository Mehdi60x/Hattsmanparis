const ITEMS = [
  'Fait main en Italie',
  'Cuir pleine fleur',
  'Livraison offerte',
  'Retours 30 jours',
  'Éditions limitées',
]

export default function MarqueeBand() {
  const sequence = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" role="presentation" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <span key={rep} style={{ display: 'flex' }}>
            {sequence.map((item, i) => (
              <span className="marquee-item" key={`${rep}-${i}`}>
                • {item}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
