import { useState } from 'react'
import { experiences } from '../data'
import { Arrow } from './Icons'

export default function Experiences() {
  const [activeExperience, setActiveExperience] = useState(0)
  const experience = experiences[activeExperience]

  return (
    <section
      className="experiences section-space"
      id="experiences"
      aria-labelledby="experiences-title"
    >
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="section-label">Things to do</p>
            <h2 id="experiences-title">What to see and try</h2>
          </div>
          <p className="section-description">
            Local food, architecture and walks.
            <br />
            Choose what interests you.
          </p>
        </div>
        <div
          className="experience-tabs"
          role="group"
          aria-label="Choose an activity"
        >
          {experiences.map((item, index) => (
            <button
              type="button"
              key={item.title}
              aria-pressed={activeExperience === index}
              onClick={() => setActiveExperience(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="experience-panel reveal">
          <div className="experience-photo">
            <img
              key={experience.image}
              src={experience.image}
              alt={experience.alt}
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="experience-copy" aria-live="polite">
            <p className="section-label">{experience.caption}</p>
            <h3>{experience.subtitle}</h3>
            <p>{experience.text}</p>
            <a className="text-link" href="#destinations">
              Explore destinations <Arrow direction="right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
