'use client'

import { useState } from 'react'
import { AccordionItemProps } from './interface'
import './style.scss'
import Image from 'next/image'
import classNames from 'classnames'
import ArrowDownIcon from 'assets/icons/arrow-down-icon.svg'

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
        {/* Kierunek strzalki niesie sama rotacja stanu --active. Podmiana ikony
            odwracala ja drugi raz, wiec pozycja otwarta wygladala jak zamknieta.
            Strzalka duplikuje aria-expanded, wiec dla czytnika jest dekoracja. */}
        <div className="accordion-item__icon">
          <Image src={ArrowDownIcon} alt="" />
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
