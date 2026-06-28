import { artistic, contact } from '../data/profile'
import { ArtGallery } from './ArtGallery'

const HERO_PHOTO = '/kanika-photo.jpg'

export function ArtisticPortfolio() {
  return (
    <div className="portfolio artistic-portfolio">
      <header className="artistic-hero-split animate-in">
        <div className="artistic-orbs" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
        </div>

        <div className="artistic-hero-photo-half">
          <img
            src={HERO_PHOTO}
            alt="Kanika Mourya"
            className="artistic-hero-image"
            onError={(e) => {
              e.currentTarget.src = '/kanika-photo.svg'
            }}
          />
          <div className="artistic-hero-photo-overlay" aria-hidden="true" />
        </div>

        <div className="artistic-hero-content-half">
          <p className="hero-greeting">Welcome to my</p>
          <h1>Creative World</h1>
          <p className="hero-title">{contact.name}</p>
          <p className="hero-subtitle">{artistic.title}</p>
          <p className="hero-summary">{artistic.summary}</p>
        </div>
      </header>

      <section className="section animate-in">
        <h2 className="section-title artistic-title magic-title">{artistic.artFormsTitle}</h2>
        <p className="section-intro">{artistic.artFormsIntro}</p>
        <div className="art-form-grid">
          {artistic.artForms.map((form, index) => (
            <article
              key={form.name}
              className="art-form-card animate-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="art-form-emoji">{form.emoji}</span>
              <h3>{form.name}</h3>
              <p>{form.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section animate-in">
        <h2 className="section-title artistic-title">{artistic.galleryTitle}</h2>
        <p className="section-intro">{artistic.galleryIntro}</p>
        <ArtGallery artworks={artistic.artworks} />
      </section>

      <footer className="site-footer artistic-footer">
        <p className="youtube-cta">Watch my creative journey</p>
        <div className="footer-links">
          <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="youtube-link">
            🎨 Kanika Artspace on YouTube
          </a>
        </div>
      </footer>
    </div>
  )
}
