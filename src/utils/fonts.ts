import localFont from 'next/font/local'

export const almarai = localFont({
  variable: '--font-almarai',
  src: [
    { path: '../assets/fonts/Almarai-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Almarai-Bold.woff2', weight: '700', style: 'normal' }
  ]
})

export const aldrich = localFont({
  variable: '--font-aldrich',
  src: '../assets/fonts/Aldrich-Regular.woff2',
  weight: '400',
  style: 'normal'
})
