import ContactForm from 'components/organisms/ContactForm'
import Link from 'next/link'
import Image from 'next/image'
import './style.scss'
import EmailIcon from 'assets/icons/email-icon.svg'
import ArrowRightIcon from 'assets/icons/arrow-right-icon.svg'

const ContactSection = () => {
  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-section__left">
        <h2 className="contact-section__title">
          Chcesz uwolnić swój czas, przyspieszyć rozwój firmy lub zainwestować z nami?
        </h2>
        <p className="contact-section__subtitle">Napisz do nas wiadomość. Porozmawiajmy!</p>

        <div className="contact-section__company-info">
          <p className="contact-section__company-name">Kult spółka z o.o.</p>
          <p>ul. Kraszewskiego 30/23</p>
          <p>15-025 Białystok</p>
          <p>NIP: 966 220 34 74</p>
        </div>

        <div className="contact-section__links">
          <Link href="mailto:kontakt@kultinvest.pl" className="contact-section__link-card">
            <span className="contact-section__link-icon">
              <Image src={EmailIcon} alt="email" />
            </span>
            <span className="contact-section__link-text">kontakt@kultinvest.pl</span>
            <span className="contact-section__link-arrow">
              <Image src={ArrowRightIcon} alt="arrow" />
            </span>
          </Link>
        </div>
      </div>

      <div className="contact-section__right">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
