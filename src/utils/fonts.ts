import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const archivo = localFont({
  variable: '--font-archivo',
  src: [
    { path: '../assets/fonts/Archivo-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Archivo-Semi-Bold.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/Archivo-Bold.woff2', weight: '600', style: 'normal' }
  ]
})

export const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
