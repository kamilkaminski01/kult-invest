'use client'

import './style.scss'
import Link from 'next/link'
import { NavMenuProps } from './interface'
import ContactButton from 'components/atoms/ContactButton'

const NavMenu = ({ closeMenu }: NavMenuProps) => {
  return (
    <ul className="nav__menu">
      <li className="menu__link">
        <Link href="#invest" onClick={closeMenu}>
          Invest
        </Link>
      </li>
      <li className="menu__link">
        <Link href="#technology" onClick={closeMenu}>
          Technology
        </Link>
      </li>
      <li className="menu__link">
        <Link href="#about" onClick={closeMenu}>
          O nas
        </Link>
      </li>
      <li className="menu__link--btn" onClick={closeMenu}>
        <ContactButton />
      </li>
    </ul>
  )
}

export default NavMenu
