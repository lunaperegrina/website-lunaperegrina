'use client'

import { MotionDiv, LittleBall } from "@/components/animation";
import { Icons } from "@/components/icons";
import { useEffect } from "react";
import { UAParser } from 'ua-parser-js';

export default function Page() {

  useEffect(() => {
    // Função assíncrona dentro do useEffect
    sendMetrics({ viewLink: window.location.href });
  }, []); // O array vazio [] garante que o efeito será executado apenas uma vez


  return (
    <div>

      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
        </div>
         {/* <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"/>
        </div> */}
      </div>
     
      <div className="container mx-auto flex flex-col gap-4 items-center my-20">
        <div className="flex flex-col items-center gap-4">
          <img src="/images/luna-2.jpg" alt="Luna Peregrina icon" className="rounded-full"
            width={150} />
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Luna Peregrina
            </h1>
            <p className="my-2">
              <span className="font-semibold">Full Stack Developer</span> <br /> <span>Next, Nest, Vue, Python, PHP and more!</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-5">
            <SocialButtons link="https://github.com/lunaperegrina" Icon={<Icons.gitHub className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://bluesky.app/profile/lunaperegrina.dev" Icon={<Icons.bluesky className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://twitter.com/lunaperegrinaa" Icon={<Icons.twitter className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://www.linkedin.com/in/lunaperegrina/" Icon={<Icons.linkedin className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://www.instagram.com/eitacomoperegrina/" Icon={<Icons.instagram className="w-6 h-6 text-white" />} />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-xl">Projects</h3>
            <ButtonOfList name="Personal Website" link="https://lunaperegrina.dev" />
            <ButtonOfList name="Bluesky Followers" link="https://bluesky-followers.lunaperegrina.dev" />
            <ButtonOfList name="TabNews CLI" link="https://github.com/lunaperegrina/tabnews-cli" />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <ButtonOfList name="📄 CV (ENG) 🇺🇸" link="/cv-luna-peregrina-eng.pdf" />
            <ButtonOfList name="📄 CV (PT) 🇧🇷" link="/cv-luna-peregrina-br.pdf" />
            <ButtonOfList name="🔥 NSFW 🔥" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ButtonOfList({ name, link }: { name: string, link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      onClick={() => sendMetrics({ viewLink: link })}
      className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group" rel="noreferrer">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-96 group-hover:h-96" />
      {/* <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700" /> */}
      <span className="relative w-60 text-center">{name}</span>
    </a>
  )
}

async function sendMetrics({ viewLink }: { viewLink: string }) {
  const parser = new UAParser();
  const { os, browser, device } = parser.getResult(); // Use .getResult() corretamente

  try {
    await fetch('/api/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 'lunaperegrina',
        browser: browser.name, // Corrigido o typo "broswer" para "browser"
        os: os.name,
        device: device.model || 'Unknown', // Adicionado fallback para 'Unknown'
        viewLink
      })
    });
  } catch (error) {
    console.error('Failed to send metrics:', error);
  }
};

function SocialButtons({
  link,
  Icon
}: {
  link: string,
  Icon: JSX.Element
}) {
  return (
    <a href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendMetrics({ viewLink: link })}
      className="relative inline-flex items-center justify-center p-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-purple-500 rounded-full group-hover:w-28 group-hover:h-28" />
      <span className="relative text-center">
        {Icon}
      </span>
    </a>
  )
}