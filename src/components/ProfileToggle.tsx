import type { ProfileMode } from '../data/profile'

interface ProfileToggleProps {
  mode: ProfileMode
  onChange: (mode: ProfileMode) => void
}

export function ProfileToggle({ mode, onChange }: ProfileToggleProps) {
  return (
    <div className="profile-toggle-wrapper">
      <div className="toggle-with-avatars">
        <div className={`avatar-left ${mode === 'professional' ? 'active' : ''}`}>
          <div className="avatar-character">👩‍💻</div>
        </div>
        
        <div className="profile-toggle" role="tablist" aria-label="Profile mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'professional'}
            className={`toggle-btn ${mode === 'professional' ? 'active' : ''}`}
            onClick={() => onChange('professional')}
          >
            <span className="toggle-icon">⚡</span>
            <span className="toggle-label">Engineer Mode</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'artistic'}
            className={`toggle-btn ${mode === 'artistic' ? 'active' : ''}`}
            onClick={() => onChange('artistic')}
          >
            <span className="toggle-icon">✦</span>
            <span className="toggle-label">Artist Mode</span>
          </button>
        </div>

        <div className={`avatar-right ${mode === 'artistic' ? 'active' : ''}`}>
          <div className="avatar-character">👩‍🎨</div>
        </div>
      </div>
    </div>
  )
}
