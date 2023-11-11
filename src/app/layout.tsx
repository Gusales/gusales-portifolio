import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

import { Navbar } from '@/components/navbar'

const dmsans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata: Metadata = {
  title: {
    default: 'DevGusales Portifólio',
    template: '%s | DevGusales',
  },
  description: 'Meu portifólio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={dmsans.className}>
        <Navbar />
        <div className="px-10 pb-2">{children}</div>
      </body>
    </html>
  )
}
