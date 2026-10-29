function OliveSketch() {
  return (
    <svg viewBox="0 0 150 230" fill="none">
      <path d="M42 218C54 171 65 118 107 20M58 163 23 130M70 128l48-20M83 95 57 67M95 63l37-26" />
      <path d="M23 130C2 122 4 100 8 95c16 2 29 22 15 35ZM39 178c-27-2-31-24-29-29 20-4 32 13 29 29ZM57 165c12-22 32-23 38-20-3 20-20 30-38 20ZM70 128c-24-1-31-20-29-27 17-3 32 9 29 27ZM83 95c10-25 28-29 35-27 2 19-14 31-35 27ZM95 63c-23 0-29-15-29-22 17-5 29 5 29 22ZM107 20c3-18 14-20 19-19 0 16-7 25-19 19Z" />
      <ellipse
        cx="119"
        cy="112"
        rx="7"
        ry="10"
        transform="rotate(29 119 112)"
      />
      <ellipse cx="29" cy="137" rx="6" ry="9" transform="rotate(-31 29 137)" />
      <path className="sketch-echo" d="M45 217C63 148 72 90 109 23" />
    </svg>
  )
}

function TileSketch() {
  return (
    <svg viewBox="0 0 160 160" fill="none">
      <path d="m12 15 133-3 4 134-135 3ZM20 23l117-2 3 117-118 2Z" />
      <path d="M80 80C40 70 43 24 79 43c36-23 42 25 1 37ZM80 80c10-40 56-37 37-1 23 36-25 42-37 1ZM80 80c40 10 37 56 1 37-36 23-42-25-1-37ZM80 80c-10 40-56 37-37 1-23-36 25-42 37-1Z" />
      <path d="m31 34 14 1-13 13ZM125 32l-1 15-14-14ZM128 126l-15-1 14-14ZM34 129l1-15 14 13Z" />
      <circle cx="80" cy="80" r="8" />
      <path className="sketch-echo" d="m15 12 132 4-1 132" />
    </svg>
  )
}

function TramSketch() {
  return (
    <svg viewBox="0 0 170 180" fill="none">
      <path d="m52 42 63 1 11 16 2 82-87-1 1-80ZM47 62l75 1M42 112l85 1M48 132l71 1M53 49l61 1M58 43 76 9l27 34M71 19l30 1M31 154l109 2M37 165l98 2" />
      <path d="m52 72 25 1 1 30-26-1ZM86 73l27 1 1 29-27-1Z" />
      <circle cx="56" cy="122" r="5" />
      <circle cx="113" cy="123" r="5" />
      <path d="m51 142 2 9 14 1 2-10m31 0 2 11 14-1 1-10M34 91l8 2m85 0 8-2" />
      <path className="sketch-echo" d="m46 59-1 82 79 2" />
    </svg>
  )
}

function SardineSketch() {
  return (
    <svg viewBox="0 0 210 110" fill="none">
      <path d="M18 55C64 5 131 9 165 47l29-26-3 64-27-25C120 105 57 99 18 55Z" />
      <path d="M49 31c-14 18-12 35 2 49M75 22l19-14 21 13M78 86l24 15 20-19M22 56l10 1M165 47l-1 13M63 48l7 6-7 7m20-19 8 9-7 9m22-20 9 9-7 9m24-14 8 9-8 9" />
      <circle cx="35" cy="48" r="3" />
      <path className="sketch-echo" d="M21 58c47 44 106 34 140 0" />
    </svg>
  )
}

function PastrySketch() {
  return (
    <svg viewBox="0 0 170 150" fill="none">
      <ellipse cx="79" cy="113" rx="65" ry="20" />
      <path d="m37 70 11 36c13 17 55 17 67-1l11-36M45 78l9 25m6-21 6 28m12-26 1 29m16-29-5 28m20-33-7 27" />
      <path d="M37 70c-8-17 3-31 18-31 7-17 27-17 36-9 17-10 34 3 34 16 13 9 13 25 1 30-22 18-68 19-89-6Z" />
      <ellipse cx="81" cy="59" rx="34" ry="20" />
      <path d="m64 52 8-4m14-5 8 5m-32 15 9 3m19-8 7-3m-17 16 8-2M139 41c-12-10 11-15 0-28M153 49c-12-12 10-16 0-29" />
      <path className="sketch-echo" d="M25 117c23 22 91 24 119-2" />
    </svg>
  )
}

function RouteSketch() {
  return (
    <svg viewBox="0 0 150 180" fill="none">
      <path
        d="M46 142c76-5-12-55 37-68 39-10 27-40 3-44M92 23l-9 7 6 10"
        strokeDasharray="5 6"
      />
      <circle cx="46" cy="143" r="5" />
      <circle cx="84" cy="29" r="4" />
      <text x="8" y="171">
        Lisbon
      </text>
      <text x="11" y="19">
        Porto
      </text>
    </svg>
  )
}

export default function ScrapbookMargins() {
  return (
    <div className="scrapbook-margins" aria-hidden="true">
      <figure className="margin-piece margin-left margin-tile">
        <div className="margin-tile-paper">
          <TileSketch />
        </div>
        <figcaption>azulejos</figcaption>
      </figure>
      <div className="margin-piece margin-right margin-olive">
        <OliveSketch />
      </div>
      <div className="margin-piece margin-left margin-note margin-note-sintra">
        <p>
          Sintra:
          <br />
          <span>
            palaces
            <br />& parks
          </span>
        </p>
      </div>
      <figure className="margin-piece margin-right margin-tram">
        <TramSketch />
        <figcaption>Lisbon</figcaption>
      </figure>
      <figure className="margin-piece margin-left margin-postcard">
        <img src="/images/porto.jpg" alt="" loading="lazy" />
        <figcaption>Porto</figcaption>
      </figure>
      <figure className="margin-piece margin-right margin-sardine">
        <SardineSketch />
        <figcaption>grilled sardines</figcaption>
      </figure>
      <div className="margin-piece margin-left margin-second-olive">
        <OliveSketch />
      </div>
      <figure className="margin-piece margin-left margin-pastry">
        <PastrySketch />
        <figcaption>pastel de nata</figcaption>
      </figure>
      <div className="margin-piece margin-right margin-note margin-note-coffee">
        <p>
          Coffee +<br />
          <span>
            one more
            <br />
            pastel
          </span>
        </p>
      </div>
      <div className="margin-piece margin-right margin-route">
        <RouteSketch />
      </div>
      <figure className="margin-piece margin-left margin-bottom-tile">
        <TileSketch />
      </figure>
    </div>
  )
}
