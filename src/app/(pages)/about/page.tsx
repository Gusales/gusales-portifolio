import { About as AboutComponent } from '@/components/about'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description: 'Quem é Gustavo Sales',
}

export default function About() {
  return <AboutComponent />
}
