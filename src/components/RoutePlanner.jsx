import { useState } from 'react'
import { itineraries } from '../data'
import { Arrow } from './Icons'

const routeCovers = {
  lisbon: {
    image: '/images/lisbon.jpg',
    alt: 'Lisbon overlooking the Tagus River',
    name: 'Lisbon',
    caption: 'Start with a walk through Alfama',
  },
  porto: {
    image: '/images/porto.jpg',
    alt: 'The Ribeira waterfront in Porto',
    name: 'Porto',
    caption: 'Start along the Douro waterfront',
  },
}

export default function RoutePlanner() {
  const [duration, setDuration] = useState(7)
  const [downloadStatus, setDownloadStatus] = useState('')
  const itinerary = itineraries[duration]
  const cover = duration === 3 ? routeCovers.lisbon : routeCovers.porto

  function downloadRoute() {
    const text = [
      `Portugal — ${duration} days`,
      itinerary.title,
      '',
      ...itinerary.stops.map(
        (stop) => `${stop.days} — ${stop.name}\n${stop.text}\n`,
      ),
      itinerary.note,
      '',
      'Check transport connections and opening hours before your trip.',
      'Tourist information: https://www.visitportugal.com/en',
      'Trains: https://www.cp.pt',
    ].join('\n')
    const url = URL.createObjectURL(
      new Blob(['\uFEFF' + text], { type: 'text/plain;charset=utf-8' }),
    )
    const link = document.createElement('a')
    link.href = url
    link.download = `portugal-${duration}-days.txt`
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setDownloadStatus('Your itinerary is ready to download')
  }

  return (
    <section
      className="route section-space container"
      id="route"
      aria-labelledby="route-title"
    >
      <div className="section-heading reveal">
        <div>
          <p className="section-label">Itineraries</p>
          <h2 id="route-title">How much time do you have?</h2>
        </div>
        <p className="section-description">
          Three itineraries for an independent trip.
          <br />
          Adapt them to suit your plans.
        </p>
      </div>
      <div className="route-layout reveal">
        <div className="route-photo">
          <img
            src={cover.image}
            alt={cover.alt}
            loading="lazy"
            width="800"
            height="1000"
          />
          <div>
            <h3>{cover.name}</h3>
            <p>{cover.caption}</p>
          </div>
        </div>
        <div className="route-plan">
          <div className="route-tabs" role="group" aria-label="Trip duration">
            {[3, 7, 10].map((days) => (
              <button
                type="button"
                key={days}
                aria-pressed={duration === days}
                onClick={() => {
                  setDuration(days)
                  setDownloadStatus('')
                }}
              >
                {days} days
              </button>
            ))}
          </div>
          <div className="itinerary" key={duration} aria-live="polite">
            <h3>{itinerary.title}</h3>
            <p className="itinerary-subtitle">{itinerary.subtitle}</p>
            <ol className="route-stops">
              {itinerary.stops.map((stop) => (
                <li key={stop.days}>
                  <div className="route-stop-heading">
                    <h4>{stop.name}</h4>
                    <span>{stop.days}</span>
                  </div>
                  <p>{stop.text}</p>
                </li>
              ))}
            </ol>
            <p className="route-note">{itinerary.note}</p>
          </div>
          <button
            type="button"
            className="button button-primary download-route"
            onClick={downloadRoute}
          >
            Download itinerary <Arrow direction="down" />
          </button>
          <span className="download-status" role="status">
            {downloadStatus || 'A text file you can open on your phone'}
          </span>
        </div>
      </div>
    </section>
  )
}
