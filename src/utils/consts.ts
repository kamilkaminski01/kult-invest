import kolejowa from 'assets/images/projects/kolejowa.jpg'
import olenki from 'assets/images/projects/olenki.jpg'
import stokrotki from 'assets/images/projects/stokrotki.jpg'
import vena from 'assets/images/projects/vena.jpg'
import elektryczna from 'assets/images/projects/elektryczna.jpg'
import witosa from 'assets/images/projects/witosa.jpg'
import porosly from 'assets/images/projects/porosly.jpg'
import kalinowa from 'assets/images/projects/kalinowa.jpg'
import wlokiennicza from 'assets/images/projects/wlokiennicza.jpg'

import dominikTorebko from 'assets/images/team/dominik-torebko.jpg'
import kamilKaminski from 'assets/images/team/kamil-kaminski.jpg'

import { IFaqItem } from 'components/molecules/FaqSection/interface'
import { IProject } from 'components/molecules/ProjectsSection/interface'
import { IProcessStep } from 'components/molecules/ProcessSection/interface'
import { IResponsibility } from 'components/molecules/ResponsibilitiesSection/interface'
import { IStat } from 'components/molecules/HeroSection/interface'
import { IStage } from 'components/molecules/WhatWeDoSection/interface'
import { IPerson } from 'components/molecules/TeamSection/interface'

export const PATHS = { home: '/' }

export const CONTACT = {
  email: 'kontakt@kultinvest.pl',
  company: 'Kult spółka z o.o.',
  street: 'ul. Kraszewskiego 30/23',
  city: '15-025 Białystok',
  nip: 'NIP 966 220 34 74'
}

export const NAV_LINKS = [
  { href: '#o-nas', label: 'Jak działamy' },
  { href: '#proces', label: 'Proces' },
  { href: '#podzial-obowiazkow', label: 'Podział ról' },
  { href: '#projekty', label: 'Projekty' }
]

/** Jedyne liczby potwierdzone przez klienta. Nic poza nimi nie trafia na strone. */
export const HERO_STATS: IStat[] = [
  { value: '15', label: 'zrealizowanych projektów' },
  { value: '26', label: 'przeprowadzonych transakcji' },
  { value: '4', label: 'projekty prowadzone równolegle' }
]

export const STAGES: IStage[] = [
  {
    letter: 'A',
    title: 'Kupujemy',
    description:
      'Lokale z problemem, który da się nazwać: układ, instalacje, stan techniczny, sytuacja właścicielska. Problem nazwany to problem wyceniony. Okazji, których nie umiemy policzyć, nie kupujemy - nawet tanich.'
  },
  {
    letter: 'B',
    title: 'Remontujemy',
    description:
      'Zakres ustalony przed pierwszym uderzeniem młotka, harmonogram tygodniowy, jedna ekipa odpowiedzialna za całość.'
  },
  {
    letter: 'C',
    title: 'Sprzedajemy',
    description:
      'Mieszkanie przygotowane do ekspozycji, cena wyjściowa liczona na podstawie transakcji z tej samej okolicy, nie na podstawie cudzych ofert.'
  }
]

export const PROCESS_STEPS: IProcessStep[] = [
  {
    number: '01',
    title: 'Analiza i wybór lokalu',
    description:
      'Przeglądamy ogłoszenia, dzwonimy, jeździmy. Liczy się nie liczba obejrzanych mieszkań, a liczba odrzuconych.'
  },
  {
    number: '02',
    title: 'Zakup i przekazanie',
    description:
      'Umowa, notariusz, przejęcie kluczy, inwentaryzacja stanu zastanego z dokumentacją zdjęciową.'
  },
  {
    number: '03',
    title: 'Projekt i remont',
    description:
      'Plany, zakres, kosztorys, jedna ekipa. Raport z budowy raz w tygodniu, ze zdjęciami i listą tego, co poszło zgodnie z planem, a co nie.'
  },
  {
    number: '04',
    title: 'Home staging i ekspozycja',
    description:
      'Umeblowanie, sesja fotograficzna, wystawienie na portalach ogłoszeniowych. Na oglądanie umawia się ten, kogo zatrzymało pierwsze zdjęcie. Dlatego sesja jest u nas częścią procesu, a nie formalnością na koniec.'
  },
  {
    number: '05',
    title: 'Sprzedaż i rozliczenie',
    description:
      'Negocjacje, akt, rozliczenie z partnerem na podstawie zestawienia wszystkich kosztów projektu.'
  }
]

export const RESPONSIBILITIES: IResponsibility[] = [
  {
    stage: 'Kapitał na zakup',
    partner: 'Całość albo część',
    kult: 'Uzupełnienie, jeśli tak ustalimy'
  },
  { stage: 'Wyszukanie i wycena lokalu', partner: '-', kult: 'Całość' },
  { stage: 'Decyzja o zakupie', partner: 'Zgoda', kult: 'Rekomendacja z wyceną' },
  { stage: 'Zakres i kosztorys remontu', partner: 'Wgląd', kult: 'Decyzja' },
  { stage: 'Prowadzenie budowy', partner: '-', kult: 'Całość' },
  { stage: 'Raport z postępów', partner: 'Odbiorca', kult: 'Raz w tygodniu w czasie remontu' },
  { stage: 'Ekspozycja i sprzedaż', partner: '-', kult: 'Całość' },
  { stage: 'Korekta ceny wyjściowej', partner: 'Decyzja wspólna', kult: 'Decyzja wspólna' },
  {
    stage: 'Rozliczenie projektu',
    partner: 'Odbiorca zestawienia',
    kult: 'Zestawienie z fakturami'
  },
  {
    stage: 'Podział zysku',
    span: 'Wprost proporcjonalny do wniesionego kapitału'
  }
]

export const CRITERIA_BUY = [
  {
    lead: 'Lokalizacja z płynnym rynkiem.',
    text: 'Dzielnice, w których transakcje zdarzają się co tydzień, nie co kwartał. Płynny rynek skraca czas wyjścia, a czas wyjścia to dokładnie to, co zamraża kapitał partnera.'
  },
  {
    lead: 'Metraż, na który jest kolejka.',
    text: 'Mieszkania, których szuka najwięcej kupujących, sprzedają się najszybciej i najrzadziej wymagają korekty ceny.'
  },
  {
    lead: 'Zły układ, dobra konstrukcja.',
    text: 'Ściany do przestawienia to szansa; strop do wymiany to nie. Koszt zmiany układu policzymy przed zakupem, koszt niespodzianki w konstrukcji - dopiero po.'
  },
  {
    lead: 'Czysta sytuacja prawna.',
    text: 'Jeden właściciel, uregulowana księga, brak zaległości. Wszystko, co potrafi wstrzymać sprzedaż, wstrzymuje też zwrot kapitału.'
  },
  {
    lead: 'Cena z marginesem.',
    text: 'Kupujemy poniżej wartości po remoncie na tyle, żeby projekt wyszedł na plus również wtedy, gdy remont potrwa dłużej, niż zakładamy.'
  }
]

export const CRITERIA_AVOID = [
  {
    lead: 'Sporów spadkowych.',
    text: 'Termin zależy wtedy od sądu, a nie od nas. Partnerowi dajemy harmonogram, nie nadzieję.'
  },
  {
    lead: 'Budynków w złym stanie technicznym.',
    text: 'Remontujemy mieszkanie, nie wspólnotę. Nowa łazienka pod przeciekającym dachem to pieniądze partnera wydane na cudzy problem.'
  },
  {
    lead: 'Lokali z lokatorem.',
    text: 'Nie prowadzimy postępowań eksmisyjnych. Nigdy - nikt nie umie podać ich terminu, a bez terminu nie ma harmonogramu.'
  },
  {
    lead: 'Rynków, których nie znamy.',
    text: 'Poza Białymstokiem i okolicami nie mamy przewagi, a bez przewagi flip jest zwykłym zakupem mieszkania za cudze pieniądze.'
  },
  {
    lead: 'Okazji bez wyceny.',
    text: 'Jeśli nie umiemy policzyć wyjścia, nie wchodzimy. Niska cena wejścia nie jest argumentem, dopóki nie wiadomo, po ile się wychodzi.'
  }
]

export const TEAM: IPerson[] = [
  {
    name: 'Dominik Torebko',
    role: 'Przed zakupem',
    photo: dominikTorebko,
    photoAlt: 'Dominik Torebko, współzałożyciel Kult',
    bio: 'Ponad 200 przeprowadzonych transakcji na rynku nieruchomości. Inwestycje deweloperskie obejmujące kilkadziesiąt mieszkań. W Kult odpowiada za wybór lokali, wycenę, negocjacje i relacje z partnerami - czyli za wszystkie decyzje podejmowane przed zakupem.'
  },
  {
    name: 'Kamil Kamiński',
    role: 'Po zakupie',
    photo: kamilKaminski,
    photoAlt: 'Kamil Kamiński, współzałożyciel Kult',
    bio: 'Programista z wieloletnim doświadczeniem zdobytym w największych firmach w Polsce i Europie - projektował, wdrażał i prowadził tworzenie oprogramowania, czyli pracę, w której harmonogram i budżet rozlicza się co tydzień. W Kult odpowiada za prowadzenie remontu, raporty z budowy i rozliczenie projektu - czyli za wszystko, co dzieje się po zakupie.'
  }
]

/**
 * Zakres prac jest w kazdym projekcie ten sam, wiec nie opisujemy go przy
 * kazdej karcie - stoi raz nad cala galeria. Karta niesie tylko to, co
 * rzeczywiscie odroznia projekt: adres i zdjecie po remoncie.
 */
export const PROJECTS: IProject[] = [
  { id: 'kolejowa', name: 'Kolejowa', image: kolejowa },
  { id: 'olenki', name: 'Oleńki', image: olenki },
  { id: 'stokrotki', name: 'Stokrotki', image: stokrotki },
  { id: 'vena', name: 'Vena', image: vena },
  { id: 'elektryczna', name: 'Elektryczna', image: elektryczna },
  { id: 'witosa', name: 'Witosa', image: witosa },
  { id: 'porosly', name: 'Porosły', image: porosly },
  { id: 'kalinowa', name: 'Kalinowa', image: kalinowa },
  { id: 'wlokiennicza', name: 'Włókiennicza', image: wlokiennicza }
]

export const FAQ_DATA: IFaqItem[] = [
  {
    id: 1,
    question: 'Kto podejmuje decyzję o zakupie mieszkania?',
    answer:
      'Rekomendację przygotowujemy my - z wyceną, kosztorysem i zakładanym terminem wyjścia. Zgodę na zakup wydaje partner. Bez jego akceptacji nie kupujemy.'
  },
  {
    id: 2,
    question: 'Jak wygląda rozliczenie?',
    answer:
      'Zestawienie wszystkich kosztów projektu wraz z fakturami, od ceny zakupu po prowizję pośrednika. Zysk liczony po odliczeniu tych kosztów i dzielony wprost proporcjonalnie do wniesionego kapitału.'
  },
  {
    id: 3,
    question: 'Czy mogę zobaczyć rozliczenie zakończonego projektu przed podjęciem decyzji?',
    answer: 'Tak. Na spotkaniu pokazujemy pełne zestawienie kosztów i wyniku wybranego projektu.'
  },
  {
    id: 4,
    question: 'Jak wygląda wejście w pierwszy projekt?',
    answer:
      'Rozmowa, przegląd dotychczasowych projektów, ustalenie zakresu i podpisanie umowy - zanim wskażemy konkretny lokal. Dopiero potem zaczynamy szukać pod ten projekt.'
  }
]
