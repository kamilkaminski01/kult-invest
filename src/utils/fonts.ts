import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from 'next/font/google'

// The three typefaces from the approved design. The weights are exactly the ones
// the design calls for - nothing beyond them is loaded.
//
// `latin-ext` is mandatory: without that subset the Polish diacritics (a-ogonek,
// s-acute, z-dot) fall back to a substitute face and break the setting.

export const plexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
})

// Weight 300 is the fallback for the hero subtitle (Condensed has no 400 of its
// own), 600 for card subheadings, 700 for section headings.
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
