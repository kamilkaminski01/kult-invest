import { StaticImageData } from 'next/image'

export interface WhatWeDoItem {
  icon: string | StaticImageData
  title: string
  description: string
}

export interface WhatWeDoSectionProps {
  items: WhatWeDoItem[]
  sectionTitle?: string
}
