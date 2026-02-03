import './style.scss'
import Image from 'next/image'
import KultInvestImage from 'assets/images/kultinvest.svg'
import StaircaseImage from 'assets/images/staircase.png'
import Link from 'next/link'
import { PATHS } from 'utils/consts'

const InvestSection = () => {
  return (
    <section id="invest" className="invest-section">
      <div className="invest-section__left-col">
        <div className="left-col__header">
          <h3 className="header__subtitle">po pierwsze</h3>
          <Link href={PATHS.home}>
            <h2 className="header__title">Nieruchomości i inwestycje</h2>
          </Link>
        </div>
        <Link href={PATHS.home}>
          <Image className="left-col__header--img" src={KultInvestImage} alt="Kult Invest" />
        </Link>
      </div>
      <div className="invest-section__center-col">
        <p className="center-col__header">
          Inwestujemy w mieszkania z potencjałem, które dzięki doświadczeniu zyskują nową jakość
          i wartość rynkową. Naszą specjalnością są szybkie i przemyślane flipy, prowadzone z
          dbałością o każdy szczegół.
        </p>
        <p className="center-col__body">
          Kupujemy, remontujemy i sprzedajemy nieruchomości, łącząc doświadczenie z nowoczesnym
          podejściem do rynku. Dzięki temu tworzymy przestrzenie, które inspirują i zapewniają
          atrakcyjny zwrot z inwestycji.
        </p>
      </div>
      <div className="invest-section__right-col">
        <Image className="right-col__header--img" src={StaircaseImage} alt="Staircase" />
      </div>
    </section>
  )
}

export default InvestSection
