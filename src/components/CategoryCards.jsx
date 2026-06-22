import { CATEGORIES } from '../data/products'
import { useStore } from '../context/StoreContext'
import Reveal from './Reveal'
import { ChevronIcon } from './icons'

export default function CategoryCards() {
  const { navigate } = useStore()
  return (
    <section>
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">L'univers Hatt's</span>
          <h2 className="section-title">Nos collections</h2>
          <div className="section-divider" />
        </Reveal>
        <div className="categories">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              as="div"
              key={cat.slug}
              delay={i * 100}
              className="category-card"
              role="link"
              tabIndex={0}
              onClick={() => navigate('category', { categorySlug: cat.slug })}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('category', { categorySlug: cat.slug })
              }}
              aria-label={`Découvrir ${cat.label}`}
            >
              <div className="category-img" style={{ backgroundImage: `url(${cat.cover})` }} />
              <div className="category-overlay" />
              <div className="category-body">
                <h3 className="category-title">{cat.label}</h3>
                <span className="category-cta">
                  Découvrir <ChevronIcon width={14} height={14} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
