import { useStore } from '../context/StoreContext'
import { HeartIcon } from './icons'

const CATEGORY_LABELS = {
  maroquinerie: 'Maroquinerie',
  chaussures: 'Chaussures',
  costumes: 'Costumes',
  chemises: 'Chemises',
}

export default function ProductCard({ product }) {
  const { navigate, wishlist, toggleWishlist } = useStore()
  const isWishlisted = wishlist.has(product.id)

  const open = () => navigate('product', { productId: product.id })

  return (
    <div className="product-card">
      <div className="product-card-media" onClick={open} role="link" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && open()}>
        {product.badge && <span className="badge">{product.badge}</span>}
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          aria-label={isWishlisted ? 'Retirer de la wishlist' : 'Ajouter à la wishlist'}
          onClick={(e) => {
            e.stopPropagation()
            toggleWishlist(product.id)
          }}
        >
          <HeartIcon filled={isWishlisted} width={16} height={16} />
        </button>
        <img className="product-card-img" src={product.images[0]} alt={product.name} loading="lazy" />
        <img
          className="product-card-img product-card-img--hover"
          src={product.images[1]}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <button className="btn btn-dark view-btn" onClick={(e) => { e.stopPropagation(); open() }}>
          Voir le produit
        </button>
      </div>
      <div className="product-card-info">
        <span className="product-category">{CATEGORY_LABELS[product.category]}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-subtitle">{product.subtitle}</p>
        <p className="product-price">{product.price.toLocaleString('fr-FR')} €</p>
      </div>
    </div>
  )
}
