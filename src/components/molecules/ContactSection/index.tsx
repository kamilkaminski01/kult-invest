import ContactForm from 'components/organisms/ContactForm'
import './style.scss'

const ContactSection = () => {
  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-section__left">
        <h2 className="contact-section__title">
          Chcesz uwolnić swój czas, przyspieszyć rozwój firmy lub zainwestować z nami?
        </h2>
        <p className="contact-section__subtitle">Napisz do nas wiadomość. Porozmawiajmy!</p>

        <div className="contact-section__company-info">
          <p className="contact-section__company-name">KULT SPÓŁKA Z O. O.</p>
          <p>ul. Kraszewskiego 30/23</p>
          <p>15-025 Białystok</p>
          <p>NIP: 966 220 34 74</p>
        </div>

        <div className="contact-section__links">
          <a href="mailto:kontakt@kultinvest.pl" className="contact-section__link-card">
            <span className="contact-section__link-icon">✉</span>
            <span className="contact-section__link-text">kontakt@kultinvest.pl</span>
            <span className="contact-section__link-arrow">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.586 9.707H0V7.707H14.586L8.293 1.414L9.707 0L18.414 8.707L9.707 17.414L8.293 16L14.586 9.707Z"
                  fill="#B29850"
                />
              </svg>
            </span>
          </a>
          <a href="mailto:ksiegowosc@kultinvest.pl" className="contact-section__link-card">
            <span className="contact-section__link-icon">✉</span>
            <span className="contact-section__link-text">ksiegowosc@kultinvest.pl</span>
            <span className="contact-section__link-arrow">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.586 9.707H0V7.707H14.586L8.293 1.414L9.707 0L18.414 8.707L9.707 17.414L8.293 16L14.586 9.707Z"
                  fill="#B29850"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="contact-section__right">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
