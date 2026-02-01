import ContactForm from 'components/organisms/ContactForm'
import Link from 'next/link'
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
          <Link href="mailto:kontakt@kultinvest.pl" className="contact-section__link-card">
            <span className="contact-section__link-icon">
              <svg
                width="40"
                height="29"
                viewBox="0 0 40 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_128_640)">
                  <path
                    d="M2.29429 0.370117H37.706C38.3372 0.370117 38.9108 0.628583 39.3262 1.04363C39.7419 1.45932 40 2.03387 40 2.66441V27.0002C40 27.4758 39.8532 27.9188 39.6025 28.2864C39.5566 28.4052 39.485 28.5159 39.387 28.6099C39.3216 28.6715 39.2497 28.7219 39.1735 28.76C38.7747 29.0924 38.2624 29.2948 37.706 29.2948H2.29429C1.66375 29.2948 1.08953 29.0367 0.673508 28.621C0.258466 28.2056 0 27.6321 0 27.0002V2.66441C0 2.03257 0.257815 1.45867 0.673183 1.04363C1.08855 0.627932 1.66245 0.370117 2.29429 0.370117ZM1.75978 26.035L14.17 13.5935L1.75978 3.47496V26.035ZM15.5369 14.7078L2.74221 27.5347H37.1504L24.9231 14.7098L20.8921 18.1444C20.576 18.4145 20.1027 18.4298 19.7681 18.1583L15.5369 14.7078ZM26.2613 13.5698L38.2402 26.1343V3.36428L26.2613 13.5698ZM2.88642 2.1299L20.3088 16.3354L36.9831 2.1299H2.88642Z"
                    fill="#B29850"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_128_640">
                    <rect width="40" height="28.9244" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
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
          </Link>
          <Link href="mailto:ksiegowosc@kultinvest.pl" className="contact-section__link-card">
            <span className="contact-section__link-icon">
              <svg
                width="40"
                height="29"
                viewBox="0 0 40 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_128_640)">
                  <path
                    d="M2.29429 0.370117H37.706C38.3372 0.370117 38.9108 0.628583 39.3262 1.04363C39.7419 1.45932 40 2.03387 40 2.66441V27.0002C40 27.4758 39.8532 27.9188 39.6025 28.2864C39.5566 28.4052 39.485 28.5159 39.387 28.6099C39.3216 28.6715 39.2497 28.7219 39.1735 28.76C38.7747 29.0924 38.2624 29.2948 37.706 29.2948H2.29429C1.66375 29.2948 1.08953 29.0367 0.673508 28.621C0.258466 28.2056 0 27.6321 0 27.0002V2.66441C0 2.03257 0.257815 1.45867 0.673183 1.04363C1.08855 0.627932 1.66245 0.370117 2.29429 0.370117ZM1.75978 26.035L14.17 13.5935L1.75978 3.47496V26.035ZM15.5369 14.7078L2.74221 27.5347H37.1504L24.9231 14.7098L20.8921 18.1444C20.576 18.4145 20.1027 18.4298 19.7681 18.1583L15.5369 14.7078ZM26.2613 13.5698L38.2402 26.1343V3.36428L26.2613 13.5698ZM2.88642 2.1299L20.3088 16.3354L36.9831 2.1299H2.88642Z"
                    fill="#B29850"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_128_640">
                    <rect width="40" height="28.9244" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
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
