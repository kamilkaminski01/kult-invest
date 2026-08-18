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
      {/* The heading carries the button, not the other way round - that keeps the
          question in the page outline and a screen reader announces it as an h3. */}
      <h3 className="accordion-item__heading">
        <button
          type="button"
          id={buttonId}
          className="accordion-item__button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}>
          <span>{question}</span>
          {/* Two rules draw the plus and the minus rather than a glyph, so the mark
              can rotate as the panel opens. It duplicates aria-expanded only
              visually, so for a screen reader it is decoration. */}
          <span className="accordion-item__icon" aria-hidden="true" />
        </button>
      </h3>
      {/* The panel stays in the DOM and collapses with a 1fr -> 0fr grid row,
          because `hidden` is `display: none` and that cannot be animated.
          `visibility` on the collapsed content takes it out of the accessibility
          tree and the tab order, so a closed question still does not exist for a
          screen reader. */}
      <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-item__panel">
        <div className="accordion-item__panel-inner">
          <p className="accordion-item__answer">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
