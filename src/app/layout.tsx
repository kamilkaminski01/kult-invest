import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ReactNode } from 'react'
import 'assets/styles/globals.scss'
import { plexSans, plexCondensed, plexMono } from 'utils/fonts'
import Footer from 'components/organisms/Footer'
import Motion from 'components/atoms/Motion'

const description =
  'Kupujemy mieszkania z potencjałem w Białymstoku, remontujemy i sprzedajemy. Cenę zakupu i kosztorys zamykamy przed aktem notarialnym. Współpraca z partnerem kapitałowym.'

export const metadata: Metadata = {
  title: 'Kult Invest — flipy mieszkaniowe w Białymstoku',
  description,
  robots: 'index, follow',
  manifest: '/manifest.json',
  alternates: { canonical: 'https://kultinvest.pl' },
  openGraph: {
    type: 'website',
    url: 'https://kultinvest.pl',
    title: 'Kult Invest — flipy mieszkaniowe w Białymstoku',
    description,
    siteName: 'Kult Invest',
    images: 'https://kultinvest.pl/og.png'
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://kultinvest.pl/og.png'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }]
  }
}

export const viewport: Viewport = {
  themeColor: '#0e0f12',
  width: 'device-width',
  initialScale: 1
}

/** Dane strukturalne — bez watku technologicznego, wylacznie nieruchomosci. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Kult sp. z o.o.',
  url: 'https://kultinvest.pl',
  email: 'kontakt@kultinvest.pl',
  areaServed: 'Białystok i okolice',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Kraszewskiego 30/23',
    postalCode: '15-025',
    addressLocality: 'Białystok',
    addressCountry: 'PL'
  },
  taxID: '9662203474',
  founder: [
    { '@type': 'Person', name: 'Dominik Torebko' },
    { '@type': 'Person', name: 'Kamil Kamiński' }
  ]
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl">
      <head>
        {/* Runs before the first paint. The pinned process section has a very
            different height with motion enabled, so deciding this later would
            re-lay-out the page after paint and cost us CLS. Kept inline and
            tiny on purpose — it must not wait on a network round trip. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)" +
              "document.documentElement.classList.add('js')}catch(e){}"
          }}
        />
      </head>
      <body className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable}`}>
        <a href="#main" className="skip-link">
          Przejdź do treści
        </a>
        <Analytics />
        <Motion />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
