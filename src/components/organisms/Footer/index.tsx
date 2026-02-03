import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from 'utils/consts'
import Logo from 'assets/images/logo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand-wrapper">
          <Link href={PATHS.home}>
            <Image src={Logo} alt="Logo" className="footer__logo" />
          </Link>
          <div className="footer__line" />
        </div>

        <ul className="footer__nav">
          <li>
            <Link href="#invest">Invest</Link>
          </li>
          <li>
            <Link href="#technology">Technology</Link>
          </li>
          <li>
            <Link href="#about">O nas</Link>
          </li>
          <li>
            <Link href="#contact" className="footer__btn">
              Skontaktuj się
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">Copyright {currentYear} © Kult Invest</p>
        <div className="footer__credits">
          Wykonali
          <span>
            <Link href="https://www.mgodlewskidev.pl" target="_blank" rel="noopener noreferrer">
              Marcin Godlewski
            </Link>
          </span>
          &
          <span>
            <Link href="https://kamilkaminski.pl" target="_blank" rel="noopener noreferrer">
              Kamil Kamiński
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
