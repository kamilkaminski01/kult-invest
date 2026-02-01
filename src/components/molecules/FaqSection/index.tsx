import './style.scss'
import { FAQ_DATA } from 'utils/consts'
import AccordionItem from 'components/atoms/AccordionItem'
import { IFaqItem } from './interface'

const FaqSection = () => {
  return (
    <section id="faq-section" className="faq-section">
      <div className="faq-section__container">
        <div className="faq-section__left">
          <h2 className="faq-section__title">Pytania, które często padają</h2>
        </div>
        <div className="faq-section__right">
          {FAQ_DATA.map((faq: IFaqItem, index: number) => (
            <AccordionItem
              key={faq.id}
              number={index + 1}
              question={faq.question}
              answer={faq.answer}
              isOpenInitial={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
