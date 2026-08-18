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

      {/* The section is about the split of labour, so the first thing on a plate is
          the stage, not the face. The portrait is reduced to a thumbnail: at that
          scale it does not show that the two photos come from different shoots.

          The grid animates in, not the individual plates: the divider between them
          is the grid's background showing through a 1 px gap, so if the plates were
          transparent on their own the whole plane would glow before the animation
          ran. */}
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
