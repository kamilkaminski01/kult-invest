import './style.scss'
import Image from 'next/image'
import { PROJECTS } from 'utils/consts'
import { IProject } from './interface'
import RevealLines from 'components/atoms/RevealLines'

const ProjectsSection = () => {
  return (
    <section id="projekty" className="projects-section">
      <div className="projects-section__inner">
        <h2 className="projects-section__title reveal">
          <RevealLines lines={['Jedenaście', 'projektów,', 'dwadzieścia jeden', 'transakcji']} />
        </h2>

        <ul className="projects-section__grid">
          {PROJECTS.map((project: IProject) => (
            <li key={project.id} className="project-card fade">
              <div className="project-card__media">
                <Image
                  src={project.image}
                  alt={`${project.name} — mieszkanie po remoncie`}
                  placeholder="blur"
                  sizes="(max-width: 900px) 100vw, (max-width: 1440px) 50vw, 33vw"
                  className="project-card__image"
                />
              </div>
              <h3 className="project-card__name">{project.name}</h3>
              <dl className="project-card__meta">
                <dt>Zakres prac</dt>
                <dd>{project.scope}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection
