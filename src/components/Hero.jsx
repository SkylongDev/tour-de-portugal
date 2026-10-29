import { useState } from 'react'
import { heroSlides } from '../data'
import { Arrow } from './Icons'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slide = heroSlides[currentSlide]

  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="handwritten hero-note">Ideas for your next trip</p>
        <h1 id="hero-title">
          Discover
          <br />
          <span className="ink-underline">
            Portugal
            <svg
              viewBox="0 0 500 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M4 15C100 5 220 21 495 6M18 21C150 12 320 20 477 13" />
            </svg>
          </span>
        </h1>
        <p className="hero-description">
          Historic cities, Atlantic beaches and mountain trails. A collection of
          places to help you plan your trip.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#destinations">
            Places to visit <Arrow direction="right" />
          </a>
          <a className="hero-route-link" href="#route">
            Explore itineraries <Arrow />
          </a>
        </div>
        <div className="hero-margin-note">
          <svg viewBox="0 0 75 55" fill="none" aria-hidden="true">
            <path d="M70 6C27 0 15 14 24 29c12 17 27-7 8-13C13 10 8 30 10 48m-6-8 6 9 9-6" />
          </svg>
          <p className="handwritten">
            Start with Lisbon,
            <br />
            Sintra and Porto
          </p>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-picture paper-photo">
          <span className="photo-tape" aria-hidden="true" />
          <div className="hero-photo-area">
            {heroSlides.map((item, index) => (
              <img
                key={item.image}
                src={item.image}
                alt={index === currentSlide ? item.alt : ''}
                aria-hidden={index !== currentSlide}
                className={`hero-image ${index === currentSlide ? 'is-active' : ''}`}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            ))}
          </div>
          <div className="hero-photo-caption">
            <span className="handwritten" aria-live="polite">
              {slide.location}
            </span>
            <span>{slide.caption}</span>
          </div>
        </div>
        <div
          className="hero-thumbnails"
          role="group"
          aria-label="Choose a photo"
        >
          {heroSlides.map((item, index) => (
            <button
              type="button"
              key={item.image}
              className={index === currentSlide ? 'is-active' : ''}
              aria-label={`Show: ${item.location}`}
              aria-pressed={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            >
              <img src={item.image} alt="" />
              <span>{item.location}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
