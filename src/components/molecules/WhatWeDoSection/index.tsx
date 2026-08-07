import './style.scss'
import { STAGES } from 'utils/consts'
import StageCard from 'components/atoms/StageCard'
import { IStage } from './interface'

const WhatWeDoSection = () => {
  return (
    <section id="o-nas" className="what-we-do">
      <div className="what-we-do__inner">
        <h2 className="what-we-do__title">
          Flip to nie remont
          <br />
          na szybko
        </h2>
        <p className="what-we-do__lead">
          Flip mieszkaniowy to zakup lokalu poniżej jego docelowej wartości, usunięcie wszystkiego,
          co tę wartość obniża, i sprzedaż w terminie ustalonym przed zakupem. Wartość nie bierze
          się z farby. Bierze się z decyzji podjętych, zanim mieszkanie stanie się nasze: co da się
          zmienić, ile to zajmie i kto to kupi.
        </p>
        <div className="what-we-do__stages">
          {STAGES.map((stage: IStage) => (
            <StageCard
              key={stage.letter}
              letter={stage.letter}
              title={stage.title}
              description={stage.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
