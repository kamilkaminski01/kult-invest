import './style.scss'
import { PROCESS_STEPS } from 'utils/consts'
import { IProcessStep } from './interface'
import RevealLines from 'components/atoms/RevealLines'
import ProcessPin from './ProcessPin'

const ProcessSection = () => {
  return (
    <section
      id="proces"
      className="process-section"
      // The step count drives the scroll distance in CSS, so the section
      // reserves its full height before the first paint.
      style={{ '--steps': PROCESS_STEPS.length } as React.CSSProperties}>
      <div className="process-section__inner">
        <h2 className="process-section__title reveal">
          <RevealLines lines={['Pięć etapów,', 'jeden harmonogram']} />
        </h2>
      </div>

      <ProcessPin>
        {PROCESS_STEPS.map((step: IProcessStep) => (
          <li key={step.number} className="process-step">
            <b className="process-step__number">{step.number}</b>
            <h3 className="process-step__title">{step.title}</h3>
            <p className="process-step__description">{step.description}</p>
          </li>
        ))}
      </ProcessPin>
    </section>
  )
}

export default ProcessSection
