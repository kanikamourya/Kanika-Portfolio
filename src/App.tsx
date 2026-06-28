import { useState, useEffect } from 'react'
import type { ProfileMode } from './data/profile'
import { contact } from './data/profile'
import { ProfileToggle } from './components/ProfileToggle'
import { ProfessionalPortfolio } from './components/ProfessionalPortfolio'
import { ArtisticPortfolio } from './components/ArtisticPortfolio'

function App() {
  const [mode, setMode] = useState<ProfileMode>('professional')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'closing' | 'opening'>('idle')

  useEffect(() => {
    // Page load animation
    document.body.classList.add('page-loaded')
  }, [])

  const handleModeChange = (newMode: ProfileMode) => {
    if (newMode === mode || isTransitioning) return
    
    // Start transition
    setIsTransitioning(true)
    setTransitionPhase('closing')
    
    // Change mode immediately while curtain is closing
    setTimeout(() => {
      setMode(newMode)
      setTransitionPhase('opening')
      
      // End transition after curtain opens
      setTimeout(() => {
        setTransitionPhase('idle')
        setIsTransitioning(false)
      }, 1000)
    }, 50)
  }

  return (
    <div className={`app ${mode}`}>
      {/* Navigation - Always visible */}
      <nav className="top-nav">
        <div className="nav-brand">
          <span className="brand-mark">K</span>
          <span className="brand-text">Welcome to my universe of code, creativity, and endless curiosity</span>
        </div>
        <ProfileToggle mode={mode} onChange={handleModeChange} />
      </nav>

      {/* Main Content - Normal Flow */}
      <main className="main-content">
        {mode === 'professional' ? <ProfessionalPortfolio /> : <ArtisticPortfolio />}
      </main>

      {/* Curtain Overlay - Fixed, independent of layout */}
      {isTransitioning && (
        <div className={`curtain-overlay-container ${transitionPhase}`}>
          <div className="curtain-character">
            🐼
          </div>
          <div className="curtain-light"></div>
          <div className="curtain-left"></div>
          <div className="curtain-right"></div>
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${30 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 0.3}s`,
                  animationDuration: `${0.8 + Math.random() * 1}s`,
                  '--tx': `${(Math.random() - 0.5) * 200}px`,
                  '--ty': `${(Math.random() - 0.5) * 200}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
