import Image from "next/image";
import { House, File, Info, Contact, Heart } from "lucide-react"
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
    <div>
      {/* <nav className="flex flex-row justify-between m-4 max-w-7xl mx-auto border-b pb-4 px-4">
        <BaseButton>
          <Heart className="w-4 h-4" /> lunaperegrina
        </BaseButton>
        <ul className="flex gap-8 p-3 rounded-full border">
          <li>
            <a href="" className="flex gap-2 items-center hover:text-purple-500 transition duration-300">
              <House className="w-4 h-4" />
              Home
            </a>
          </li>
          <li>
            <a href="" className="flex gap-2 items-center hover:text-purple-500 transition duration-300">
              <File className="w-4 h-4" />
              My Projects
            </a>
          </li>
          <li>
            <a href="" className="flex gap-2 items-center hover:text-purple-500 transition duration-300">
              <Info className="w-4 h-4" />
              About
            </a>
          </li>
        </ul>
        <BaseButton>
          <Contact className="w-4 h-4" />
          Contact
        </BaseButton>
      </nav> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> <div className="flex flex-col justify-center text-center h-[90vh]">
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
      </div>
      <div className="flex max-w-7xl mx-auto justify-center px-8 py-4">
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
  );
}

