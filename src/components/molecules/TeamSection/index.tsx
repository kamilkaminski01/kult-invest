import './style.scss'
import Image from 'next/image'
import { TEAM } from 'utils/consts'
import { IPerson } from './interface'
import RevealLines from 'components/atoms/RevealLines'

const TeamSection = () => {
  return (
    <section id="zespol" className="team-section">
      <h2 className="team-section__title reveal">
        <RevealLines lines={['Dwie osoby,', 'jedna odpowiedzialność']} />
      </h2>

      {/* Sekcja mowi o podziale pracy, wiec pierwsza rzecza w plycie jest etap,
          a nie twarz. Portret zostaje miniatura przy nazwisku: przy tej skali
          nie widac, ze oba zdjecia pochodza z innej sesji.

          Wejscie animuje siatka, nie pojedyncze plyty: kreska miedzy plytami to
          tlo siatki widoczne przez 1 px odstepu, wiec gdyby plyty byly
          przezroczyste osobno, przed animacja swiecilaby cala plaszczyzna. */}
      <div className="team-section__grid fade">
        {TEAM.map((person: IPerson) => (
          <article key={person.name} className="team-section__person">
            <p className="team-section__role">{person.role}</p>
            <div className="team-section__head">
              <figure className="team-section__figure">
                <Image
                  src={person.photo}
                  alt={person.photoAlt}
                  className="team-section__photo"
                  sizes="112px"
                />
              </figure>
              <h3 className="team-section__name">{person.name}</h3>
            </div>
            {person.bio && <p className="team-section__bio">{person.bio}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
