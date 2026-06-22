import { useEffect, useRef, useState } from 'react'
import { useStore } from '../context/StoreContext'
import { BRAND_IMAGES } from '../data/products'

const TITLE = "L'excellence taillée pour vous"

export default function HeroSection() {
  const { navigate } = useStore()
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.setProperty('--parallax', `${window.scrollY * 0.25}px`)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" style={{ padding: 0 }}>
      <div
        className="hero-bg"
        ref={bgRef}
        style={{ backgroundImage: `url(${BRAND_IMAGES.hero})` }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-eyebrow">Maison Hatt's Paris</span>
        <h1 className="hero-title">
          {TITLE.split('').map((ch, i) => (
            <span
              key={i}
              className="char"
              style={{ animationDelay: `${0.4 + i * 0.035}s` }}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">Collections Automne-Hiver 2025</p>
        <div className="hero-actions">
          <button
            className="btn btn-gold"
            onClick={() => navigate('category', { categorySlug: 'chaussures' })}
          >
            Découvrir la collection
          </button>
          <button className="btn btn-outline-light" onClick={() => navigate('about')}>
            Notre univers
          </button>
        </div>
      </div>
      <div className="hero-scroll-cue">Découvrir</div>
    </section>
  )
}
