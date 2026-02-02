'use client'

import { useState } from 'react'
import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from 'utils/consts'
import Logo from 'assets/images/logo.svg'
import NavMenu from './partials/components/NavMenu'
import classNames from 'classnames'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={classNames({ 'nav--open': isOpen })}>
      <div className="nav__toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <Link href={PATHS.home} className="nav__logo-link" onClick={closeMenu}>
        <Image src={Logo} alt="Logo" className="nav__brand" />
      </Link>

      <div className={classNames('nav__container', { active: isOpen })}>
        <NavMenu closeMenu={closeMenu} />
      </div>
    </nav>
  )
}

export default Navbar
