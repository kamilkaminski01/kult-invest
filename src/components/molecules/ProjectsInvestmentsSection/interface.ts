import { StaticImageData } from 'next/image'

export interface ProjectImage {
  id: string | number
  src: string | StaticImageData
  alt?: string
}

export interface SwiperRowProps {
  images: ProjectImage[]
  direction: 'top' | 'bottom'
}
