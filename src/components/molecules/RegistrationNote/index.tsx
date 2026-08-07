import './style.scss'
import RevealLines from 'components/atoms/RevealLines'

const RegistrationNote = () => {
  return (
    <section className="registration-note">
      <div className="registration-note__inner">
        <h2 className="registration-note__title reveal">
          <RevealLines lines={['2025 to data rejestracji,', 'nie początek']} />
        </h2>
        <p className="registration-note__text fade">
          Kult powstał w 2025 roku i to jest jedyna młoda rzecz w tej firmie. Dominik Torebko,
          współzałożyciel, przeprowadził ponad 150 transakcji na rynku nieruchomości i prowadził
          inwestycje deweloperskie obejmujące kilkadziesiąt mieszkań. Wszystko to przed założeniem
          spółki.{' '}
          <span>
            Jedenaście projektów Kult to nie jest pierwsze jedenaście projektów w życiu tych ludzi.
          </span>
        </p>
      </div>
    </section>
  )
}

export default RegistrationNote
