import { useState } from 'react'
import Reveal from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="container">
        <Reveal as="div">
          <span className="section-eyebrow">Newsletter</span>
          <h2 className="section-title">Rejoignez l'intimité de la maison</h2>
          <p className="newsletter-subtitle">
            Recevez en avant-première nos nouvelles collections, invitations privées et
            conseils d'entretien.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Adresse e-mail"
            />
            <button className="btn btn-gold" type="submit">
              S'inscrire
            </button>
          </form>
          {submitted && <p className="newsletter-success">Merci, votre inscription est confirmée.</p>}
        </Reveal>
      </div>
    </section>
  )
}
