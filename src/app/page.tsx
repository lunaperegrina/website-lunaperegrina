import Image from "next/image";
import { File, Contact, Heart } from "lucide-react"
import { Icons } from "@/components/icons";
import { MotionDiv, LittleBall } from "@/components/animation";

function BaseButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="p-3 gap-2 rounded-full border flex flex-row items-center hover:text-purple-500 transition duration-300">
      {children}
    </button>
  );
}

function TitleColored({ children, className }:
  { children: React.ReactNode, className?: string }
) {
  return (
    <h1 className={`font-bold text-4xl sm:text-7xl ${className}`}>{children}</h1>
  );
}

export default function Home() {
  return (
    <>
      {/* <LittleBall /> */}
      {/* <MotionDiv initial={{ y: 0, opacity: 1 }} animate={{ y: [0, 0, 0, -1500, -15000], opacity: [1, 1, 1, 0, 0] }} transition={{ duration: 2, times: [0, 0.2, 0.5, 0.8, 1] }}>
        <div className="absolute z-30 h-screen w-screen bg-black" />
      </MotionDiv> */}

      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
        </div>
      </div>
      <div className="container mx-auto">
        {/* <nav className="flex flex-col sm:flex-row justify-between my-4 pb-4 px-4 gap-2">
          <BaseButton>
            <Heart className="w-4 h-4" />
            lunaperegrina
          </BaseButton>
          <BaseButton>
            <File className="w-4 h-4" />
            My Projects
          </BaseButton>

          <BaseButton>
            <Contact className="w-4 h-4" />
            Contact
          </BaseButton>
        </nav> */}
        <section className="flex flex-col justify-center text-center h-[100vh]">
          <div className="flex flex-row mx-auto gap-4 mb-4">
            <MotionDiv initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "tween" }}>
              <Image
                src="/images/icon-luna-apple.png"
                alt="Luna Peregrina"
                width={100}
                height={100}
                className="border w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-full"
              />
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="w-60 sm:w-80 h-12 sm:h-16 text-sm sm:text-xl content-center gap-2 text-center rounded-full border border-stone-700">
                Hello, I'm Luna Peregrina! 🌙
              </div>
            </MotionDiv>

            {/* <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer justify-center px-6 rounded-full bg-white text-sm sm:text-xl text-slate-600 backdrop-blur-xl dark:bg-slate-950 dark:text-slate-200">
                Hello, I'm Luna Peregrina! 🌙
              </div>
            </span> */}
          </div>
          <div className="mx-auto">
            <MotionDiv className="flex flex-row justify-center" initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1 }}>
              <TitleColored className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">CLIENT</TitleColored>
              <MotionDiv className="text-start flex flex-row items-center ml-4 text-xs sm:text-base" initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1, delay: 0.5 }}>
              // The best experience
                <br />
                always first
              </MotionDiv>
            </MotionDiv>
            <MotionDiv className="flex flex-row justify-center" initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1 }}>
              <MotionDiv className="text-start flex flex-row items-center mr-4 text-xs sm:text-base -z-10" initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1, delay: 0.5 }}>
              // 📍 Porto Seguro,
                <br />
                Bahia, Brasil 🥥🇧🇷
              </MotionDiv>
              <TitleColored className="bg-gradient-to-r from-green-400 to-yellow-300 text-transparent bg-clip-text">FOCUSED</TitleColored>
            </MotionDiv>
            {/* <div className="text-7xl font-semibold text-yellow-300">FOCUSED</div> */}
            <MotionDiv className="flex flex-row justify-center" initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1 }}>
              <div className="text-start flex flex-row items-center mr-4">
                <TitleColored className="bg-gradient-to-r from-fuchsia-500 to-blue-400 text-transparent bg-clip-text">FULLSTACK</TitleColored>
                <MotionDiv initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1, delay: 0.5 }}>
                  <button
                    type="button"
                    className="ml-2 gap-2 rounded-full flex flex-row items-center justify-center w-20 sm:w-32 h-8 sm:h-14 text-xs sm:text-base border-stone-700 border">
                    <div className="relative mb-0.5 z-10">
                      {/* <div className="absolute w-2 h-2 rounded-full mt-0.5 bg-stone-400 sm:w-3 sm:h-3 md:h-4 md:w-4 flex items-center justify-center" /> */}
                      <div className="w-2 h-2 rounded-full mt-0.5 bg-blue-400 sm:w-3 sm:h-3 md:h-4 md:w-4 animate-pulse pulse-slow" />
                    </div>
                    Soon...
                  </button>
                </MotionDiv>
              </div>
            </MotionDiv>

            <MotionDiv className="flex flex-row justify-center" initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1 }}>
              <div className="text-start flex flex-row items-center mr-4 text-xs sm:text-base">
                <MotionDiv initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1, delay: 0.5 }}>
              // Next, Nest, Vue,
                  <br />
                  Python and more!
                </MotionDiv>
              </div>
              <TitleColored className="bg-gradient-to-r from-red-400 to-yellow-400 text-transparent bg-clip-text">DEVELOPER</TitleColored>
            </MotionDiv>
          </div>
          <h2 className="text-base sm:text-3xl font-semibold mt-8 mx-auto text-center w-3/4">
            <MotionDiv initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1, delay: 0.5 }}>
              Creating software that enhances your experience with <span className="bg-gradient-to-r from-cyan-500 to-blue-400 text-transparent bg-clip-text">productivity</span>, <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">appeal</span>, and <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-transparent bg-clip-text">asthetic</span>.
            </MotionDiv>
          </h2>
          <MotionDiv className="flex max-w-7xl mx-auto justify-center px-8 py-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut", bounce: 1, delay: 0.5 }}>

            <div className="flex flex-row gap-2">
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/lunaperegrina">
                  <Icons.gitHub className="w-7 h-7 text-white" />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
                <a target="_blank" href="https://www.instagram.com/eitacomoperegrina">
                  <Icons.instagram className="w-7 h-7 text-white" />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
                <a target="_blank" href="https://www.linkedin.com/in/lunaperegrina">
                  <Icons.linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
                <a target="_blank" href="https://twitter.com/lunaperegrinaa">
                  <Icons.twitter className="w-6 h-6 text-white" />
                </a>
              </div>
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
                <a target="_blank" href="https://bsky.app/profile/lunaperegrina.dev">
                  <Icons.bluesky className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </MotionDiv>

        </section>
        {/* <div className="absolute top-full inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]"></div> */}

        <section className="h-[90vh] mx-8">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
            My Projects on GitHub
          </h2>
          <div className="xl:mx-16 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
            <Project url="lunaperegrina/task-manager-cli" />
            <Project url="lunaperegrina/twitter-banner-followers" />
            <Project url="lunaperegrina/bluesky-followers" />
            <Project url="lunaperegrina/pied-piper" />
            <Project url="lunaperegrina/tabnews-cli" />
            <Project url="lunaperegrina/awesome-bsky" />
          </div>
        </section>
        {/* <section className="h-[90vh]">
        <h2 className="text-base sm:text-4xl font-semibold my-16">
          About Me
        </h2>
      </section> */}
      </div>
    </>
  );
}

async function Project({ url }: { url: string }) {

  const data = await fetch(`https://api.github.com/repos/${url}`)
  const repo = await data.json()

  return (
    <a href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer">
      <div className="flex-1 border border-zinc-700 p-4 rounded-lg hover:bg-zinc-800 transition duration-150 ease-out hover:ease-in" >
        <div className="flex flex-col mb-6">
          <div className="flex flex-row justify-between">
            <h3 className="text-base sm:text-2xl font-semibold">
              {repo.name}
            </h3>
            <div className="flex flex-row items-center gap-2">
              {repo.stargazers_count}
              <svg aria-hidden="true" height="16" fill="currentColor" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star v-align-text-bottom d-inline-block">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
              </svg>
              {repo.forks_count > 0 && <div className="flex flex-row items-center gap-2">
                <span className="ml-1">
                  {repo.forks_count}
                </span>
                <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-2">
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                </svg>
              </div>}
            </div>
          </div>
          <div className="text-xs sm:text-base flex flex-row flex-wrap gap-2 mt-2">
            {repo.topics?.map((topic: string) => {
              return (
                <span className="bg-purple-900 px-3 py-1 rounded-full text-xs" key={topic}>{topic.charAt(0).toUpperCase() + topic.slice(1)}</span>
              )
            }
            )}
          </div>
        </div>
        {repo.description}
      </div >

    </a>
  );
}



