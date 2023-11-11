import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <section className="mt-24 flex items-center justify-between gap-10">
      <div className="max-w-2xl flex-1">
        <h1 className="text-primary font-bold sm:text-5xl md:text-6xl text-7xl">
          Olá! Sou Gustavo Sales, Desenvolvedor FullStack
        </h1>
        <p className="font-normal sm:text-xl text-lg leading-loose mb-10 mt-5 max-w-lg">
          {
            'Tenho 18 anos e sou constante aprendiz das novas tecnologias. Apaixonado por computação e desenvolvimento de softwares, atualmente sou freelancer a procura de oportunidades na área de programação web.'
          }
        </p>
        <Link
          href="/about"
          className="bg-dark-secondary text-white text-sm font-normal py-2 px-6 rounded"
        >
          Saiba Mais
        </Link>
      </div>
      <div className="">
        <Image
          src="https://github.com/Gusales.png"
          alt="Foto de Gustavo Sales"
          height={460}
          width={460}
          className="rounded-full min-w-[250px] max-w-full border-2 border-tertiary shadow-2xl"
        />
      </div>
    </section>
  )
}
