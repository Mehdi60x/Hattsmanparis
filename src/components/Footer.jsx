import { useStore } from '../context/StoreContext'
import { InstagramIcon, PinterestIcon, LinkedinIcon } from './icons'

export default function Footer() {
  const { navigate, showToast } = useStore()

  const goCategory = (slug) => navigate('category', { categorySlug: slug })

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goCategory('maroquinerie') }}>Maroquinerie</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goCategory('chaussures') }}>Chaussures</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goCategory('costumes') }}>Costumes</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goCategory('chemises') }}>Chemises</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Livraison</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Retours &amp; échanges</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Guide des tailles</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Légal</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Mentions légales</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Conditions générales</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Confidentialité</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Maison</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('about') }}>À propos</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Nos ateliers</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Page bientôt disponible') }}>Carrières</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-logo">
          MAISON <span>H'P</span>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><InstagramIcon /></a>
          <a href="#" aria-label="Pinterest" onClick={(e) => e.preventDefault()}><PinterestIcon /></a>
          <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><LinkedinIcon /></a>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Maison Hatt's Paris. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
