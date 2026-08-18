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
          <RevealLines lines={['Piętnaście', 'projektów,', 'dwadzieścia sześć', 'transakcji']} />
        </h2>

        <p className="projects-section__lead fade">
          Zakres jest w każdym z nich ten sam: remont kompleksowy, jedna ekipa, jeden harmonogram.
        </p>

        <ul className="projects-section__grid">
          {PROJECTS.map((project: IProject) => (
            <li key={project.id} className="project-card fade">
              <div className="project-card__media">
                <Image
                  src={project.image}
                  alt={`${project.name} - mieszkanie po remoncie`}
                  placeholder="blur"
                  sizes="(max-width: 900px) 100vw, (max-width: 1440px) 50vw, 33vw"
                  className="project-card__image"
                />
              </div>
              <h3 className="project-card__name">{project.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection
