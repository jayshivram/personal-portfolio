export default function About() {
  return (
    <section id="about" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>About Me</h2>
          <p>Get to know the professional behind the numbers</p>
        </div>

        <div className="about-content">
          <div className="about-text animate-slide-up">
            <p>I am a Tanzanian accountant based in Dar es Salaam with a background in accounting and experience in creating financial statements, managing tax processes, and posting financial transactions in Tally Software.</p>
            <p>Throughout my career, I have handled various aspects of financial management, including ensuring accurate record-keeping, preparing reports, and staying compliant with tax regulations. My experience with Tally has enabled me to streamline processes and maintain organized financial data.</p>
            <p>I am currently studying for the ACCA qualification through online resources while working full-time, demonstrating my commitment to continuous learning and professional development.</p>

            <h3 style={{ marginTop: 30 }}>Personal Details</h3>
            <p><strong>Nationality:</strong> Tanzanian</p>
            <p><strong>Date/Place of Birth:</strong> 18th June 2003, Dar es Salaam</p>

            <h3 style={{ marginTop: 30 }}>Languages</h3>
            <div className="skills-grid" style={{ marginTop: 20 }}>
              {[
                { name: 'English',   level: 90,  desc: 'Highly proficient' },
                { name: 'Gujarati',  level: 100, desc: 'Native speaker' },
                { name: 'Hindi',     level: 100, desc: 'Native speaker' },
                { name: 'Kiswahili', level: 70,  desc: 'Very good command' },
              ].map(({ name, level, desc }) => (
                <div className="skill-card" key={name}>
                  <div className="skill-name">{name}</div>
                  <div className="skill-description">{desc}</div>
                  <div className="language-meter">
                    <div className="language-progress" style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: 30 }}>Hobbies</h3>
            <div className="hobbies">
              {[
                { icon: 'sports_cricket', label: 'Cricket' },
                { icon: 'photo_camera',   label: 'Photography' },
                { icon: 'sports_tennis',  label: 'Badminton' },
                { icon: 'computer',       label: 'Computers' },
                { icon: 'smart_toy',      label: 'AI & Tech Exploration' },
                { icon: 'menu_book',      label: 'Reading Literature' },
              ].map(({ icon, label }) => (
                <div className="hobby" key={label}>
                  <span className="material-icons-round">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://i.imgur.com/IeeimuR.png"
            alt="Jay Shivram"
            className="profile-image animate-fade"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
      </div>
    </section>
  )
}
