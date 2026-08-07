import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from 'next/font/google'

// Trojka krojow z zatwierdzonego projektu. Wagi sa dokladnie te, ktore projekt
// wywoluje — nic wiecej sie nie wczytuje.
//
// `latin-ext` jest obowiazkowy: bez tego podzbioru polskie znaki diakrytyczne
// (a z ogonkiem, s z kreska, z z kropka) spadaja na krój zastepczy i lamia sklad.

export const plexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
})

// Waga 300 jest tylko dla drugiego czlonu logotypu ("invest"), 600 dla podtytulow,
// 700 dla naglowkow sekcji.
export const plexCondensed = IBM_Plex_Sans_Condensed({
  variable: '--font-plex-condensed',
  weight: ['300', '600', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
})

export const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
})
