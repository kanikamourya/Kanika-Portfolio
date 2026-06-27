import type { ProfileMode } from '../data/profile'

interface ProfileToggleProps {
  mode: ProfileMode
  onChange: (mode: ProfileMode) => void
}

export function ProfileToggle({ mode, onChange }: ProfileToggleProps) {
  return (
    <div className="profile-toggle" role="tablist" aria-label="Profile mode">
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'professional'}
        className={`toggle-btn ${mode === 'professional' ? 'active' : ''}`}
        onClick={() => onChange('professional')}
      >
        <span className="toggle-icon">⚡</span>
        <span className="toggle-label">Professional</span>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'artistic'}
        className={`toggle-btn ${mode === 'artistic' ? 'active' : ''}`}
        onClick={() => onChange('artistic')}
      >
        <span className="toggle-icon">✦</span>
        <span className="toggle-label">Artistic</span>
      </button>
    </div>
  )
}
