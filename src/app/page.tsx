import Image from "next/image";
import { File, Contact, Heart } from "lucide-react"
import { Icons } from "@/components/icons";

function BaseButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-3 gap-2 rounded-full border flex flex-row items-center hover:text-purple-500 transition duration-300">
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
    <div className="container mx-auto">
      <nav className="flex flex-col sm:flex-row justify-between my-4 pb-4 px-4 gap-2">
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
      </nav>
      {/* <div className="absolute top-full inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]"></div> */}
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]"></div> */}
      <div className="flex flex-col justify-center text-center h-[90vh]">
        <div className="flex flex-row mx-auto gap-4 mb-4">
          <Image
            src="/images/icon-luna-apple.png"
            alt="Luna Peregrina"
            width={100}
            height={100}
            className="border w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-full"
          />
          <div className="w-60 sm:w-80 sm:80 h-12 sm:h-16 text-sm sm:text-xl content-center gap-2 text-center rounded-full border">
            Hello, I'm Luna Peregrina! 🌙
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex flex-row justify-center">
            <TitleColored className="text-purple-500">CLIENT</TitleColored>
            <div className="text-start flex flex-row items-center ml-4 text-xs sm:text-base">
              // The best experience
              <br />
              always first
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-start flex flex-row items-center mr-4 text-xs sm:text-base">
              // 📍 Porto Seguro,
              <br />
              Bahia, Brasil 🥥🇧🇷
            </div>
            <TitleColored className="text-yellow-300">FOCUSED</TitleColored>
          </div>
          {/* <div className="text-7xl font-semibold text-yellow-300">FOCUSED</div> */}
          <div className="flex flex-row justify-center">
            <div className="text-start flex flex-row items-center mr-4">
              <TitleColored>FULLSTACK</TitleColored>
              <button className="p-6 gap-2 rounded-full border flex flex-row items-center h-12 sm:h-16 text-base sm:text-lg">
                <div className="relative mb-0.5 z-10">
                  {/* <div className="absolute w-2 h-2 rounded-full mt-0.5 bg-stone-400 sm:w-3 sm:h-3 md:h-4 md:w-4 flex items-center justify-center" /> */}
                  <div className="w-2 h-2 rounded-full mt-0.5 bg-yellow-300 sm:w-3 sm:h-3 md:h-4 md:w-4 animate-pulse pulse-slow" />
                </div>
                Soon...
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-start flex flex-row items-center mr-4 text-xs sm:text-base">
              // Next, Nest, Vue,
              <br />
              Python and more!
            </div>
            <TitleColored className="text-cyan-300">DEVELOPER</TitleColored>
          </div>
        </div>
        <h2 className="text-base sm:text-3xl font-semibold mt-8 mx-auto text-center w-3/4">
          Creating software that enhances your experience with <span className="text-cyan-300">productivity</span>, <span className="text-yellow-300">appeal</span>, and <span className="text-purple-500">asthetic</span>.
        </h2>
        <div className="flex max-w-7xl mx-auto justify-center px-8 py-4 mt-24">
          <div className="flex flex-row gap-2">
            <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/lunaperegrina">
                <Icons.gitHub className="w-7 h-7 text-white" />
              </a>
            </div>
            <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <a target="_blank" href="https://www.instagram.com/eitacomoperegrina">
                <Icons.instagram className="w-7 h-7 text-white" />
              </a>
            </div>
            <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <a target="_blank" href="https://www.linkedin.com/in/lunaperegrina">
                <Icons.linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
            <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <a target="_blank" href="https://bsky.app/profile/lunaperegrina.dev">
                <Icons.bluesky className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-full inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]"></div> */}

      <section className="h-[90vh] mx-8">
        <h2 className="text-2xl sm:text-4xl font-semibold my-16">
          My Projects on GitHub
        </h2>
        <div className="xl:mx-16 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
          {/* <Project url="lunaperegrina/website-lunaperegrina" /> */}
          <Project url="lunaperegrina/awesome-bsky" />
          <Project url="lunaperegrina/twitter-banner-followers" />
          <Project url="lunaperegrina/bluesky-followers" />
          <Project url="lunaperegrina/pied-piper" />
          <Project url="lunaperegrina/tabnews-cli" />
          <Project url="lunaperegrina/task-manager-cli" />
        </div>
      </section>
      {/* <section className="h-[90vh]">
        <h2 className="text-base sm:text-4xl font-semibold my-16">
          About Me
        </h2>
      </section> */}
    </div>
  );
}

async function Project({ url }: { url: string }) {

  let data = await fetch(`https://api.github.com/repos/${url}`)
  let repo = await data.json()

  return (
    <a href="https://github.com/lunaperegrina/website-lunaperegrina"
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
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
              </svg>
            </div>
          </div>
          <div className="text-xs sm:text-base flex flex-row gap-2 mt-2">
            {repo.topics?.map((topic: string) => {
              return (
                <span className="bg-purple-900 px-3 py-1 rounded-full text-xs" key={topic}>{topic.charAt(0).toUpperCase() + topic.slice(1)}</span>
              )
            }
            )}
          </div>
        </div>
        {repo.description}
        {/* <img
          className="rounded-lg mt-2 w-full"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdefault-image&psig=AOvVaw3k3DrPCkMOJXUd3IUnTqa7&ust=1733105722421000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjXg4vAhYoDFQAAAAAdAAAAABAJ"
          alt="" /> */}
      </div >
    </a>
  );
}

