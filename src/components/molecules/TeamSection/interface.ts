import { StaticImageData } from 'next/image'

export interface IPerson {
  name: string
  /** Etap projektu, za ktory ta osoba odpowiada - to jest wlasciwa tresc sekcji. */
  role: string
  photo: StaticImageData
  photoAlt: string
  bio?: string
}
