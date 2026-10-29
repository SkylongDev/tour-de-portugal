import { useEffect, useRef, useState } from 'react'
import { destinations } from '../data'
import { Arrow, Pin } from './Icons'

const filters = [
  { id: 'all', label: 'All places' },
  { id: 'cities', label: 'Cities' },
  { id: 'ocean', label: 'Coast' },
  { id: 'nature', label: 'Nature' },
]

function DestinationDialog({ destination, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="destination-dialog"
      aria-labelledby="destination-dialog-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="dialog-layout">
        <div className="dialog-image">
          <img src={destination.image} alt={destination.alt} />
        </div>
        <div className="dialog-content">
          <button
            className="dialog-close"
            type="button"
            aria-label="Close details"
            onClick={onClose}
          >
            ×
          </button>
          <p className="eyebrow">{destination.tag}</p>
          <h2 id="destination-dialog-title">{destination.name}</h2>
          <p>{destination.story}</p>
          <h3>Things to do here</h3>
          <ul>
            {destination.highlights.map((item) => (
              <li key={item}>
                <Arrow />
                {item}
              </li>
            ))}
          </ul>
          <a
            className="text-link"
            href={destination.source}
            target="_blank"
            rel="noreferrer"
          >
            Read more on Visit Portugal <Arrow />
          </a>
        </div>
      </div>
    </dialog>
  )
}

export default function Destinations() {
  const [filter, setFilter] = useState('all')
  const [selectedDestination, setSelectedDestination] = useState(null)
  const visibleDestinations = destinations.filter(
    (item) => filter === 'all' || item.category === filter,
  )

  return (
    <section
      className="destinations section-space container"
      id="destinations"
      aria-labelledby="destinations-title"
    >
      <div className="section-heading reveal">
        <div>
          <p className="section-label">Destinations</p>
          <h2 id="destinations-title">Places to visit</h2>
        </div>
        <p className="section-description">
          Cities, coastlines and islands.
          <br />
          Find out what makes each place different.
        </p>
      </div>
      <div className="destination-toolbar">
        <div
          className="filter-list"
          role="group"
          aria-label="Filter destinations"
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`filter-button ${filter === item.id ? 'is-active' : ''}`}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="destination-count" role="status">
          {visibleDestinations.length} / {destinations.length} places
        </span>
      </div>
      <div className="destination-grid">
        {visibleDestinations.map((destination) => (
          <button
            className="destination-card"
            key={destination.id}
            type="button"
            onClick={() => setSelectedDestination(destination)}
            aria-label={`Explore: ${destination.name}`}
          >
            <div className="destination-photo">
              <img
                src={destination.image}
                alt={destination.alt}
                loading="lazy"
                width="640"
                height="760"
              />
              <span className="destination-tag">
                <Pin />
                {destination.tag}
              </span>
            </div>
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <Arrow />
              <p>{destination.description}</p>
            </div>
          </button>
        ))}
      </div>
      {selectedDestination && (
        <DestinationDialog
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </section>
  )
}
