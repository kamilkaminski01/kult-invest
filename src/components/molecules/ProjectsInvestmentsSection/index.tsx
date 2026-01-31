import './style.scss'
import { ProjectImage } from './interface'
import { SWIPER_IMAGES_BOTTOM, SWIPER_IMAGES_TOP } from './../../../utils/consts'

const ProjectsInvestmentsSection = () => {
  const renderRow = (images: ProjectImage[]) => (
    <div className="swiper-track">
      {[...images, ...images].map((image, index) => (
        <div key={`${image.id}-${index}`} className="swiper-item">
          <img src={image.src} alt={image.alt || 'Project image'} />
        </div>
      ))}
    </div>
  )

  return (
    <section id="projects-investments-section" className="projects-investments-section">
      <div className="projects-investments-section__header">
        <h2 className="header__title">Projekty i inwestycje</h2>
      </div>

      <div className="projects-investments__swiper projects-investments__swiper-top">
        {renderRow(SWIPER_IMAGES_TOP)}
      </div>

      <div className="projects-investments__swiper projects-investments__swiper-bottom">
        {renderRow(SWIPER_IMAGES_BOTTOM)}
      </div>
    </section>
  )
}

export default ProjectsInvestmentsSection
