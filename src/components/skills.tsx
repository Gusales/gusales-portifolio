import Image from 'next/image'

export function Skills() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-medium text-secondary text-center sm:text-left">
        Tecnologias que eu trabalho
      </h1>
      <p>
        Essas são as tecnologias que eu utilizo para desenvolver, de forma
        criativa e funcional, minhas aplicações.
      </p>

      <ul className="flex flex-col gap-8 w-full max-w-[560px]">
        <li className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-primary">Linguagens</h2>
          <ul className="flex flex-wrap items-center justify-between w-full gap-2">
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width={75}
                height={75}
                alt="Logomarca do Javascript"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Javascript</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width={75}
                height={75}
                alt="Logomarca do Typescript"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Typescript</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do Python"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Python</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do Java"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Java</p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-primary">Frameworks</h2>
          <ul className="flex flex-wrap items-center justify-between w-full gap-2">
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                width={75}
                height={75}
                alt="Logomarca do Nodejs"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>NodeJS</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do ReactJS"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>ReactJS</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                width={75}
                height={75}
                alt="Logomarca do NextJS"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>NextJS</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                width={75}
                height={75}
                alt="Logomarca do TailwindCSS"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>TailwindCSS</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do Bootstrap"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Bootstrap</p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-primary">Outros</h2>
          <ul className="flex flex-wrap items-center justify-between w-full gap-2">
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do Visual Studio Code"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Visual Studio</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                width={75}
                height={75}
                alt="Logomarca do Figma"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Figma</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do Git"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Git</p>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                width={75}
                height={75}
                alt="Logomarca do Github"
                className="sm:w-[75px] sm:h-[75px] w-10 h-10"
              />
              <p>Github</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
