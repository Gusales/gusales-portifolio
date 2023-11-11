import Image from 'next/image'

import FacebookLogo from '@/assets/facebook-logo.svg'
import InstagramLogo from '@/assets/instagram-logo.svg'
import LinkedinLogo from '@/assets/linkedin-logo.svg'

export function About() {
  return (
    <section className="mt-10 flex justify-between gap-10">
      <div className="flex-1 max-w-[660px]">
        <h1 className="text-4xl font-medium text-primary">
          Quem é Gustavo Sales?
        </h1>
        <div>
          <p className="font-normal sm:text-xl text-lg leading-loose mb-10 mt-5">
            Eu me chamo Gustavo Sales, atualmente moro em Carapicuíba - Sp, mas
            sou natural de Vitória da Conquista - Ba. Trabalho com Programação a
            4 anos, quando iniciei meu ensino médio integrado ao curso de
            informática para internet na Etec Antônio Furlan, localizada em
            Barueri - Sp. Possuo conhecimentos em Javascript para a criação de
            frontends e backends, utilizando NodeJS e ReactJS como frameworks.
          </p>
          <p className="font-normal sm:text-xl text-lg leading-loose mb-10 mt-5">
            Possuo experiências em: <i>HTML</i>, <i>CSS</i>, <i>Javascript</i>,{' '}
            <i>Typescript</i>, <i>NodeJS</i>, <i>ReactJS</i>, <i>NextJs</i>, e{' '}
            <i>React Native</i>. Como frameworks de estilização, conheço e sei
            utilizar <i>TailwindCSS</i>, <i>Styled Components</i> e{' '}
            <i>Bootstrap</i>
          </p>
        </div>
      </div>
      <div className="max-w-sm flex-1">
        <h2 className="text-3xl font-medium text-secondary">
          Minhas redes sociais
        </h2>
        <p className="font-normal sm:text-xl text-lg leading-loose mb-5 mt-2 max-w-lg mt-">
          Que tal me conhecer e saber mais sobre mim pelas minhas redes sociais?
        </p>

        <ul className="-ml-3">
          <li className="inline-block">
            <a
              href="https://www.instagram.com/gussales13/"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2"
            >
              <Image
                src={InstagramLogo}
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://www.linkedin.com/in/gustavo-sales-dev/"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2"
            >
              <Image src={LinkedinLogo} alt="Linkedin" width={32} height={32} />
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://www.facebook.com/profile.php?id=100037833256537"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2"
            >
              <Image src={FacebookLogo} alt="Facebook" width={32} height={32} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
