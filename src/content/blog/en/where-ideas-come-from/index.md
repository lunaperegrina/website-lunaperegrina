---
title: "Where Do Project Ideas Come From?"
description: "How to build technical repertoire and turn everyday situations into web and mobile project ideas."
date: "Mar 06 2026"
---

To have ideas and build web and mobile projects, you need to know what can be built. You need to build repertoire.

People with a bit more experience usually do not struggle with "I do not know what to code", because we have broad repertoire and, at least for me, I get startup or project ideas almost every day.

The problem became finding time to build them.

---

## The beginning of the context

Building projects is mostly about combining Lego pieces. You need to know the ecosystem of the language/technology you chose.

If you picked TypeScript and want to build for the web, you need to know libraries. A lot of libraries.

There are libraries for:

* frameworks (TanStack Start, Astro, Vue, Svelte)
* components (shadcn, Ant Design, etc)
* motion (Framer Motion, etc)
* auth (better-auth, Clerk, NextAuth, etc)
* state (Zustand, Jotai)
* 3D (Three.js)

"Luna, are there more libraries?" This is the TypeScript ecosystem, my little grasshopper. There are probably hundreds of people vibe-coding more libs right now. To find more, search for "alternatives to X" or "top libraries for X". Never forget that `isEven` exists.

"Luna, but I chose another technology/language." Then you should research that technology/language ecosystem :D

There are also technologies you can use for more ambitious projects, like WebAssembly, which lets other languages such as C run natively in the browser.

In the ideal world, you should understand how those libraries work under the hood so you can debug when something goes wrong. You can use better-auth to ship auth faster, but you should still understand cookies, JWT, sessions, and so on, so you do not lose hours on a simple problem you never studied (seriously, understand cookies... speaking from experience...).

The best study path is learning to build your own libraries. That puts you far ahead. If you have time, study and practice properly. In companies, yes, we usually use libraries to ship tasks faster (and often with better quality, since people invested serious time building them).

Built a cool library? Publish it on GitHub and NPM. It does not need to be revolutionary, it just needs to solve a problem, even a small one. Or solve nothing and just be a meme like Cowsay.

---

## Holding the context

For me, ideas come from daily situations or from seeing what people want on Twitter.

### Situation 1: PDF signatures

I needed to sign a PDF today, opened iLovePDF, and it apparently sends my file to a server and then returns it. Why?

WebAssembly exists, so could I run on the client what they run on the server for conversions, compression, and signatures, privately?

Start by researching the tech they likely use, how to replicate it locally, and then on the client side.

### Situation 2: random idea from Twitter

Why is there no Letterboxd that combines movies, series, games, anime, and more?

You know auth, component libraries, databases... but what about the data? How do you fetch it quickly when something like this needs performance because it involves thousands and thousands of titles?

Tip: research Elastic Search (this is not necessarily what I would use, I am just giving direction for your research).

### Situation 3: sapphic dating app

Do not dare.

### Situation 4: (I looked around and saw my Mac USB hub) USB catalog?

Did you know USB is extremely confusing? There are many versions, often with the same physical format, but different capabilities.

Is there a site that catalogs all of them in a simplified way and also shows buying options for cables, hubs, adapters, and so on?

### Situation 5: (still looking around the room) keyboard and mouse catalog?

I am kind of obsessed with Chinese handheld consoles. Their weight and size are VERY important because they define comfort.

There is a site, https://retrocatalog.com/retro-handhelds, where you can compare their sizes side by side.

What if we had that for mice and keyboards, where you can position them, customize the desk setup with a mousepad, choose the keyboard too... maybe in 3D with Three.js? Profile login and setup battles, TCG style?

I do not know, some kind of setup builder where we can view everything in an interesting way?

Damn, another VERY good idea. Someone will build this and make money with affiliate links. I want credits.

### Situation 6: (still looking around the room) and this microwave here

A site with a 3D microwave. Everyone on the site can press buttons to stop it, add time, and so on.

There should be a stack of plates where one plate is added every time the countdown ends.

That is it, very silly, because not every idea needs to solve a problem. Someone might look at this and think of ways to make it better.

What if it were an air fryer? A web kitchen? Everyone pressing buttons, opening and closing doors, faucets, whatever? Beautiful chaos.

Yes, ideas show up as I keep talking about them. That rubber duck theory is real, but I recommend Gemini Live or ChatGPT voice mode to talk through ideas or... maybe... a real person.

Yes, a person works too.

---

This is the internet. You can build whatever you want, as long as you are not violating human rights.

Never forget that :D

Follow for more.
