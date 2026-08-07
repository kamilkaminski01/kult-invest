import './style.scss'
import Link from 'next/link'
import { HERO_STATS } from 'utils/consts'
import { IStat } from './interface'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__top">
        {/* Logotyp jest sygnatura sekcji, nie naglowkiem: kontrast niesie wylacznie
            waga kroju — "kult" grubo, "invest" cienko i na mosiadzu, bez spacji. */}
        <div className="hero-section__logo">
          <span className="hero-section__lockup">
            <b>kult</b>
            <i>invest</i>
          </span>
        </div>
      </div>

      <h1 className="hero-section__title">
        <span>Flip albo flop</span>
        <span className="hero-section__subtitle">Liczby zamiast przeczuć</span>
      </h1>

      <p className="hero-section__lead">
        Kupujemy mieszkania poniżej ich docelowej wartości, remontujemy i sprzedajemy w Białymstoku.
        Cenę zakupu i kosztorys zamykamy przed aktem notarialnym — możesz wejść w taki projekt razem
        z nami — model współpracy dobieramy do Twojego kapitału.
      </p>

      <div className="hero-section__actions">
        <Link href="#kontakt" className="hero-section__cta hero-section__cta--primary">
          <span className="hero-section__cta-long">Poproś o rozliczenie projektu</span>
          <span className="hero-section__cta-short">Poproś o rozliczenie</span>
        </Link>
        <Link href="#proces" className="hero-section__cta">
          Jak wygląda proces
        </Link>
      </div>

      <ul className="hero-section__stats">
        {HERO_STATS.map((stat: IStat) => (
          <li key={stat.label} className="hero-section__stat">
            <b className="hero-section__stat-value">{stat.value}</b>
            <span className="hero-section__stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HeroSection
