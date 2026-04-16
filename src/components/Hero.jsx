import { useEffect, useState, useRef } from 'react'

const WORDS = ['ACCA Candidate', 'Tech Enthusiast', 'Curious Tinkerer']

export default function Hero() {
  const [typedText, setTypedText] = useState('ACCA Candidate')
  const stateRef = useRef({ wordIdx: 0, charIdx: WORDS[0].length, deleting: true })

  useEffect(() => {
    let timer

    const type = () => {
      const { wordIdx, charIdx, deleting } = stateRef.current
      const current = WORDS[wordIdx]

      if (deleting) {
        const next = charIdx - 1
        stateRef.current.charIdx = next
        setTypedText(current.substring(0, next))
        if (next === 0) {
          stateRef.current.deleting = false
          stateRef.current.wordIdx = (wordIdx + 1) % WORDS.length
          timer = setTimeout(type, 400)
        } else {
          timer = setTimeout(type, 60)
        }
      } else {
        const nextWord = WORDS[stateRef.current.wordIdx]
        const next = charIdx + 1
        stateRef.current.charIdx = next
        setTypedText(nextWord.substring(0, next))
        if (next === nextWord.length) {
          stateRef.current.deleting = true
          timer = setTimeout(type, 2200)
        } else {
          timer = setTimeout(type, 90)
        }
      }
    }

    timer = setTimeout(type, 2500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {/* Floating shapes */}
      {[
        { w: 130, style: { top: '12%', right: '18%', animationDuration: '9s', animationDelay: '-1s' } },
        { w: 65,  style: { top: '65%', right: '28%', animationDuration: '13s', animationDelay: '-4s' } },
        { w: 220, style: { bottom: '-70px', left: '-55px', animationDuration: '16s' } },
        { w: 45,  style: { top: '28%', left: '4%', animationDuration: '11s', animationDelay: '-6s' } },
        { w: 90,  style: { top: '48%', right: '8%', animationDuration: '14s', animationDelay: '-3s' } },
      ].map((s, i) => (
        <div key={i} className="hero-shape" style={{ width: s.w, height: s.w, ...s.style }} />
      ))}

      <div className="container">
        <div className="hero-content animate-slide-up">
          <div className="hero-badge">Available for new opportunities</div>
          <h1 className="hero-title">Jay Shivram</h1>
          <p className="hero-subtitle">
            Accountant&nbsp;·&nbsp;Geek at Heart&nbsp;·&nbsp;
            <span className="hero-typing" id="heroTyping">{typedText}</span>
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <span className="material-icons-round">email</span>
              Contact Me
            </a>
            <a href="#about" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.45)' }} onClick={e => { e.preventDefault(); scrollToAbout() }}>
              <span className="material-icons-round">person</span>
              About Me
            </a>
          </div>
          <div className="hero-stats">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '6/13', label: 'ACCA Papers' },
              { number: 'DSM', label: 'Dar es Salaam, TZ' },
            ].map(({ number, label }) => (
              <div key={label} className="hero-stat">
                <div className="hero-stat-number">{number}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="hero-scroll" aria-label="Scroll down" onClick={scrollToAbout}>
        <span>Scroll</span>
        <div className="hero-scroll-arrow" />
      </button>
    </section>
  )
}
