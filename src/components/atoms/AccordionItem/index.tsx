'use client'

import { useState } from 'react'
import { AccordionItemProps } from './interface'
import './style.scss'
import Image from 'next/image'
import classNames from 'classnames'
import ArrowDownIcon from 'assets/icons/arrow-down-icon.svg'
import ArrowUpIcon from 'assets/icons/arrow-up-icon.svg'

const AccordionItem = ({ number, question, answer, isOpenInitial = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial)

  return (
    <div className={classNames('accordion-item', { 'accordion-item--active': isOpen })}>
      <button
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        <span className="accordion-item__number">{number}.</span>
        <h3 className="accordion-item__question">{question}</h3>
        <div className="accordion-item__icon">
          {!isOpen ? (
            <Image src={ArrowDownIcon} alt="arrow-down" />
          ) : (
            <Image src={ArrowUpIcon} alt="arrow-up" />
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
