'use client'

import { useState } from 'react'
import { AccordionItemProps } from './interface'
import './style.scss'

const AccordionItem = ({ number, question, answer, isOpenInitial = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial)

  return (
    <div className={`accordion-item ${isOpen ? 'accordion-item--active' : ''}`}>
      <button
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        <span className="accordion-item__number">{number}.</span>
        <h3 className="accordion-item__question">{question}</h3>
        <div className="accordion-item__icon">
          {!isOpen ? (
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
              <path d="M1 1L9 9L17 1" stroke="#C4A661" strokeWidth="2" rotate={180} />
            </svg>
          ) : (
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
              <path d="M1 1L9 9L17 1" stroke="#C4A661" strokeWidth="2" />
            </svg>
          )}
        </div>
      </button>
      <div className="accordion-item__content">
        <div className="accordion-item__answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
