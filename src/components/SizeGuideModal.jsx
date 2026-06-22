import { CloseIcon } from './icons'

const GUIDES = {
  chaussures: {
    headers: ['EU', '39', '40', '41', '42', '43', '44', '45', '46'],
    rows: [['UK', '6', '6.5', '7', '8', '8.5', '9', '10', '10.5'], ['Pied (cm)', '24.5', '25', '25.7', '26.5', '27', '27.7', '28.5', '29']],
  },
  chemises: {
    headers: ['Taille', 'S', 'M', 'L', 'XL'],
    rows: [['Tour de cou (cm)', '38-39', '40-41', '42-43', '44-45'], ['Poitrine (cm)', '92-96', '98-102', '104-108', '110-116']],
  },
  costumes: {
    headers: ['Taille', '44', '46', '48', '50', '52', '54', '56'],
    rows: [['Poitrine (cm)', '88', '92', '96', '100', '104', '108', '112']],
  },
  maroquinerie: null,
}

export default function SizeGuideModal({ category, onClose }) {
  const guide = GUIDES[category]
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Guide des tailles"
    >
      <div
        style={{
          background: 'var(--surface)',
          maxWidth: 560,
          width: '100%',
          padding: 36,
          borderRadius: 4,
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="icon-btn"
          aria-label="Fermer"
          style={{ position: 'absolute', top: 20, right: 20, width: 18, height: 18, color: 'var(--ink)' }}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <h3 style={{ fontSize: 22, marginBottom: 20 }}>Guide des tailles</h3>
        {guide ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {guide.headers.map((h) => (
                  <th
                    key={h}
                    style={{ textAlign: 'left', padding: '8px 6px', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {guide.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 6px', borderBottom: '1px solid var(--border)' }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ fontSize: 14, color: 'var(--text)' }}>Cette pièce est proposée en taille unique.</p>
        )}
      </div>
    </div>
  )
}
