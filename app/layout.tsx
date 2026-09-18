import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const jakarta = localFont({
  src: '../public/fonts/PlusJakartaSans.ttf',
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UROVO | Devices and Software for Frontline Operations',
  description:
    'UROVO combines enterprise-grade devices and software to help teams capture data, connect workflows and keep operations moving.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a1b4d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${jakarta.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
