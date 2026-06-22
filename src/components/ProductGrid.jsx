import { useState } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

export default function ProductGrid({ fixedCategory = null, hideHeading = false }) {
  const [activeTab, setActiveTab] = useState(fixedCategory || 'all')

  const products = fixedCategory
    ? PRODUCTS.filter((p) => p.category === fixedCategory)
    : activeTab === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab)

  return (
    <section id="essentiels">
      <div className="container">
        {!hideHeading && (
          <Reveal as="div" className="section-head">
            <span className="section-eyebrow">Collection vedette</span>
            <h2 className="section-title">Les Essentiels</h2>
            <div className="section-divider" />
          </Reveal>
        )}

        {!fixedCategory && (
          <div className="category-tabs" role="tablist" aria-label="Filtrer par catégorie">
            <button
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
              role="tab"
              aria-selected={activeTab === 'all'}
            >
              Tout voir
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                className={`tab ${activeTab === cat.slug ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.slug)}
                role="tab"
                aria-selected={activeTab === cat.slug}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="product-grid">
          {products.map((product, i) => (
            <Reveal as="div" key={product.id} delay={(i % 4) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
