import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'assets/images/logo.svg'
import { HERO_STATS } from 'utils/consts'
import { IStat } from './interface'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__inner">
        <div className="hero-section__signature">
          <Image src={Logo} alt="Kult Invest" priority className="hero-section__logo" />
        </div>

        <h1 className="hero-section__title">
          <span>Flip albo flop</span>
          <span className="hero-section__subtitle">Liczby zamiast przeczuć</span>
        </h1>

        <p className="hero-section__lead">
          Kupujemy mieszkania poniżej ich docelowej wartości, remontujemy i sprzedajemy w
          Białymstoku. Cenę zakupu i kosztorys zamykamy przed aktem notarialnym — możesz wejść w
          taki projekt razem z nami, model współpracy dobieramy do Twojego kapitału.
        </p>

        <div className="hero-section__actions">
          <Link href="#kontakt" className="hero-section__cta hero-section__cta--primary">
            Poproś o rozliczenie projektu
          </Link>
          <Link href="#proces" className="hero-section__cta">
            Jak wygląda proces
          </Link>
        </div>

        <ul className="hero-section__stats">
          {HERO_STATS.map((stat: IStat) => (
            <li key={stat.label} className="hero-section__stat">
              <span className="hero-section__stat-value">{stat.value}</span>
              <span className="hero-section__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HeroSection
