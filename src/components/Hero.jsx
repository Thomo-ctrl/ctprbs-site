import Counter from './Counter'
import Countdown from './Countdown'
import './Hero.css'

export default function Hero({ navigate }) {
  return (
    <section className="hero">

      {/* Left half of crest — Sovereign & Greene */}
      <div className="hero-crest-left" aria-hidden="true">
        <img src="/crest.jpg" alt="" className="hero-crest-img" />
      </div>

      {/* Faint wave SVG — top right */}
      <svg className="hero-waves" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,80 C80,20 160,140 240,60 S360,100 400,40"  fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M0,130 C60,70 140,190 220,110 S340,150 400,90" fill="none" stroke="currentColor" strokeWidth="0.4" />
        <path d="M0,180 C100,120 180,240 260,160 S380,200 400,140" fill="none" stroke="currentColor" strokeWidth="0.3" />
        <path d="M0,230 C80,170 160,290 260,210 S360,250 400,190" fill="none" stroke="currentColor" strokeWidth="0.25" />
      </svg>

      <div className="container hero-body">

        {/* ── Stats bar — above hero text ── */}
        <div className="hero-stats">
          <div className="hero-stat-card">
            <Counter />
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat-card">
            <Countdown />
          </div>
        </div>

        {/* ── Hero text ── */}
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="section-label">Sovoreign &amp; Greene</span>
          </div>

          <h1 className="hero-name serif">
            Jaka&apos; Thomo Ka&apos;Thomo
          </h1>

          <div className="hero-divider" />

          <p className="hero-tagline serif">
            &ldquo;&hellip;all dreams do come true&rdquo;
          </p>

          <div className="hero-sub-block">
            <p className="hero-sub-role">Principle at Sovereign and Greene</p>
            <p className="hero-sub-star">
              * A company Dedicated to the Growth and development of Africa and its people.
            </p>
            <p className="hero-sub-body">
              Ceteris Paribus is a company devoted to documenting the personal journey of
              Ja&apos;ka Thomo Ka&apos; Thomo&mdash;from KES&nbsp;0 to KES&nbsp;37,000,000,000;
              a living record of strategy, discipline, and the compound effect of well-chosen
              ideas pursued with intention, through business, conversations, and progress&mdash;where
              dreams are engineered into reality, opportunities are created, and others are inspired
              to discover, shape, and pursue their own path along the way.
            </p>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('about')}>
              Our Story
            </button>
            <button className="btn btn-outline" onClick={() => navigate('ideas')}>
              The Blueprint
            </button>
          </div>
        </div>

      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  )
}
