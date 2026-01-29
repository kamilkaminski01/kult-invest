import './style.scss'
import { FACTS } from 'utils/consts'
import FactCard from 'components/atoms/FactCard'

const FactsSection = () => {
  return (
    <section id="facts-section" className="facts-section">
      <h3 className="facts-section__title">Kilka faktów</h3>
      <div className="facts-section__facts">
        {FACTS.map((fact, index) => (
          <FactCard
            key={index}
            number={fact.number}
            title={fact.title}
            description={fact.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FactsSection
