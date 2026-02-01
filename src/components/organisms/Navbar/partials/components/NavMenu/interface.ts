import { MouseEventHandler } from 'react'

export interface NavMenuProps {
  closeMenu: () => void
}

export interface NavbarToggleProps {
  isOpen: boolean
  toggleMenu: MouseEventHandler<HTMLDivElement>
}
