'use client'

import { useId, useState } from 'react'
import { AccordionItemProps } from './interface'
import './style.scss'

const AccordionItem = ({ question, answer, isOpenInitial = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial)
  const panelId = useId()

  return (
    <div className="accordion-item">
      {/* Naglowek niesie przycisk, nie odwrotnie — dzieki temu pytanie zostaje
          w konspekcie strony, a czytnik ekranu podaje je jako naglowek h3. */}
      <h3 className="accordion-item__heading">
        <button
          type="button"
          className="accordion-item__button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}>
          <span>{question}</span>
          {/* Znak duplikuje aria-expanded, wiec dla czytnika jest dekoracja. */}
          <span className="accordion-item__icon" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div id={panelId} className="accordion-item__panel" hidden={!isOpen}>
        {answer}
      </div>
    </div>
  )
}

export default AccordionItem
