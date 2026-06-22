import { useStore } from '../context/StoreContext'
import { BRAND_IMAGES } from '../data/products'
import Reveal from './Reveal'

export default function BrandSection() {
  const { navigate } = useStore()
  return (
    <section className="brand-section">
      <div className="container brand-grid">
        <Reveal as="div">
          <p className="brand-quote">
            « Le luxe n'est pas une question de prix, mais de précision. »
          </p>
          <p className="brand-text">
            Depuis nos ateliers, chaque pièce Maison Hatt's Paris est pensée comme un objet
            durable : cuirs sélectionnés pour leur pleine fleur, constructions cousues à la
            main, finitions reprises jusqu'à l'exigence du dernier détail. Nous croyons à un
            artisanat sans compromis, transmis de génération en génération.
          </p>
          <button className="btn btn-outline-light" onClick={() => navigate('about')}>
            Notre histoire
          </button>
        </Reveal>
        <Reveal as="div" delay={120} className="brand-image">
          <img src={BRAND_IMAGES.atelier} alt="Artisan travaillant le cuir dans l'atelier Maison Hatt's Paris" />
        </Reveal>
      </div>
    </section>
  )
}
