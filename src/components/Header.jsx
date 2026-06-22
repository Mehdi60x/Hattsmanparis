import { useEffect, useRef, useState } from 'react'
import { useStore } from '../context/StoreContext'
import { PRODUCTS } from '../data/products'
import { SearchIcon, UserIcon, BagIcon, CloseIcon } from './icons'

const NAV_ITEMS = [
  { label: 'Maroquinerie', slug: 'maroquinerie' },
  { label: 'Chaussures', slug: 'chaussures' },
  { label: 'Costumes', slug: 'costumes' },
  { label: 'Chemises', slug: 'chemises' },
]

export default function Header() {
  const { route, navigate, cartCount, cartBump, setCartOpen, showToast } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [bounce, setBounce] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (cartBump === 0) return
    setBounce(true)
    const t = setTimeout(() => setBounce(false), 500)
    return () => clearTimeout(t)
  }, [cartBump])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  const results =
    query.trim().length > 1
      ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 5)
      : []

  const goCategory = (slug) => {
    navigate('category', { categorySlug: slug })
    setDrawerOpen(false)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header-inner">
          <button
            className="hamburger"
            aria-label="Ouvrir le menu"
            onClick={() => setDrawerOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              navigate('home')
            }}
            aria-label="Maison Hatt's Paris — Accueil"
          >
            MAISON <span className="logo-mark">H'P</span>
          </a>

          <nav className="nav" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.slug}
                href="#"
                className={`nav-link ${route.page === 'category' && route.categorySlug === item.slug ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  goCategory(item.slug)
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className={`nav-link ${route.page === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                navigate('about')
              }}
            >
              À Propos
            </a>
          </nav>

          <div className="header-icons">
            <button
              className="icon-btn"
              aria-label="Rechercher"
              onClick={() => setSearchOpen((s) => !s)}
            >
              <SearchIcon />
            </button>
            <button
              className="icon-btn"
              aria-label="Mon compte"
              onClick={() => showToast("Espace client bientôt disponible")}
            >
              <UserIcon />
            </button>
            <button
              className="icon-btn"
              aria-label={`Panier, ${cartCount} article${cartCount > 1 ? 's' : ''}`}
              onClick={() => setCartOpen(true)}
            >
              <BagIcon />
              {cartCount > 0 && (
                <span className={`cart-badge ${bounce ? 'bounce' : ''}`}>{cartCount}</span>
              )}
            </button>
          </div>
        </div>
        <div className="header-gold-line" />

        {searchOpen && (
          <div className="container" style={{ paddingBottom: 18 }}>
            <div style={{ position: 'relative', maxWidth: 420, marginLeft: 'auto' }}>
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit..."
                aria-label="Rechercher un produit"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  fontSize: 14,
                  borderRadius: 2,
                }}
              />
              {results.length > 0 && (
                <ul
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--surface)',
                    boxShadow: 'var(--shadow-lift)',
                    marginTop: 4,
                    zIndex: 50,
                  }}
                >
                  {results.map((p) => (
                    <li key={p.id}>
                      <a
                        href="#"
                        style={{ display: 'block', padding: '10px 16px', fontSize: 13.5 }}
                        onClick={(e) => {
                          e.preventDefault()
                          navigate('product', { productId: p.id })
                          setSearchOpen(false)
                          setQuery('')
                        }}
                      >
                        {p.name} — {p.price}€
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </header>

      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <button
          className="icon-btn"
          aria-label="Fermer le menu"
          style={{ position: 'absolute', top: 28, right: 28, width: 18, height: 18 }}
          onClick={() => setDrawerOpen(false)}
        >
          <CloseIcon />
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.slug}
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              goCategory(item.slug)
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            navigate('about')
            setDrawerOpen(false)
          }}
        >
          À Propos
        </a>
      </div>
    </>
  )
}
