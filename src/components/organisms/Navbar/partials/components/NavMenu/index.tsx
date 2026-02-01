'use client'

import Link from 'next/link'
import './style.scss'
import ContactButton from 'components/atoms/ContactButton'

const NavMenu = () => {
  return (
    <ul className="nav__menu">
      <li className="menu__link">
        <Link href="#invest-section">Invest</Link>
      </li>
      <li className="menu__link">
        <Link href="#technology-section">Technology</Link>
      </li>
      <li className="menu__link">
        <Link href="#whoweare-section">O nas</Link>
      </li>
      <li className="menu__link--btn">
        <ContactButton />
      </li>
    </ul>
  )
}

export default NavMenu
