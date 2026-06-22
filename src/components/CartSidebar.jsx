import { useStore } from '../context/StoreContext'
import CartItem from './CartItem'
import { CloseIcon } from './icons'

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, subtotal, shipping, freeShippingThreshold, navigate, showToast } = useStore()

  const close = () => setCartOpen(false)
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <>
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={close} />
      <aside className={`cart-sidebar ${cartOpen ? 'open' : ''}`} aria-hidden={!cartOpen} aria-label="Panier">
        <div className="cart-header">
          <h3>Votre panier ({cart.reduce((n, i) => n + i.qty, 0)})</h3>
          <button className="icon-btn" style={{ width: 18, height: 18 }} aria-label="Fermer le panier" onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Votre panier est vide.</p>
            </div>
          ) : (
            cart.map((item) => <CartItem key={item.key} item={item} />)
          )}
        </div>

        <div className="cart-footer">
          {subtotal > 0 && remainingForFreeShipping > 0 && (
            <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>
              Plus que {remainingForFreeShipping}€ pour la livraison offerte.
            </p>
          )}
          <div className="cart-summary-row">
            <span>Sous-total</span>
            <span>{subtotal.toLocaleString('fr-FR')} €</span>
          </div>
          <div className="cart-summary-row">
            <span>Livraison</span>
            <span>{shipping === 0 ? 'Offerte' : `${shipping} €`}</span>
          </div>
          <div className="cart-summary-row total">
            <span>Total</span>
            <span>{(subtotal + shipping).toLocaleString('fr-FR')} €</span>
          </div>
          <div className="cart-actions">
            <button
              className="btn btn-dark btn-block"
              disabled={cart.length === 0}
              onClick={() => {
                showToast('Paiement simulé — merci pour votre confiance')
                close()
              }}
            >
              Procéder au paiement
            </button>
            <button
              className="btn btn-outline-dark btn-block"
              onClick={() => {
                close()
                navigate('home')
              }}
            >
              Continuer mes achats
            </button>
          </div>
          <div className="reassurance">
            <span>🔒 Paiement sécurisé</span>
            <span>📦 Livraison 2-3j</span>
            <span>🔄 Retours 30j</span>
          </div>
        </div>
      </aside>
    </>
  )
}
