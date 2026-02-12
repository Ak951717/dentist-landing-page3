import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Bright Smile Dental - Book Your Appointment Today',
  description: 'Experience exceptional dental care at Bright Smile Dental. Schedule your appointment online for teeth cleaning, cosmetic dentistry, and complete oral health services.',
  keywords: ['dental clinic', 'dentist', 'teeth cleaning', 'cosmetic dentistry', 'dental care'],
  authors: [{ name: 'Bright Smile Dental' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brightsmile-dental.com',
    siteName: 'Bright Smile Dental',
    title: 'Bright Smile Dental - Book Your Appointment',
    description: 'Professional dental care and services. Book your appointment with our experienced dentists today.',
    images: [
      {
        url: 'https://brightsmile-dental.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bright Smile Dental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bright Smile Dental',
    description: 'Professional dental care and services.',
    images: ['https://brightsmile-dental.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  canonical: 'https://brightsmile-dental.com',
  metadataBase: new URL('https://brightsmile-dental.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_playfair.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Bright Smile Dental',
              image: 'https://brightsmile-dental.com/logo.png',
              description: 'Professional dental clinic offering comprehensive oral care services',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Dental Lane',
                addressLocality: 'Seattle',
                addressRegion: 'WA',
                postalCode: '98101',
                addressCountry: 'US',
              },
              telephone: '+1-206-555-0123',
              url: 'https://brightsmile-dental.com',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://facebook.com/brightsmile',
                'https://instagram.com/brightsmile',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
