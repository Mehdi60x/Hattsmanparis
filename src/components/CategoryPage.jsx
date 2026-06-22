import { CATEGORIES } from '../data/products'
import ProductGrid from './ProductGrid'
import Newsletter from './Newsletter'
import Reveal from './Reveal'

export default function CategoryPage({ categorySlug }) {
  const category = CATEGORIES.find((c) => c.slug === categorySlug)

  return (
    <div className="page-fade">
      <section style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="section-eyebrow">Collection</span>
            <h1 className="section-title">{category?.label ?? 'Collection'}</h1>
            <div className="section-divider" />
          </Reveal>
        </div>
      </section>
      <div style={{ marginTop: -40 }}>
        <ProductGrid fixedCategory={categorySlug} hideHeading />
      </div>
      <Newsletter />
    </div>
  )
}
