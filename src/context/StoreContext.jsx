import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getProductById } from '../data/products'

const StoreContext = createContext(null)

const FREE_SHIPPING_THRESHOLD = 500

export function StoreProvider({ children }) {
  const [route, setRoute] = useState({ page: 'home' })
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState(new Set())
  const [cartOpen, setCartOpen] = useState(false)
  const [toasts, setToasts] = useState([])
  const [bump, setBump] = useState(0)

  const navigate = useCallback((page, params = {}) => {
    setRoute({ page, ...params })
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [])

  const showToast = useCallback((message) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, message }])
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id))
    }, 2800)
  }, [])

  const addToCart = useCallback(
    (product, color, size, qty = 1) => {
      setCart((prev) => {
        const key = `${product.id}-${color?.name}-${size}`
        const existing = prev.find((item) => item.key === key)
        if (existing) {
          return prev.map((item) =>
            item.key === key ? { ...item, qty: item.qty + qty } : item,
          )
        }
        return [
          ...prev,
          { key, productId: product.id, color, size, qty },
        ]
      })
      setBump((b) => b + 1)
      setCartOpen(true)
      showToast(`${product.name} ajouté au panier`)
    },
    [showToast],
  )

  const updateQty = useCallback((key, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.key === key ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
        )
        .filter((item) => item.qty > 0),
    )
  }, [])

  const removeFromCart = useCallback((key) => {
    setCart((prev) => prev.filter((item) => item.key !== key))
  }, [])

  const toggleWishlist = useCallback((productId) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(productId)) next.delete(productId)
      else next.add(productId)
      return next
    })
  }, [])

  const cartDetailed = useMemo(
    () =>
      cart
        .map((item) => ({ ...item, product: getProductById(item.productId) }))
        .filter((item) => item.product),
    [cart],
  )

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart],
  )

  const subtotal = useMemo(
    () => cartDetailed.reduce((sum, item) => sum + item.product.price * item.qty, 0),
    [cartDetailed],
  )

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 15

  const value = {
    route,
    navigate,
    cart: cartDetailed,
    addToCart,
    updateQty,
    removeFromCart,
    cartCount,
    cartBump: bump,
    subtotal,
    shipping,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    cartOpen,
    setCartOpen,
    wishlist,
    toggleWishlist,
    toasts,
    showToast,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
