import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../App'

const NAV_ITEMS = [
  { href: '#about', icon: 'person', label: 'About Me' },
  { href: '#experience', icon: 'work', label: 'Work Experience' },
  { href: '#projects', icon: 'folder_open', label: 'Projects' },
  { href: '#skills', icon: 'star', label: 'Skills & Expertise' },
  { href: '#education', icon: 'school', label: 'Education' },
  { href: '#contact', icon: 'email', label: 'Get in Touch' },
]

export default function AppBar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll spy
  useEffect(() => {
    const appbarH = 72
    const sections = document.querySelectorAll('section[id]')

    const update = () => {
      const scrollMid = window.scrollY + appbarH + window.innerHeight * 0.25
      let active = ''
      sections.forEach(s => { if (s.offsetTop <= scrollMid) active = s.id })
      setActiveSection(active)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const isDark = theme === 'dark'

  return (
    <header className="appbar">
      <a href="#" className="appbar-title" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <span className="material-icons-round">account_circle</span>
        <span>Jay Shivram</span>
      </a>

      <div className="appbar-actions">
        <nav>
          {NAV_ITEMS.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className={`btn btn-icon${activeSection === href.slice(1) ? ' active' : ''}`}
              aria-label={label}
              onClick={e => handleNavClick(e, href)}
            >
              <span className="material-icons-round">{icon}</span>
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-btn btn btn-icon"
          id="mobileMenuBtn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="material-icons-round">{menuOpen ? 'close' : 'menu'}</span>
        </button>

        <button
          className="theme-toggle-btn"
          id="theme-toggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <span className="material-icons-round">{isDark ? 'dark_mode' : 'light_mode'}</span>
          <span>{isDark ? 'Dark' : 'Light'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        {NAV_ITEMS.map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            className="btn btn-outline"
            style={{ justifyContent: 'flex-start' }}
            onClick={e => handleNavClick(e, href)}
          >
            <span className="material-icons-round">{icon}</span>
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
