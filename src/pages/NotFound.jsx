import { Link } from 'react-router-dom'
import { useTheme } from '../App'

export default function NotFound() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {/* Minimal nav */}
      <header className="appbar">
        <Link to="/" className="appbar-title">
          <span className="material-icons-round">account_circle</span>
          <span>Jay Shivram</span>
        </Link>
        <div className="appbar-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="material-icons-round">{theme === 'dark' ? 'dark_mode' : 'light_mode'}</span>
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </header>

      <div className="not-found-page" style={{ paddingTop: 'var(--appbar-height)' }}>
        {/* Giant ghost 404 is via CSS ::before */}
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-sub">
          Looks like this page took a gap year. The URL you're after doesn't exist — but my portfolio does.
        </p>
        <Link to="/" className="btn btn-primary" style={{ gap: 8 }}>
          <span className="material-icons-round">home</span>
          Go Back Home
        </Link>

        <div style={{ marginTop: 48, opacity: 0.4, fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>
          Press <kbd style={{
            background: 'var(--surface-variant)',
            border: '1px solid var(--secondary)',
            borderRadius: 4,
            padding: '2px 6px',
            fontFamily: 'monospace'
          }}>D</kbd> to toggle dark mode
        </div>
      </div>
    </>
  )
}
