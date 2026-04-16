const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const PROJECTS = [
  {
    icon: 'web',
    name: 'Personal Portfolio / CV Website',
    desc: 'This very site. Built from scratch with React and Vite. Figured the best way to learn was to just build something real.',
    tag: 'React · Vite',
    href: 'https://jay-shivram.vercel.app/',
    links: [
      { icon: 'external', href: 'https://jay-shivram.vercel.app/' },
      { icon: 'github', href: 'https://github.com/jayshivram/personal-portfolio' }
    ],
  },
  {
    icon: 'calculate',
    name: 'Precision Calculator',
    desc: "A calculator I built because I wanted something cleaner than what's out there. Nothing groundbreaking, just a focused little tool with a UI I actually like using.",
    tag: 'Live App · GitHub',
    links: [
      { icon: 'external', href: 'https://precision-wheat.vercel.app/' },
      { icon: 'github',   href: 'https://github.com/jayshivram/Precision' },
    ],
  },
  {
    icon: 'chat',
    name: 'Simple Chat Analyzer & Exporter',
    desc: 'Parses and exports WhatsApp chat logs. I made it because I wanted to search through old conversations without endless scrolling, and it turns out others found it useful too.',
    tag: 'Live App',
    href: 'https://ironheist6.netlify.app/',
    links: [{ icon: 'external', href: 'https://ironheist6.netlify.app/' }],
  },
  {
    icon: 'savings',
    name: 'GoalVault – Savings Tracker',
    desc: 'A savings tracker I put together to practice building something actually useful. You set a goal, log what you\'ve saved, and watch the progress bar fill up. Simple, but it works.',
    tag: 'Live App',
    href: 'https://goalvault-livid.vercel.app/',
    links: [{ icon: 'external', href: 'https://goalvault-livid.vercel.app/' }],
  },
  {
    icon: 'timer',
    name: 'PoMoDoRo Timer',
    desc: 'A beautiful, modern Pomodoro timer web application built with React and Vite. Designed for daily productivity with task planning, multiple themes, and smart session tracking.',
    tag: 'React · Vite',
    href: 'https://pomodoro-six-navy.vercel.app/',
    links: [{ icon: 'external', href: 'https://pomodoro-six-navy.vercel.app/' }],
  },
]

function ProjectCard({ project }) {
  const handleCardClick = () => {
    if (project.href) window.open(project.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="project-card"
      onClick={project.href ? handleCardClick : undefined}
      style={project.href ? { cursor: 'pointer' } : {}}
      role={project.href ? 'link' : undefined}
      tabIndex={project.href ? 0 : undefined}
      onKeyDown={project.href ? e => { if (e.key === 'Enter') handleCardClick() } : undefined}
    >
      <div className="project-card-header">
        <span className="material-icons-round project-icon">{project.icon}</span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-icon"
              onClick={e => e.stopPropagation()}
            >
              {link.icon === 'github' ? <GithubIcon /> : <ExternalIcon />}
            </a>
          ))}
        </div>
      </div>
      <div className="project-name">{project.name}</div>
      <div className="project-desc">{project.desc}</div>
      <div className="project-tag">{project.tag}</div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Projects</h2>
          <p>A few things I've built outside of work, hobby projects at the intersection of finance and tech.</p>
        </div>
        <div className="projects-grid animate-slide-up">
          {PROJECTS.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  )
}
