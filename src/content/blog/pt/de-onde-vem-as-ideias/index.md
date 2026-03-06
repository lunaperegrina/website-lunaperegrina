---
title: "De Onde Vêm as Ideias de Projetos?"
description: "Como criar repertório técnico e transformar situações do dia a dia em ideias de projetos web e mobile."
date: "Mar 06 2026"
---

Para ter ideias e criar projetos web e mobile, vocês precisam saber o que dá pra fazer. Precisam criar repertório.

Quem tem um pouco mais de experiência não passa por esse problema de "não saber o que programar" justamente porque temos um grande repertório e, não sei vocês, mas tenho ideia de projeto ou startup nova quase todo dia.

O problema passou a ser sobre ter tempo pra programar.

---

## O início do contexto

Criar projetos é sobre, no geral, encaixar peças de lego. Vocês precisam conhecer o ecossistema da linguagem/tecnologia que escolheram.

Se escolheu TypeScript e quer programar coisas pra web, você precisa conhecer bibliotecas. Vaaaarias bibliotecas.

Existem bibliotecas de:

* frameworks (TanStack Start, Astro, Vue, Svelte)
* componentes (shadcn, Ant Design, etc)
* motion (Framer Motion, etc)
* auth (better-auth, Clerk, NextAuth, etc)
* estado (Zustand, Jotai)
* 3D (Three.js)

"Luna, existem mais bibliotecas?" Isso aqui é o ecossistema TypeScript, meu pequeno gafanhoto. Certeza que existem centenas de desocupados vibecodando mais libs nesse exato instante. Para encontrar mais, pode optar por pesquisar "alternativas a tal coisa" ou "top bibliotecas pra tal coisa". Nunca se esqueçam que os `isEven` existe.

"Luna mas eu escolhi outra tecnologia/linguagem" Então você vai pesquisar sobre o ecossistema dessa tecnologia/linguagem :D

Também existem tecnologias que você pode usar em projetos mais mirabolantes, como WebAssembly, que serve para executar código de outras linguagens como C nativamente no browser.

No mundo ideal, você deveria saber como essas bibliotecas funcionam por baixo, para poder debuggar caso algum erro aconteça. Você pode usar o better-auth pra criar autenticação pro seu projeto mais rapidamente, mas deveria entender sobre cookies, JWT, sessões e tal justamente pra não ficar batendo a cabeça por horas em algo que é simples mas você não estudou (serio, entendam cookies... falo por experiencia própria...).

O melhor dos mundos nos estudos é que você aprenda a criar as suas próprias libs. Isso vai fazer de você alguém definitivamente fora da curva. Se vocês tem tempo, estudem e pratiquem direito. Mas em empresas, sim, a gente costuma usar bibliotecas pra entregar tasks mais rápido (e muitas vezes fica melhor, ja que pessoas investiram um bom tempo criando elas).

Codou uma lib legal? Publica no GitHub e no NPM. Ela não precisa ser revolucionaria nem nada, só precisa resolver um problema, mesmo que pequeno. Ou resolver problema nenhum, sendo só um meme tipo o Cowsay.

---

## Pegando o contexto

Comigo, as ideias surgem de situações cotidianas ou vendo os desejos das pessoas no Twitter.

### Situação 1: assinaturas em PDFs

Precisei assinar um PDF hoje, entrei no iLovePDF e aparentemente ele envia o meu arquivo para um servidor e depois retorna. Qual o motivo disso?

Existe WebAssembly, então será que eu poderia rodar o que eles rodam no servidor pra fazer essas conversões, compressões e assinaturas do lado do cliente, de forma privada?

Comece a pesquisa sobre as techs que provavelmente usam, como replicar isso localmente e, depois, do lado do cliente.

### Situação 2: ideia aleatória que vi no Twitter

Porque não tem um Letterboxd que junte filmes, series, jogos, animes e etc?

Você conhece auth, bibliotecas de componentes, banco de dados... mas e as informações? Como pegar de forma super rápida, ja que algo assim exige desempenho pq são milhares e milhares de obras?

Dica: pesquise sobre Elastic Search (essa não é a tech que eu usaria, só to dando um norte pra pesquisa).

### Situação 3: aplicativo de relacionamento sáfico

Não se atreva.

### Situação 4: (olhei ao meu redor e vi meu hub USB do Mac) catálogo de USBs?

Sabiam que USB é extremamente confuso? Existem várias versões, muitas vezes com o mesmo formato, mas que suportam coisas diferentes.

Existe um site que catalogue todos eles de forma simplificada e que exiba opções de compra de modelos de cabos, hubs, adaptadores e etc?

### Situação 5: (ainda olhando pro quarto) catalogo de teclados e mouses?

Sou meio obcecada por consoles portáteis chineses. O peso e o tamanho deles é MUITO importante porque vai definir o conforto.

Existe o site https://retrocatalog.com/retro-handhelds, onde você pode comparar os tamanhos de todos eles, posicionando um ao lado do outro.

E se tivesse um catalogo desses pra mouses e teclados, podendo posicionar eles, customizar o local colocando mousepad, escolhendo teclado também... Talvez em 3D usando Three.js? Login com perfil e ter batalha de setup, estilo TCG?

Não sei, um setup builder onde podemos ver de uma forma interessante?

Porra, outra ideia MUITO boa. Alguém vai fazer e ganhar uma grana com venda de código de afiliados. Quero meus créditos.

### Situação 6: (ainda olhando pro quarto) e esse microondas aqui

Um site que mostre um microondas em 3D. Todo mundo que entra no site pode apertar os botões, fazendo ele parar, adicionar tempo e etc.

Deve ter uma pilha de pratos onde 1 prato é adicionado cada vez que o tempo chega ao final.

É isso, bem bobinho pq nem toda ideia precisa resolver um problema. Alguém pode olhar pra isso e pensar em algo pra melhorar.

E se for uma airfreyer? Uma cozinha web? Todo mundo podendo apertar botões, abrir e fechar portas, torneiras e o que for? Uma bagunça linda.

Sim, as ideias só aparecem conforme vou falando sobre. Aquela teoria do pato de borracha é real, mas recomendo o Gemini Live ou ChatGPT por voz para conversar sobre as ideias ou... talvez... uma pessoa de verdade.

É, uma pessoa serve.

---

Isso é a internet, você pode criar o que você quiser contando que não acabe ferindo os direitos humanos.

Nunca se esqueça disso :D

Siga para mais.
