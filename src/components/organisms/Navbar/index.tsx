'use client'

import { useState } from 'react'
import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from 'utils/consts'
import Logo from 'assets/images/logo.svg'
import NavMenu from './partials/components/NavMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={isOpen ? 'nav--open' : ''}>
      {/* Hamburger / Close Icon */}
      <div className="nav__toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <Link href={PATHS.home} className="nav__logo-link">
        <Image src={Logo} alt="Logo" className="nav__brand" />
      </Link>

      <div className={`nav__container ${isOpen ? 'active' : ''}`}>
        <NavMenu />
      </div>
    </nav>
  )
}

export default Navbar
