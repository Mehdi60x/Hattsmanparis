import { BRAND_IMAGES } from '../data/products'
import Reveal from './Reveal'
import Newsletter from './Newsletter'

export default function AboutPage() {
  return (
    <div className="page-fade">
      <section style={{ paddingTop: 160 }}>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="section-eyebrow">Maison Hatt's Paris</span>
            <h1 className="section-title">L'art du gentleman moderne</h1>
            <div className="section-divider" />
          </Reveal>
        </div>
      </section>

      <section className="brand-section" style={{ paddingTop: 0 }}>
        <div className="container brand-grid">
          <Reveal as="div">
            <p className="brand-quote">
              « Le luxe n'est pas une question de prix, mais de précision. »
            </p>
            <p className="brand-text">
              Fondée par des artisans passionnés, Maison Hatt's Paris perpétue un savoir-faire
              de maroquinerie et de chausson italien transmis depuis des générations. Chaque
              pièce naît d'une sélection rigoureuse des cuirs — pleine fleur, tannage végétal —
              et d'une construction pensée pour traverser le temps.
            </p>
            <p className="brand-text">
              Nous travaillons avec un nombre restreint d'ateliers en Italie et au Portugal,
              dont nous connaissons personnellement les maîtres artisans. Cette proximité nous
              permet de garantir une exigence constante, du choix de la matière première à la
              dernière couture.
            </p>
          </Reveal>
          <Reveal as="div" delay={120} className="brand-image">
            <img src={BRAND_IMAGES.craft} alt="Mains d'artisan façonnant le cuir" />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container brand-grid">
          <Reveal as="div" className="brand-image">
            <img src={BRAND_IMAGES.brandPortrait} alt="Portrait élégant Maison Hatt's Paris" />
          </Reveal>
          <Reveal as="div" delay={120}>
            <span className="section-eyebrow">Nos valeurs</span>
            <h2 style={{ fontSize: 28, marginBottom: 20 }}>Précision, sobriété, transmission</h2>
            <p style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: 16 }}>
              Nous croyons qu'une pièce bien faite n'a pas besoin de crier pour se distinguer.
              Notre signature reste discrète : une fine ligne dorée, un cuir qui se patine avec
              le temps, une coupe qui ne se démode pas.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: 1.8 }}>
              Chaque collection est limitée en quantité, garantissant à nos clients des pièces
              rares et un service à la hauteur de leurs attentes.
            </p>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
