'use client'

import './style.scss'
import { scrollTo } from 'utils/scrollTo'

const ContactButton = () => {
  const handleClick = () => {
    scrollTo('contact')
  }

  return (
    <div className="contact-btn" onClick={handleClick}>
      Skontaktuj się
    </div>
  )
}

export default ContactButton
