import { useState } from 'react'
import type { Artwork } from '../data/profile'

const REACTIONS = [
  { id: 'interesting', emoji: '🤔', label: 'Interesting' },
  { id: 'loved', emoji: '❤️', label: 'Loved it' },
  { id: 'amazing', emoji: '⭐', label: 'Amazing' },
  { id: 'inspiring', emoji: '✨', label: 'Inspiring' },
] as const

type ReactionId = typeof REACTIONS[number]['id']

interface ArtGalleryProps {
  artworks: Artwork[]
}

export function ArtGallery({ artworks }: ArtGalleryProps) {
  const [reactions, setReactions] = useState<Record<string, ReactionId | null>>({})

  const handleReaction = (artId: string, reactionId: ReactionId) => {
    setReactions((prev) => ({
      ...prev,
      [artId]: prev[artId] === reactionId ? null : reactionId,
    }))
  }

  return (
    <div className="art-gallery">
      {artworks.map((art, index) => (
        <article
          key={art.id}
          className="art-card animate-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="art-image-wrap">
            <img
              src={art.image}
              alt={art.title}
              className="art-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/art/placeholder.svg'
              }}
            />
            <span className="art-medium-badge">{art.medium}</span>
          </div>
          <div className="art-card-body">
            <h3>{art.title}</h3>
            <div className="art-reactions" role="group" aria-label={`React to ${art.title}`}>
              {REACTIONS.map((reaction) => (
                <button
                  key={reaction.id}
                  type="button"
                  className={`reaction-btn ${reactions[art.id] === reaction.id ? 'active' : ''}`}
                  onClick={() => handleReaction(art.id, reaction.id)}
                  aria-pressed={reactions[art.id] === reaction.id}
                  aria-label={reaction.label}
                >
                  <span className="reaction-emoji">{reaction.emoji}</span>
                  <span className="reaction-label">{reaction.label}</span>
                </button>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
