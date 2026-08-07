import './style.scss'
import Image from 'next/image'
import Founders from 'assets/images/dominik-kamil.webp'

const TeamSection = () => {
  return (
    <section id="zespol" className="team-section">
      <div className="team-section__inner">
        <h2 className="team-section__title">
          Dwie osoby,
          <br />
          jedna odpowiedzialność
        </h2>

        <figure className="team-section__figure">
          <Image
            src={Founders}
            alt="Dominik Torebko i Kamil Kamiński, współzałożyciele Kult"
            placeholder="blur"
            sizes="(max-width: 900px) 100vw, 50vw"
            className="team-section__photo"
          />
        </figure>

        <div className="team-section__people">
          <article className="team-section__person">
            <h3 className="team-section__name">Dominik Torebko</h3>
            <p className="team-section__bio">
              Ponad 150 przeprowadzonych transakcji na rynku nieruchomości. Inwestycje deweloperskie
              obejmujące kilkadziesiąt mieszkań. W Kult odpowiada za wybór lokali, wycenę,
              negocjacje i relacje z partnerami — czyli za wszystkie decyzje podejmowane przed
              zakupem.
            </p>
          </article>
          <article className="team-section__person">
            <h3 className="team-section__name">Kamil Kamiński</h3>
          </article>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
