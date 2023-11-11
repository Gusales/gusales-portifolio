import Image from 'next/image'
import Link from 'next/link'
import * as Logo from '@/assets/logo.svg'

export function Navbar() {
  return (
    <nav className="w-full z-10 bg-white">
      <div className="pt-3 px-4 pb-1 flex justify-between">
        <Link href="/">
          <Image src={Logo} alt="Dev Gusales" width={150} height={150} />
        </Link>

        <ul className="">
          <li className="inline-block mr-2">
            <Link className="p-1 inline-block hover:text-tertiary" href="/">
              Início
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              className="p-1 inline-block hover:text-tertiary"
              href="/about"
            >
              Sobre
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              className="p-1 inline-block hover:text-tertiary"
              href="/skills"
            >
              Habilidades
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              className="p-1 inline-block hover:text-tertiary"
              href="/projects"
            >
              Projetos
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="p-1 inline-block hover:text-tertiary"
              href="/contact"
            >
              Contatos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
