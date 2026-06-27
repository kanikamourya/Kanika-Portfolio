import { useState } from 'react'

const PROFESSIONAL_PHOTO = '/kanika-speaking.jpg'
const ARTISTIC_PHOTO = '/kanika-photo.png'
const FALLBACK_SVG = '/kanika-photo.svg'

interface ProfilePhotoProps {
  variant?: 'professional' | 'artistic'
  size?: 'large' | 'medium'
}

export function ProfilePhoto({ variant = 'professional', size = 'large' }: ProfilePhotoProps) {
  const initialSrc = variant === 'professional' ? PROFESSIONAL_PHOTO : ARTISTIC_PHOTO
  const [src, setSrc] = useState(initialSrc)

  return (
    <div className={`profile-photo-wrap ${variant} ${size} animate-photo`}>
      <div className="profile-photo-ring" aria-hidden="true" />
      <div className="profile-photo-glow" aria-hidden="true" />
      <img
        src={src}
        alt="Kanika Mourya"
        className="profile-photo"
        onError={() => setSrc(FALLBACK_SVG)}
      />
    </div>
  )
}
