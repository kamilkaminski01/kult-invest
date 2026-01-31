import { ProjectImage } from './../components/molecules/ProjectsInvestmentsSection/interface'

import nowosielska from '../assets/images/swipers/top/nowosielska.jpg'
import kolejowa from '../assets/images/swipers/top/kolejowa.jpg'
import olenki from '../assets/images/swipers/top/olenki.jpg'
import stokrotki from '../assets/images/swipers/top/stokrotki.jpg'
import vena from '../assets/images/swipers/top/vena.jpg'

import elektryczna from '../assets/images/swipers/bottom/elektryczna.jpg'
import witosa from '../assets/images/swipers/bottom/witosa.jpg'
import porosly from '../assets/images/swipers/bottom/porosly.jpg'
import kalinowa from '../assets/images/swipers/bottom/kalinowa.jpg'
import wlokiennicza from '../assets/images/swipers/bottom/wlokiennicza.jpg'

export const PATHS = { home: '/' }

export const SWIPER_IMAGES_TOP: ProjectImage[] = [
  { id: 't1', src: nowosielska.src || nowosielska, alt: 'Nowosielska' },
  { id: 't2', src: kolejowa.src || kolejowa, alt: 'Kolejowa' },
  { id: 't3', src: olenki.src || olenki, alt: 'Olenki' },
  { id: 't4', src: stokrotki.src || stokrotki, alt: 'Stokrotki' },
  { id: 't5', src: vena.src || vena, alt: 'Vena' }
]

export const SWIPER_IMAGES_BOTTOM: ProjectImage[] = [
  { id: 'b1', src: elektryczna.src || elektryczna, alt: 'Elektryczna' },
  { id: 'b2', src: witosa.src || witosa, alt: 'Witosa' },
  { id: 'b3', src: porosly.src || porosly, alt: 'Porosly' },
  { id: 'b4', src: kalinowa.src || kalinowa, alt: 'Kalinowa' },
  { id: 'b5', src: wlokiennicza.src || wlokiennicza, alt: 'Włókiennicza' }
]

export const FACTS = [
  {
    number: 3,
    title: 'średnia liczba prowadzonych projektów',
    description:
      'Każdego miesiąca pracujemy równolegle nad kilkoma inwestycjami i rozwiązaniami IT, zachowując najwyższą jakość na każdym etapie.'
  },
  {
    number: 24,
    title: 'zrealizowanych projektów',
    description:
      'Od startu zakończyliśmy z sukcesem kilkanaście przedsięwzięć - zarówno w nieruchomościach, jak i w nowoczesnych technologiach.'
  },
  {
    number: 374,
    title: 'przeprowadzonych transkacji',
    description:
      'Za nami setki działań związanych z kupnem, sprzedażą i wdrożeniami, które potwierdzają skuteczność oraz zaufanie inwestorów.'
  },
  {
    number: 2025,
    title: 'w tym roku wystartowaliśmy',
    description:
      'Kult powstał z pasji do dwóch różnych światów - od początku wyznaczając kierunek w stronę nowoczesnych rozwiązań.'
  }
]
