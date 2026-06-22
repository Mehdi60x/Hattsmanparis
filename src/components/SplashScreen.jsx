import { useEffect, useState } from 'react'

export default function SplashScreen({ onDone }) {
  const [hidden, setHidden] = useState(false)
  const [fillWidth, setFillWidth] = useState(0)

  useEffect(() => {
    const fillTimer = requestAnimationFrame(() => setFillWidth(100))
    const hideTimer = setTimeout(() => setHidden(true), 1500)
    const doneTimer = setTimeout(() => onDone?.(), 2100)
    return () => {
      cancelAnimationFrame(fillTimer)
      clearTimeout(hideTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`splash ${hidden ? 'hidden' : ''}`} role="status" aria-label="Chargement">
      <div className="splash-logo">
        H<span>P</span>
      </div>
      <div className="splash-bar">
        <div className="splash-bar-fill" style={{ width: `${fillWidth}%` }} />
      </div>
    </div>
  )
}
