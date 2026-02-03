import './style.scss'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__header">
        <h2 className="header__subtitle">Nowoczesne</h2>
        <h1 className="header__title">inwestycje i technologie</h1>
      </div>
      <div className="hero-section__body">
        <p className="body__upper">
          Tworzymy innowacyjne rozwiązania, które łączą świat nieruchomości z technologią. Nasze
          projekty są przemyślane, efektywne i nastawione na realny zysk.
        </p>
        <p className="body__lower">
          Łączymy doświadczenie w flipach mieszkaniowych z tworzeniem aplikacji webowych, mobilnych,
          automatyzacją procesów oraz integracją narzędzi, aby każda inwestycja i projekt
          technologiczny były wyjątkowe i skuteczne.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
