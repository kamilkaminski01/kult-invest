import './style.scss'
import { FAQ_DATA } from 'utils/consts'
import AccordionItem from 'components/atoms/AccordionItem'
import { IFaqItem } from './interface'
import RevealLines from 'components/atoms/RevealLines'

const FaqSection = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-section__inner">
        <h2 className="faq-section__title reveal">
          <RevealLines lines={['Pytania', 'partnera']} />
        </h2>
        <div className="faq-section__items">
          {FAQ_DATA.map((faq: IFaqItem) => (
            <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
