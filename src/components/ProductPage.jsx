import { useMemo, useState } from 'react'
import { useStore } from '../context/StoreContext'
import { CATEGORIES, getProductById, getRelatedProducts } from '../data/products'
import ImageGallery from './ImageGallery'
import ColorSelector from './ColorSelector'
import SizeSelector from './SizeSelector'
import SizeGuideModal from './SizeGuideModal'
import Accordion from './Accordion'
import ProductCard from './ProductCard'
import Reveal from './Reveal'
import { HeartIcon } from './icons'

const CATEGORY_LABELS = {
  maroquinerie: 'Maroquinerie',
  chaussures: 'Chaussures',
  costumes: 'Costumes',
  chemises: 'Chemises',
}

const REVIEW_POOL = [
  { author: 'Antoine R.', text: "Finition impeccable, on sent la qualité du cuir dès la première prise en main. Livraison rapide et soignée." },
  { author: 'Julien M.', text: 'Exactement ce que je cherchais — élégant sans être ostentatoire. Le service client a été très réactif sur la pointure.' },
  { author: 'Thomas L.', text: "Très satisfait, la patine commence déjà à se développer joliment après quelques semaines de port." },
]

function generateReviews(product) {
  return REVIEW_POOL.map((r, i) => ({
    ...r,
    rating: i === 0 ? Math.min(5, Math.round(product.rating)) : 5,
  }))
}

export default function ProductPage({ productId }) {
  const { navigate, addToCart, wishlist, toggleWishlist } = useStore()
  const product = getProductById(productId)

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [shakeSize, setShakeSize] = useState(false)
  const [rippling, setRippling] = useState(false)
  const [guideOpen, setGuideOpen] = useState(false)

  const related = useMemo(() => (product ? getRelatedProducts(product) : []), [product])
  const reviews = useMemo(() => (product ? generateReviews(product) : []), [product])

  if (!product) {
    return (
      <div className="container" style={{ paddingTop: 160, paddingBottom: 100, textAlign: 'center' }}>
        <h2>Produit introuvable</h2>
        <button className="btn btn-outline-dark" style={{ marginTop: 24 }} onClick={() => navigate('home')}>
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const isWishlisted = wishlist.has(product.id)
  const fullStars = Math.round(product.rating)

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      setShakeSize(true)
      setTimeout(() => setShakeSize(false), 500)
      return
    }
    setRippling(true)
    setTimeout(() => setRippling(false), 650)
    addToCart(product, selectedColor, selectedSize ?? 'Unique', qty)
  }

  return (
    <div className="container page-fade">
      <div className="product-page">
        <div>
          <ImageGallery images={product.images} productName={product.name} />
        </div>

        <div className="product-info-col">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigate('home')
              }}
            >
              Maison Hatt's Paris
            </a>
            <span>/</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigate('category', { categorySlug: product.category })
              }}
            >
              {CATEGORY_LABELS[product.category]}
            </a>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <h1>{product.name}</h1>
          <p className="product-info-subtitle">{product.subtitle}</p>

          <div className="rating-row">
            <span className="stars" aria-hidden="true">
              {'★'.repeat(fullStars)}
              {'☆'.repeat(5 - fullStars)}
            </span>
            <span>{product.rating.toFixed(1)} · {product.reviews} avis</span>
          </div>

          <div className="price-row">{product.price.toLocaleString('fr-FR')} €</div>

          {product.colors.length > 0 && (
            <ColorSelector colors={product.colors} selected={selectedColor} onSelect={setSelectedColor} />
          )}

          <SizeSelector
            sizes={product.sizes}
            unavailable={product.unavailableSizes}
            selected={selectedSize}
            onSelect={setSelectedSize}
            onGuideClick={() => setGuideOpen(true)}
            shake={shakeSize}
          />

          <div className="qty-row">
            <span className="option-label" style={{ marginBottom: 0 }}>Quantité</span>
            <div className="qty-control">
              <button aria-label="Diminuer la quantité" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button aria-label="Augmenter la quantité" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>

          <div className="product-actions">
            <button
              className={`btn btn-dark btn-block ${rippling ? 'rippling' : ''}`}
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
            <button
              className={`btn btn-outline-dark btn-block wishlist-secondary ${isWishlisted ? 'active' : ''}`}
              onClick={() => toggleWishlist(product.id)}
            >
              <HeartIcon filled={isWishlisted} width={15} height={15} />
              {isWishlisted ? 'Retiré de la wishlist' : 'Ajouter à la wishlist'}
            </button>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="meta-list">
            <div className="meta-row">
              <span>Origine</span>
              <span>{product.origin}</span>
            </div>
            <div className="meta-row">
              <span>Entretien</span>
              <span>{product.care}</span>
            </div>
          </div>

          <Accordion
            items={[
              { title: 'Livraison', content: 'Livraison standard offerte dès 500€ d\'achat (2-3 jours ouvrés en France métropolitaine). Livraison express disponible en option.' },
              { title: 'Retours', content: 'Retours et échanges gratuits sous 30 jours, articles non portés et dans leur emballage d\'origine.' },
              { title: 'Authenticité', content: 'Chaque pièce est accompagnée d\'un certificat d\'authenticité et numérotée individuellement.' },
              { title: 'Entretien', content: product.care },
            ]}
          />
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <Reveal as="div" className="section-head">
            <span className="section-eyebrow">Complétez le look</span>
            <h2 className="section-title">Vous aimerez aussi</h2>
            <div className="section-divider" />
          </Reveal>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <div className="reviews-section" style={{ paddingBottom: 100 }}>
        <h3 style={{ fontSize: 22, marginBottom: 4 }}>Avis clients</h3>
        <div className="rating-row">
          <span className="stars" aria-hidden="true">{'★'.repeat(fullStars)}{'☆'.repeat(5 - fullStars)}</span>
          <span>{product.rating.toFixed(1)} sur 5 · {product.reviews} avis</span>
        </div>
        <div className="reviews-list">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-head">
                <span className="review-author">{review.author}</span>
                <span className="stars" aria-hidden="true">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--text)' }}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {guideOpen && <SizeGuideModal category={product.category} onClose={() => setGuideOpen(false)} />}
    </div>
  )
}
