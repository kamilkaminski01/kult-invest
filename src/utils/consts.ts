import nowosielska from 'assets/images/swipers/top/nowosielska.jpg'
import kolejowa from 'assets/images/swipers/top/kolejowa.jpg'
import olenki from 'assets/images/swipers/top/olenki.jpg'
import stokrotki from 'assets/images/swipers/top/stokrotki.jpg'
import vena from 'assets/images/swipers/top/vena.jpg'
import elektryczna from 'assets/images/swipers/bottom/elektryczna.jpg'
import witosa from 'assets/images/swipers/bottom/witosa.jpg'
import porosly from 'assets/images/swipers/bottom/porosly.jpg'
import kalinowa from 'assets/images/swipers/bottom/kalinowa.jpg'
import wlokiennicza from 'assets/images/swipers/bottom/wlokiennicza.jpg'

import { IFaqItem } from 'components/molecules/FaqSection/interface'
import { IProject } from 'components/molecules/ProjectsSection/interface'
import { IProcessStep } from 'components/molecules/ProcessSection/interface'
import { IResponsibility } from 'components/molecules/ResponsibilitiesSection/interface'
import { IStat } from 'components/molecules/HeroSection/interface'
import { IStage } from 'components/molecules/WhatWeDoSection/interface'

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
  { value: '11', label: 'zrealizowanych projektów' },
  { value: '21', label: 'przeprowadzonych transakcji' },
  { value: '3', label: 'projekty prowadzone równolegle' }
]

export const STAGES: IStage[] = [
  {
    letter: 'A',
    title: 'Kupujemy',
    description:
      'Lokale z problemem, który da się nazwać: układ, instalacje, stan techniczny, sytuacja właścicielska. Problem nazwany to problem wyceniony. Okazji, których nie umiemy policzyć, nie kupujemy — nawet tanich.'
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
      'Plany, zakres, kosztorys, jedna ekipa. Raport z budowy raz w tygodniu, ze zdjęciami i listą tego, co nie poszło zgodnie z planem.'
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
  { stage: 'Wyszukanie i wycena lokalu', partner: '—', kult: 'Całość' },
  { stage: 'Decyzja o zakupie', partner: 'Zgoda', kult: 'Rekomendacja z wyceną' },
  { stage: 'Zakres i kosztorys remontu', partner: 'Wgląd', kult: 'Decyzja' },
  { stage: 'Prowadzenie budowy', partner: '—', kult: 'Całość' },
  { stage: 'Raport z postępów', partner: 'Odbiorca', kult: 'Raz w tygodniu w czasie remontu' },
  { stage: 'Ekspozycja i sprzedaż', partner: '—', kult: 'Całość' },
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
    text: 'Ściany do przestawienia to szansa; strop do wymiany to nie. Koszt zmiany układu policzymy przed zakupem, koszt niespodzianki w konstrukcji — dopiero po.'
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
    text: 'Nie prowadzimy postępowań eksmisyjnych. Nigdy — nikt nie umie podać ich terminu, a bez terminu nie ma harmonogramu.'
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

export const PROJECTS: IProject[] = [
  {
    id: 'nowosielska',
    name: 'Nowosielska',
    image: nowosielska,
    scope: 'Instalacje, układ, wykończenie'
  },
  {
    id: 'kolejowa',
    name: 'Kolejowa',
    image: kolejowa,
    scope: 'Przebudowa układu, łazienka, kuchnia'
  },
  { id: 'olenki', name: 'Oleńki', image: olenki, scope: 'Osuszanie, tynki, wykończenie' },
  { id: 'stokrotki', name: 'Stokrotki', image: stokrotki, scope: 'Układ, instalacje, wykończenie' },
  { id: 'vena', name: 'Vena', image: vena, scope: 'Wykończenie pod klucz' },
  {
    id: 'elektryczna',
    name: 'Elektryczna',
    image: elektryczna,
    scope: 'Kuchnia, łazienka, podłogi'
  },
  { id: 'witosa', name: 'Witosa', image: witosa, scope: 'Przebudowa układu, wykończenie' },
  { id: 'porosly', name: 'Porosły', image: porosly, scope: 'Instalacje, tynki, wykończenie' },
  { id: 'kalinowa', name: 'Kalinowa', image: kalinowa, scope: 'Łazienka, kuchnia, podłogi' },
  {
    id: 'wlokiennicza',
    name: 'Włókiennicza',
    image: wlokiennicza,
    scope: 'Układ, instalacje, wykończenie'
  }
]

export const FAQ_DATA: IFaqItem[] = [
  {
    id: 1,
    question: 'Kto podejmuje decyzję o zakupie mieszkania?',
    answer:
      'Rekomendację przygotowujemy my — z wyceną, kosztorysem i zakładanym terminem wyjścia. Zgodę na zakup wydaje partner. Bez jego akceptacji nie kupujemy.'
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
      'Rozmowa, przegląd dotychczasowych projektów, ustalenie zakresu i podpisanie umowy — zanim wskażemy konkretny lokal. Dopiero potem zaczynamy szukać pod ten projekt.'
  }
]
