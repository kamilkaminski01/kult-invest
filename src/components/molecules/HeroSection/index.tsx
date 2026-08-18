import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import { HERO_STATS } from 'utils/consts'
import { IStat } from './interface'
import Logo from 'assets/images/logo.svg'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__top">
        {/* The logotype is the section's signature, not a heading, so it uses the
            same file as the footer - setting it from a font reproduced neither the
            letterforms nor the spacing of the original. */}
        <div className="hero-section__logo">
          <Image src={Logo} alt="Kult Invest" className="hero-section__mark" priority />
        </div>
      </div>

      {/* The break is set by hand so the comma always ends a line - left to wrap on
          its own, "NIE" stayed up top on wide screens and the lockup read as three
          loose words. */}
      <h1 className="hero-section__title">
        <span>Flip liczony,</span>
        <span>nie obstawiany</span>
        <span className="hero-section__subtitle">Liczby zamiast przeczuć</span>
      </h1>

      <p className="hero-section__lead">
        Kupujemy mieszkania poniżej ich docelowej wartości, remontujemy i sprzedajemy w Białymstoku.
        Cenę zakupu i kosztorys zamykamy przed aktem notarialnym - możesz wejść w taki projekt razem
        z nami - model współpracy dobieramy do Twojego kapitału.
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
          <li key={stat.label} className="hero-section__stat fade">
            {/* The rendered value is the real one - the counter only animates
                towards it, so the number is correct without JavaScript. */}
            <b className="hero-section__stat-value" data-count-to={stat.value}>
              {stat.value}
            </b>
            <span className="hero-section__stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HeroSection
