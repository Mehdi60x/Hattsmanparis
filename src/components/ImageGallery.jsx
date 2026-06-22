import { useRef, useState } from 'react'
import { ChevronIcon } from './icons'

export default function ImageGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(null)

  const go = (delta) => {
    setActiveIndex((i) => (i + delta + images.length) % images.length)
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) go(delta > 0 ? -1 : 1)
    touchStartX.current = null
  }

  return (
    <div>
      <div
        className="gallery-main"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img src={images[activeIndex]} alt={`${productName} — vue ${activeIndex + 1}`} />
        <button className="gallery-nav-btn prev" aria-label="Image précédente" onClick={() => go(-1)}>
          <ChevronIcon width={16} height={16} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button className="gallery-nav-btn next" aria-label="Image suivante" onClick={() => go(1)}>
          <ChevronIcon width={16} height={16} />
        </button>
      </div>
      <div className="gallery-thumbs">
        {images.map((src, i) => (
          <button
            key={i}
            className={`gallery-thumb ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Voir l'angle ${i + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
