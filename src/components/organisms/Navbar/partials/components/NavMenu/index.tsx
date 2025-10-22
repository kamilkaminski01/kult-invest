'use client'

import './style.scss'
import ContactButton from 'components/atoms/ContactButton'

const NavMenu = () => {
  return (
    <ul className="nav__menu">
      <li className="menu__link">Invest</li>
      <li className="menu__link">Technology</li>
      <li className="menu__link">O nas</li>
      <ContactButton />
    </ul>
  )
}

export default NavMenu
