import Layout from '@/components/Layout';
import Head from 'next/head'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

export default function Home() {
  type props = {
    src: string
  }
  const myLoader = ({ src }: props) => {
    return `${src}`
  }

  return (
    <>
      <Head>
        <title>Richie Varghese</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='h-screen flex flex-col justify-center px-2'>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
            <div className="col-span-3 h-20 md:col-span-1" />
            <div className="col-span-3 md:col-span-2 bg-amber-400 dark:bg-sky-500 bg-opacity-10 '
            dark:bg-opacity-10 h-80 rounded-3xl backdrop-blur-sm shadow-2xl -rotate-6 m-5">
              <Image
                loader={myLoader}
                src="https://avatars.githubusercontent.com/u/20295778?v=4"
                alt="profile"
                width={200}
                height={200}
                className={`rounded-full w-40 h-40 absolute -top-10 -left-10 z-60 drop-shadow-xl 
                grayscale border-slate-400 border-spacing-16 border-8 opacity-90 `}
              />
              <div className="h-full w-full flex flex-col justify-center items-center">

                <div className="mt-2 font-sans text-2xl md:text-4xl font-medium text-center text-slate-700 
                dark:text-sky-300 drop-shadow-xl transition-all animate-pulse duration-1000">
                  <div className='mt-5 font-display text-sm md:text-md font-medium text-center 
                  text-slate-500 dark:text-sky-200 drop-shadow-xl'
                  >
                    Hi, this is
                  </div>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.pasteString('Richie Varghese 🖖', null).start();
                    }}
                  />
                </div>
                <div className='mt-5 font-display text-sm md:text-lg font-medium text-center 
                  text-slate-500 dark:text-sky-200 drop-shadow-xl'
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Full Stack Developer')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('Golang Developer')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('Rust Developer')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('C/C++ Developer')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('React.js / Next.js Developer')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('Flutter / Dart Mobile Applications')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('SQL / Pl/pgSQL Database Administration')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('Bash / Shell Scripting')
                        .pauseFor(100)
                        .deleteAll()
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

{/* Hi, this is <span className="font-bold">Richie</span> 👋, a{" "}
                  <span className={`font-bold drop-shadow-xl`}>
                    Full Stack Engineer
                  </span>{" "}
                  from Bengaluru, India. */}