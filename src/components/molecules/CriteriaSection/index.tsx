import './style.scss'
import { CRITERIA_BUY, CRITERIA_AVOID } from 'utils/consts'
import CriteriaList from 'components/atoms/CriteriaList'
import RevealLines from 'components/atoms/RevealLines'

const CriteriaSection = () => {
  return (
    <section id="kryteria" className="criteria-section">
      <div className="criteria-section__inner">
        <h2 className="criteria-section__title reveal">
          <RevealLines lines={['Co musi się', 'zgadzać']} />
        </h2>

        <div className="criteria-section__content">
          <p className="criteria-section__lead fade">
            Większość mieszkań odrzucamy - i to jest ta część pracy, za którą partner nam płaci.
            Każde „nie” na tym etapie kosztuje jeden wyjazd. Każde „tak” postawione na złym lokalu
            kosztuje miesiące zamrożonego kapitału. Poniżej kryteria, na których opieramy jedno i
            drugie.
          </p>

          <div className="criteria-section__lists">
            <CriteriaList title="Kupujemy" items={CRITERIA_BUY} variant="buy" />
            <CriteriaList title="Nie kupujemy" items={CRITERIA_AVOID} variant="avoid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CriteriaSection
