'use client'

import Link from 'next/link'
import './style.scss'
import ContactButton from 'components/atoms/ContactButton'

const NavMenu = () => {
  return (
    <ul className="nav__menu">
      <li className="menu__link">
        <Link href="/invest">Invest</Link>
      </li>
      <li className="menu__link">
        <Link href="/technology">Technology</Link>
      </li>
      <li className="menu__link">
        <Link href="/o-nas">O nas</Link>
      </li>
      <li className="menu__link--btn">
        <ContactButton />
      </li>
    </ul>
  )
}

export default NavMenu
