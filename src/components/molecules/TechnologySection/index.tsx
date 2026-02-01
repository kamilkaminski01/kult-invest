import './style.scss'
import Image from 'next/image'
import KultTechnologyImage from 'assets/images/kulttechnology.svg'
import LaptopImage from 'assets/images/laptop.png'

const TechnologySection = () => {
  return (
    <section id="technology-section" className="technology-section">
      <div className="technology-section__left-col">
        <div className="left-col__header">
          <h3 className="header__subtitle">po drugie</h3>
          <h2 className="header__title">Technologia i automatyzacja</h2>
        </div>
        <Image className="left-col__header--img" src={KultTechnologyImage} alt="Kult Technology" />
      </div>
      <div className="technology-section__center-col">
        <p className="center-col__header">
          Projektujemy i wdrażamy aplikacje webowe oraz mobilne, a także nowoczesne wtyczki
          i rozwiązania integracyjne. Naszym celem jest uproszczenie codziennych procesów
          biznesowych i zwiększenie ich efektywności.
        </p>
        <p className="center-col__body">
          Tworzymy systemy dopasowane do realnych potrzeb, automatyzując zadania i łącząc narzędzia
          w spójny ekosystem. Dzięki temu wspieramy rozwój firm i umożliwiamy im lepsze
          wykorzystanie technologii.
        </p>
      </div>
      <div className="technology-section__right-col">
        <Image className="right-col__header--img" src={LaptopImage} alt="Laptop" />
      </div>
    </section>
  )
}

export default TechnologySection
