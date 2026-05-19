import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'ideas',    label: 'Blueprint' },
  { id: 'igc',      label: 'In Great Company' },
  { id: 'contact',  label: 'Contact' },
]

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = currentPage === 'home'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    navigate(id)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <div className="navbar-brand">
          <button className="navbar-logo serif" onClick={() => navigate('home')}>
            Ceteris Paribus
          </button>
          <span className="navbar-motto">In hoc vita ad invicem serviendum</span>
        </div>

        {isHome && (
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {LINKS.map(l => (
              <li key={l.id}>
                <button onClick={() => handleNav(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>
        )}

        {isHome && (
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        )}
      </div>
    </nav>
  )
}
