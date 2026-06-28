import { useState } from 'react'
import type { Artwork } from '../data/profile'

const REACTIONS = [
  { id: 'interesting', emoji: '🤩', label: 'Interesting' },
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
  const [reactionCounts, setReactionCounts] = useState<Record<string, Record<ReactionId, number>>>({})

  const handleReaction = (artId: string, reactionId: ReactionId) => {
    const wasActive = reactions[artId] === reactionId
    
    setReactions((prev) => ({
      ...prev,
      [artId]: wasActive ? null : reactionId,
    }))

    setReactionCounts((prev) => {
      const artReactions = prev[artId] || {}
      const currentCount = artReactions[reactionId] || 0
      
      return {
        ...prev,
        [artId]: {
          ...artReactions,
          [reactionId]: wasActive ? Math.max(0, currentCount - 1) : currentCount + 1,
        },
      }
    })
  }

  const getReactionCount = (artId: string, reactionId: ReactionId): number => {
    return reactionCounts[artId]?.[reactionId] || 0
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
          </div>
          <div className="art-card-body">
            <div className="art-reactions" role="group" aria-label={`React to ${art.title}`}>
              {REACTIONS.map((reaction) => {
                const count = getReactionCount(art.id, reaction.id)
                return (
                  <button
                    key={reaction.id}
                    type="button"
                    className={`reaction-btn ${reactions[art.id] === reaction.id ? 'active' : ''}`}
                    onClick={() => handleReaction(art.id, reaction.id)}
                    aria-pressed={reactions[art.id] === reaction.id}
                    aria-label={`${reaction.label} (${count})`}
                  >
                    <span className="reaction-emoji">{reaction.emoji}</span>
                    <span className="reaction-label">{reaction.label}</span>
                    {count > 0 && <span className="reaction-count">{count}</span>}
                  </button>
                )
              })}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
