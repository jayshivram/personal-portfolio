import { useMemo } from 'react'

function getEmploymentDuration() {
  const start = new Date(2023, 1, 1)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  if (months < 0) { years--; months += 12 }
  if (years > 0 && months > 0) return `(${years} Year${years > 1 ? 's' : ''} and ${months} Month${months > 1 ? 's' : ''})`
  if (years > 0) return `(${years} Year${years > 1 ? 's' : ''})`
  return `(${months} Month${months > 1 ? 's' : ''})`
}

export default function Experience() {
  const duration = useMemo(getEmploymentDuration, [])

  return (
    <section id="experience" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Work Experience</h2>
          <p>My professional journey in accounting and finance</p>
        </div>

        <div className="timeline animate-slide-up">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">February 2023 – Present <span>{duration}</span></div>
            <h3 className="timeline-title">Accountant</h3>
            <div className="timeline-company">Mars Financial Consultants, Dar es Salaam</div>
            <ul className="timeline-description">
              <li>Creating financial statements, managing tax processes, and posting financial transactions in Tally Software</li>
              <li>Ensuring accurate record-keeping and preparing detailed financial reports while adhering to tax regulations and deadlines</li>
              <li>Streamlining accounting processes using Tally, maintaining organized and efficient financial data</li>
              <li>Managing tax filings to ensure compliance with legal requirements</li>
              <li>Filing taxes, VAT, PAYE/SDL, and Withholding Tax</li>
              <li>Posting and updating Tally entries for various clients</li>
              <li>Preparing annual financial reports for clients</li>
              <li>Updating clients on their tax and financial position every quarter</li>
              <li>Providing ICT support, troubleshooting technical issues, and assisting staff with technology-related challenges to ensure smooth operational workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
