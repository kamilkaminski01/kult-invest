import './style.scss'
import Image from 'next/image'
import DominikKamilImage from 'assets/images/dominik-kamil.webp'

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__left-col">
        <Image src={DominikKamilImage} alt="Dominik Torebko, Kamil Kamiński" />
      </div>
      <div className="about-section__right-col">
        <h2 className="header__title">Kim jesteśmy?</h2>
        <p className="header__subtitle ">
          Kult to zespół praktyków inwestowania i inżynierów technologii w jednym. Tworzymy
          projekty, które łączą stabilność rynku nieruchomości z innowacyjnymi rozwiązaniami
          cyfrowymi, jednocześnie rozumiejąc realne procesy biznesowe. Dzięki temu nasze działania
          przynoszą wymierne efekty i realną wartość dla inwestorów i klientów.
        </p>
        <p className="header__desc">
          Za marką stoją Kamil i Dominik – duet, którego kompetencje wzajemnie się uzupełniają.
          Kamil jest programistą z wieloletnim doświadczeniem zdobytym w największych firmach w
          Polsce i Europie. Dzięki swojej wiedzy i praktyce potrafi projektować, wdrażać i zarządzać
          tworzeniem oprogramowania na najwyższym poziomie. Dominik to przedsiębiorca, fliper i
          deweloper, który zrealizował ponad 150 transakcji na rynku nieruchomości, prowadząc
          również inwestycje deweloperskie obejmujące kilkadziesiąt mieszkań. Jego osiągnięcia
          zostały wielokrotnie docenione nagrodami i wyróżnieniami branżowymi.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
