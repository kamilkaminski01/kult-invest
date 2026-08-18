'use client'

import { useId, useState } from 'react'
import { AccordionItemProps } from './interface'
import './style.scss'

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="accordion-item" data-open={isOpen}>
      {/* Naglowek niesie przycisk, nie odwrotnie - dzieki temu pytanie zostaje
          w konspekcie strony, a czytnik ekranu podaje je jako naglowek h3. */}
      <h3 className="accordion-item__heading">
        <button
          type="button"
          id={buttonId}
          className="accordion-item__button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}>
          <span>{question}</span>
          {/* Plus i minus rysuja dwie kreski, a nie glif - dzieki temu znak
              obraca sie razem z rozwijaniem i duplikuje aria-expanded tylko
              wizualnie, wiec dla czytnika jest dekoracja. */}
          <span className="accordion-item__icon" aria-hidden="true" />
        </button>
      </h3>
      {/* Panel zostaje w DOM i zwija sie siatka 1fr -> 0fr, bo `hidden` to
          `display: none`, a tego nie da sie animowac. `visibility` na
          zwinietej tresci wypisuje ja z drzewa dostepnosci i z kolejnosci
          tabulacji, wiec zwiniete pytanie nadal nie istnieje dla czytnika. */}
      <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-item__panel">
        <div className="accordion-item__panel-inner">
          <p className="accordion-item__answer">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
