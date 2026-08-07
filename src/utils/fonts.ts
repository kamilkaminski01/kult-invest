import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Wagi musza odpowiadac krojom, bo inaczej `font-weight: 700` nie ma do czego
// trafic i przegladarka podstawia najblizszy dostepny krój — przy Bold pod 600
// tytuly sekcji renderowaly sie identycznie jak nazwy projektow i osob.
export const archivo = localFont({
  variable: '--font-archivo',
  src: [
    { path: '../assets/fonts/Archivo-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Archivo-Semi-Bold.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/Archivo-Bold.woff2', weight: '700', style: 'normal' }
  ]
})

export const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
