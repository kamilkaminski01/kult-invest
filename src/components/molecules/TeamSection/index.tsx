import './style.scss'
import Image from 'next/image'
import PortraitPlaceholder from 'assets/images/portrait-placeholder.svg'
import { TEAM } from 'utils/consts'
import { IPerson } from './interface'

const TeamSection = () => {
  return (
    <section id="zespol" className="team-section">
      <h2 className="team-section__title">
        Dwie osoby,
        <br />
        jedna odpowiedzialność
      </h2>

      {TEAM.map((person: IPerson) => (
        <div key={person.name} className="team-section__person">
          {/* ZASLEPKA: czeka na portret 4:5. Podmiana to zamiana src na statyczny
              import zdjecia i usuniecie figcaption — reszta karty zostaje. */}
          <figure className="team-section__figure">
            <Image
              src={PortraitPlaceholder}
              alt={person.photoAlt}
              className="team-section__photo"
            />
            <figcaption className="team-section__caption">
              [ZDJĘCIE: portret założyciela, 4:5]
            </figcaption>
          </figure>
          <h3 className="team-section__name">{person.name}</h3>
          {person.bio && <p className="team-section__bio">{person.bio}</p>}
        </div>
      ))}
    </section>
  )
}

export default TeamSection
