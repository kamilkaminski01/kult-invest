import './style.scss'
import Link from 'next/link'
import ContactForm from 'components/organisms/ContactForm'
import { CONTACT } from 'utils/consts'
import RevealLines from 'components/atoms/RevealLines'

const ContactSection = () => {
  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__left">
          <h2 className="contact-section__title reveal">
            <RevealLines lines={['Masz pomysł', 'na flipa?', 'Porozmawiajmy']} />
          </h2>

          <p className="contact-section__lead fade">
            Masz konkretny lokal na oku, mieszkanie do sprzedania albo kapitał, który ma pracować -
            napisz. Na pierwszym spotkaniu pokazujemy pełne zestawienie kosztów i wyniku
            zakończonego projektu, to samo, które dostaje partner po sprzedaży. Wtedy sam ocenisz,
            czy jest o czym rozmawiać. Mówimy wprost, jeśli nie widzimy sensu we współpracy.
          </p>

          <ul className="contact-section__details">
            <li>
              <Link href={`mailto:${CONTACT.email}`} className="contact-section__mail">
                {CONTACT.email}
              </Link>
            </li>
            <li>
              <address>
                {CONTACT.street}, {CONTACT.city}
              </address>
            </li>
            <li>{CONTACT.nip}</li>
          </ul>
        </div>

        <div className="contact-section__right">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
