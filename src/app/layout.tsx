import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ReactNode } from 'react'
import 'assets/styles/globals.scss'
import { almarai, aldrich } from 'utils/fonts'
import Navbar from 'components/organisms/Navbar'
import Footer from 'components/organisms/Footer'

export const metadata: Metadata = {
  title: 'Kult - nowoczesne inwestycje i technologie',
  description: 'Tworzymy innowacyjne rozwiązania, które łączą świat nieruchomości z technologią',
  robots: 'index, follow',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://kultinvest.pl',
    title: 'Kult - nowoczesne inwestycje i technologie',
    description: 'Tworzymy innowacyjne rozwiązania, które łączą świat nieruchomości z technologią',
    siteName: 'Kult - nowoczesne inwestycje i technologie',
    images: 'https://kultinvest.pl/og.png'
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://kultinvest.pl/og.png'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16' },
      { url: '/favicon_16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon_32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon_48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon_192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon_512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }]
  }
}

export const viewport: Viewport = {
  themeColor: '#020202',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${almarai.variable} ${aldrich.variable}`}>
        <Navbar />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  )
}
