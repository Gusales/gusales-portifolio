import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmsans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata: Metadata = {
  title: 'DevGusales Portifolio',
  description: 'Meu portifólio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${dmsans.className} bg-tertiary bg-no-repeat`}>
        {children}
      </body>
    </html>
  )
}
