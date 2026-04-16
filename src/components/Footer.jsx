export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 20 }}>
          Jay Shivram
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jay-shivram-43718034a/"
            className="social-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="LinkedIn" style={{ width: 24, height: 24 }} />
          </a>
          <a
            href="https://github.com/jayshivram"
            className="social-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/100/github.png" alt="GitHub" style={{ width: 24, height: 24 }} />
          </a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Jay Shivram. All rights reserved.
        </div>
        <div style={{ marginTop: 10, fontSize: '0.8rem', color: 'var(--on-surface-variant)', opacity: 0.7 }}>
          Last updated: April 2026
        </div>
        <div style={{ marginTop: 16 }}>
          <img
            src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fjay-shivram.vercel.app%2F&label=Personal+Portfolio&icon=person-fill&color=%23198754&message=&style=social&tz=Africa%2FDar_es_Salaam"
            alt="Visitor counter"
            style={{ height: 22, borderRadius: 4 }}
          />
        </div>
      </div>
    </footer>
  )
}
