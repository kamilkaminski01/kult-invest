import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS, NAV_LINKS, CONTACT } from 'utils/consts'
import Logo from 'assets/images/logo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand-wrapper">
            <Link href={PATHS.home}>
              <Image src={Logo} alt="Kult Invest" className="footer__logo" />
            </Link>
            <div className="footer__line" />
          </div>

          <ul className="footer__nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="#kontakt" className="footer__btn">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright {currentYear} © {CONTACT.company}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
