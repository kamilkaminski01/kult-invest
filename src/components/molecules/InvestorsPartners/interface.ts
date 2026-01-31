export interface Investor {
  id: string | number
  name: string
  role: string
  description: string
  image: string | StaticImageData
}

export interface InvestorImage {
  id: string
  src: string
  alt: string
}
