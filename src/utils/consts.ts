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

import houseIcon from '../assets/images/what-we-do/home-loan-icon.svg'
import webServiceIcon from '../assets/images/what-we-do/web-service-icon.svg'
import webCodeIcon from '../assets/images/what-we-do/web-code-icon.svg'
import announcementsIcon from '../assets/images/what-we-do/announcements-icon.svg'

import jerzy from '../assets/images/investors/jerzy.jpg'

export const WHAT_WE_DO_DATA = [
  {
    icon: houseIcon,
    title: 'Inwestycja w modelu 50/50',
    description:
      'Zakup mieszkania, kompleksowy remont i sprzedaż z zyskiem. Każdy etap projektowany jest tak, aby maksymalizować zwrot z inwestycji.'
  },
  {
    icon: webServiceIcon,
    title: 'Automatyzujemy procesy',
    description:
      'Usprawniające codzienną pracę, tworząc dopasowane rozwiązania które eliminują powtarzalne procesy.'
  },
  {
    icon: webCodeIcon,
    title: 'Projektujemy aplikacje',
    description:
      'Tworzymy dedykowane narzędzia - aplikacje webowe i mobilne, które odpowiadają na konkretne potrzeby Twojej firmy.'
  },
  {
    icon: announcementsIcon,
    title: 'Monitor ogłoszeń nieruchomości',
    description:
      'Dedykowane narzędzie, które automatycznie zbiera dane z platform ogłoszeniowych i powiadamia użytkownika o nowych ofertach'
  }
]

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

export const INVESTORS_DATA = [
  {
    id: 1,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 2,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 3,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 4,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 5,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 6,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 7,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 8,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  },
  {
    id: 9,
    name: 'Jerzy Jurkiewicz',
    role: 'CEO ZIRO INVEST',
    image: jerzy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
  }
]

export const FAQ_DATA = [
  {
    id: 1,
    question: 'Czym wyróżnia się KULT na tle innych firm?',
    answer:
      'Tworzymy rozwiązania, które realnie generują zysk, a nie tylko dobrze wyglądają. Każdy nasz projekt – zarówno inwestycyjny, jak i technologiczny – jest zaprojektowany tak, aby przynosił wymierne efekty i zwiększał wartość dla naszych klientów i partnerów.'
  },
  {
    id: 2,
    question: 'Czy mogę zainwestować razem z Wami?',
    answer:
      'Tak, oferujemy różne modele współpracy inwestycyjnej dostosowane do kapitału i oczekiwań partnera.'
  },
  {
    id: 3,
    question: 'Jakie aplikacje i rozwiązania technologiczne tworzycie?',
    answer:
      'Specjalizujemy się w narzędziach do automatyzacji, monitoringu rynku nieruchomości oraz dedykowanych systemach CRM/ERP.'
  },
  {
    id: 4,
    question: 'Ile trwa realizacja projektu inwestycyjnego?',
    answer:
      'Czas realizacji zależy od skali projektu, zazwyczaj proces od zakupu do sprzedaży zamyka się w 4-8 miesiącach.'
  },
  {
    id: 5,
    question: 'W jaki sposób mogę rozpocząć współpracę z KULT?',
    answer:
      'Zapraszamy do kontaktu przez formularz lub bezpośrednio – chętnie porozmawiamy o wspólnych celach.'
  }
]
