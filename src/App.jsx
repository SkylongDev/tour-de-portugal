import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Experiences from './components/Experiences'
import RoutePlanner from './components/RoutePlanner'
import Questions from './components/Questions'
import ScrapbookMargins from './components/ScrapbookMargins'
import { Arrow } from './components/Icons'
import usePageEffects from './hooks/usePageEffects'
import './App.css'
import './Notebook.css'
import './Scrapbook.css'

function About() {
  return (
    <section
      className="about section-space container"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-copy reveal">
        <p className="section-label">About Portugal</p>
        <h2 id="about-title">
          A little about <br />
          Portugal
        </h2>
        <p className="about-intro">
          On the southwestern edge of Europe, along the Atlantic Ocean, Portugal
          brings together historic cities, vineyard-covered valleys and long
          sandy beaches.
        </p>
        <p className="about-description">
          Walk the hills and ride the trams in Lisbon. Explore the bridges and
          colourful riverside houses of Porto. Relax by the ocean in the
          Algarve, or follow mountain trails on Madeira. There are plenty of
          ways to get to know Portugal.
        </p>
        <dl className="country-facts">
          <div>
            <dt>Capital</dt>
            <dd>Lisbon</dd>
          </div>
          <div>
            <dt>Language</dt>
            <dd>Portuguese</dd>
          </div>
          <div>
            <dt>Currency</dt>
            <dd>Euro</dd>
          </div>
        </dl>
      </div>
      <div className="about-photos reveal">
        <figure className="about-main-photo">
          <img
            src="/images/lisbon.jpg"
            alt="The rooftops of old Lisbon beside the Tagus River"
            loading="lazy"
            width="600"
            height="700"
          />
          <figcaption>Lisbon</figcaption>
        </figure>
        <figure className="about-small-photo">
          <img
            src="/images/sintra.jpg"
            alt="Pena Palace in Sintra"
            loading="lazy"
            width="400"
            height="500"
          />
          <figcaption>Pena Palace, Sintra</figcaption>
        </figure>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div>
          <h2>Start with an itinerary</h2>
          <p>
            Choose your stops and leave some time for discoveries along the way.
          </p>
        </div>
        <a href="#route" className="button button-white">
          Choose an itinerary <Arrow direction="right" />
        </a>
      </div>
      <div className="footer-bottom container">
        <a href="#home" className="brand">
          PORTUGAL
        </a>
        <nav aria-label="Footer links">
          <a href="#destinations">Places to visit</a>
          <a href="#questions">Travel questions</a>
          <a
            href="https://www.visitportugal.com/en"
            target="_blank"
            rel="noreferrer"
          >
            Visit Portugal <Arrow />
          </a>
        </nav>
      </div>
      <div className="footer-credit container">
        <span>A guide to Portugal</span>
        <a href="/credits.txt" target="_blank" rel="noreferrer">
          Photos and sources
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  usePageEffects()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="scrapbook-page">
        <ScrapbookMargins />
        <Hero />
        <About />
        <Destinations />
        <Experiences />
        <RoutePlanner />
        <Questions />
      </main>
      <Footer />
    </>
  )
}
