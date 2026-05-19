import Counter from './Counter'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-eyebrow">
          <span className="section-label">Sovoreign &amp; Greene</span>
        </div>

        <h1 className="hero-name serif">
          Jaka&apos; Thomo Ka&apos;Thomo
        </h1>

        <div className="hero-divider" />

        <p className="hero-tagline serif">
          &ldquo;dreams do come true&rdquo;
        </p>

        <p className="hero-sub">
          Founder &amp; Principal of <strong>Ceteris Paribus</strong> &mdash;
          a strategic consulting and content practice dedicated to clarity,
          impact, and enduring ideas.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Work With Us</a>
          <a href="#ideas" className="btn btn-outline">The Blueprint</a>
        </div>

        <Counter />
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  )
}
