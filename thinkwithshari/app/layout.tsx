import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-dm-sans',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MyclineShareena | AI Engineer | thinkwithshari.ai',
  description:
    'AI Engineer who designs and ships production-grade intelligent systems. Architecting orchestration, building pipelines, deploying systems on AWS.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
