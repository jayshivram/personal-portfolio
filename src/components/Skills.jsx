const SKILLS = [
  { icon: 'receipt_long',    name: 'Financial Reporting',      desc: 'Creating accurate financial statements and reports that comply with regulatory standards.' },
  { icon: 'calculate',       name: 'Tax Management',           desc: 'Filing taxes, VAT, PAYE/SDL, and Withholding Tax while ensuring compliance.' },
  { icon: 'account_balance', name: 'Tally Software',           desc: 'Expert in posting financial transactions and maintaining organized data in Tally.' },
  { icon: 'description',     name: 'Microsoft Excel',          desc: 'Advanced skills in Excel for financial modeling and data analysis.' },
  { icon: 'article',         name: 'Microsoft Word & PowerPoint', desc: 'Proficient in creating professional documents and presentations.' },
  { icon: 'computer',        name: 'ICT/IT Skills',            desc: 'Self-learned strong ICT/IT skills including networking, system management, and troubleshooting.' },
  { icon: 'groups',          name: 'Team Collaboration',       desc: 'Working effectively in teams to achieve financial goals and objectives.' },
  { icon: 'gavel',           name: 'Regulatory Compliance',    desc: 'Ensuring adherence to TRA, WCF, and NSSF regulations.' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Skills &amp; Expertise</h2>
          <p>The professional skills I bring to the table</p>
        </div>
        <div className="skills-grid animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {SKILLS.map(({ icon, name, desc }) => (
            <div className="skill-card" key={name}>
              <div className="skill-icon">
                <span className="material-icons-round">{icon}</span>
              </div>
              <div className="skill-name">{name}</div>
              <div className="skill-description">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
