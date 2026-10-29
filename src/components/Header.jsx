import { useEffect, useState } from 'react'
import { Arrow } from './Icons'

const links = [
  { href: '#about', label: 'About Portugal' },
  { href: '#destinations', label: 'Places to visit' },
  { href: '#experiences', label: 'Things to do' },
  { href: '#route', label: 'Itineraries' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a
          className="brand"
          href="#home"
          aria-label="Portugal — home"
          onClick={() => setMenuOpen(false)}
        >
          PORTUGAL
        </a>
        <nav
          id="main-navigation"
          className={`navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#route">
          Plan your trip <Arrow direction="right" />
        </a>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
