const TOTAL_PAPERS = 13
const COMPLETED_PAPERS = 6 // <-- update when more papers are cleared

export default function Education() {
  const isComplete = COMPLETED_PAPERS >= TOTAL_PAPERS

  return (
    <section id="education" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Education &amp; Qualifications</h2>
          <p>My academic background and professional development</p>
        </div>

        <div className="education-grid animate-slide-up">
          {/* ACCA */}
          <div className="education-card">
            <h3 className="education-title">Association of Chartered Certified Accountants (ACCA)</h3>
            <div className="education-date">
              December 2022 –{' '}
              <span style={isComplete ? { color: 'var(--success)', fontWeight: 600 } : {}}>
                {isComplete ? 'Completed' : 'In Progress'}
              </span>
            </div>
            <div className="education-description">
              <p>Pursuing the ACCA qualification to develop expertise in accounting, finance, auditing, and taxation, aiming to become an ACCA certified accountant.</p>
              <span className="acca-progress-badge">
                <span className="material-icons-round" style={{ fontSize: '1rem' }}>school</span>
                {COMPLETED_PAPERS}/{TOTAL_PAPERS} Papers Completed
              </span>
            </div>
          </div>

          {/* FIA */}
          <div className="education-card">
            <h3 className="education-title">Foundation in Accountancy (FIA)</h3>
            <div className="education-date">January 2020 – December 2021</div>
            <div className="education-description">
              <p>Completed the ACCA Foundation in Accountancy (FIA), focusing on the fundamentals of financial and management accounting, business and technology (FBT), and preparing for the ACCA qualification.</p>
            </div>
          </div>

          {/* High School */}
          <div className="education-card">
            <h3 className="education-title">High School Education</h3>
            <div className="education-date">January 2016 – December 2019</div>
            <div className="education-description">
              <p>Completed the Certificate of Secondary Education (CSEE) at Shabaan Robert Secondary School, gaining a strong foundation in core subjects to prepare for further education.</p>
            </div>
          </div>

          {/* Tally */}
          <div className="education-card">
            <h3 className="education-title">Tally Beginners Course</h3>
            <div className="education-date">February 2020</div>
            <div className="education-description">
              <p>Completed Basic training at Power Computers to master Basics of The Tally software.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
