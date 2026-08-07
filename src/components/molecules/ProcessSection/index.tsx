import './style.scss'
import { PROCESS_STEPS } from 'utils/consts'
import { IProcessStep } from './interface'

const ProcessSection = () => {
  return (
    <section id="proces" className="process-section">
      <div className="process-section__inner">
        <h2 className="process-section__title">
          Pięć etapów,
          <br />
          jeden harmonogram
        </h2>
      </div>

      {/* Sciezka przewija sie w poziomie natywnym scroll-snapem — bez biblioteki
          i bez przypinania sekcji, wiec nie ma szans na przeskoki ukladu. */}
      <ol className="process-section__track">
        {PROCESS_STEPS.map((step: IProcessStep) => (
          <li key={step.number} className="process-step">
            <b className="process-step__number">{step.number}</b>
            <h3 className="process-step__title">{step.title}</h3>
            <p className="process-step__description">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProcessSection
