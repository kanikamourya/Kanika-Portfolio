import { contact, professional } from '../data/profile'
import { ProfilePhoto } from './ProfilePhoto'

export function ProfessionalPortfolio() {
  return (
    <div className="portfolio professional-portfolio">
      <header className="hero hero-with-photo">
        <ProfilePhoto variant="professional" size="large" />
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1>{contact.name}</h1>
          <p className="hero-title">{professional.title}</p>
          <p className="hero-location">{contact.location}</p>
          <p className="hero-summary">{professional.summary}</p>
          <div className="hero-actions">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">Contact Me</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
            <a href={contact.blog} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Technical Blog
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card animate-in" style={{ animationDelay: '0.1s' }}>
            <span className="stat-value">6+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card animate-in" style={{ animationDelay: '0.2s' }}>
            <span className="stat-value">6</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-card animate-in" style={{ animationDelay: '0.3s' }}>
            <span className="stat-value">3</span>
            <span className="stat-label">Awards</span>
          </div>
        </div>
      </header>

      <section className="section animate-in" id="experience">
        <h2 className="section-title">Professional Journey</h2>
        <div className="experience-list">
          {professional.experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="experience-item animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{job.company}</h3>
              <span className="timeline-period">{job.period}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section animate-in" id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skill-grid">
          {professional.skills.map((skill, index) => (
            <span
              key={skill}
              className="skill-tag animate-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section two-col animate-in">
        <div>
          <h2 className="section-title">Certifications</h2>
          <ul className="cert-list">
            {professional.certifications.map((cert) => (
              <li key={cert} className="cert-item">
                <span className="cert-badge">✓</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>{professional.education.degree}</h3>
            <p>{professional.education.institution}</p>
            <p className="muted">{professional.education.location}</p>
            <p className="timeline-period">{professional.education.period}</p>
          </div>
        </div>
      </section>

      <section className="section animate-in" id="awards">
        <h2 className="section-title">Awards & Recognition</h2>
        <div className="award-grid">
          {professional.awards.map((award, index) => (
            <div
              key={`${award.title}-${award.detail}`}
              className="award-card animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="award-icon">★</span>
              <h3>{award.title}</h3>
              <p>{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section animate-in" id="community">
        <h2 className="section-title community-title">{professional.communityImpact.title}</h2>
        <ul className="contribution-list">
          {professional.communityImpact.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <p>{contact.name} · {professional.title}</p>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}
