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
            <Link href="#invest-section">Invest</Link>
          </li>
          <li>
            <Link href="#technology-section">Technology</Link>
          </li>
          <li>
            <Link href="#whoweare-section">O nas</Link>
          </li>
          <li>
            <Link href="#contact-section" className="footer__btn">
              Skontaktuj się
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        {/* Updated year to be dynamic */}
        <p className="footer__copyright">Copyright {currentYear} © kultinvest.pl</p>

        <div className="footer__credits">
          <p>
            Projekt: <span>Damian Kiliszek</span>
          </p>
          <p>
            Wykonanie:{' '}
            <span>
              <Link href="https://www.mgodlewskidev.pl" target="_blank" rel="noopener noreferrer">
                Marcin Godlewski
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
