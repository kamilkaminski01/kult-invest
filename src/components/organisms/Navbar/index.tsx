import './style.scss'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from 'utils/consts'
import Logo from 'assets/images/logo.svg'
import NavMenu from './partials/components/NavMenu'

const Navbar = () => {
  return (
    <nav>
      <Link href={PATHS.home}>
        <Image src={Logo} alt="Logo" className="nav__brand" />
      </Link>

      <NavMenu />
    </nav>
  )
}

export default Navbar
