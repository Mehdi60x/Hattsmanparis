import { useStore } from '../context/StoreContext'

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useStore()
  const { product } = item

  return (
    <div className="cart-item">
      <img className="cart-item-img" src={product.images[0]} alt={product.name} />
      <div>
        <h4 className="cart-item-name">{product.name}</h4>
        <p className="cart-item-meta">
          {item.color?.name ? `${item.color.name} · ` : ''}Taille {item.size}
        </p>
        <div className="cart-item-row">
          <div className="cart-item-qty">
            <button aria-label="Diminuer la quantité" onClick={() => updateQty(item.key, -1)}>−</button>
            <span>{item.qty}</span>
            <button aria-label="Augmenter la quantité" onClick={() => updateQty(item.key, 1)}>+</button>
          </div>
          <span className="cart-item-price">{(product.price * item.qty).toLocaleString('fr-FR')} €</span>
        </div>
        <button className="cart-item-remove" onClick={() => removeFromCart(item.key)}>
          Retirer
        </button>
      </div>
    </div>
  )
}
