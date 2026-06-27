import { useState } from 'react'
import type { ProfileMode } from './data/profile'
import { contact } from './data/profile'
import { ProfileToggle } from './components/ProfileToggle'
import { ProfessionalPortfolio } from './components/ProfessionalPortfolio'
import { ArtisticPortfolio } from './components/ArtisticPortfolio'

function App() {
  const [mode, setMode] = useState<ProfileMode>('professional')

  return (
    <div className={`app ${mode}`}>
      <nav className="top-nav">
        <div className="nav-brand">
          <span className="brand-mark">K</span>
          <span className="brand-text">{contact.name}</span>
        </div>
        <ProfileToggle mode={mode} onChange={setMode} />
      </nav>

      <main className="main-content">
        {mode === 'professional' ? <ProfessionalPortfolio /> : <ArtisticPortfolio />}
      </main>
    </div>
  )
}

export default App
