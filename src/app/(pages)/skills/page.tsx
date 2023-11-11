import { Metadata } from 'next'

import { Skills as SkillsComponent } from '@/components/skills'

export const metadata: Metadata = {
  title: 'Habilidades',
  description: 'Todas as tecnologias que eu domino.',
}

export default function Skills() {
  return <SkillsComponent />
}
