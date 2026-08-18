import { StaticImageData } from 'next/image'

export interface IPerson {
  name: string
  /** The project stage this person owns - this is what the section is really about. */
  role: string
  photo: StaticImageData
  photoAlt: string
  bio?: string
}
