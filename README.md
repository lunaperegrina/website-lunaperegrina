# Site pessoal + currículo ATS

Este repositório é o código do meu site pessoal. Ele reúne minha página inicial, links, posts, projetos e experiências em um site estático feito com [Astro](https://astro.build).

você pode clonar o projeto, trocar as minhas informações pelas suas e criar o seu próprio site pessoal com geração de currículo em PDF, em português e inglês, a partir dos mesmos dados do conteúdo.

## Pré-requisitos

Para rodar o site localmente, você precisa ter:

- [Node.js](https://nodejs.org/) 20.19 ou superior, com `npm`.

Para gerar os PDFs do currículo, você também precisa ter um compilador LaTeX disponível no terminal. O caminho recomendado é instalar o [Tectonic](https://tectonic-typesetting.github.io/book/latest/installation/), porque ele é mais leve que uma distribuição LaTeX completa e o script já procura pelo comando `tectonic`.

Instale o Tectonic conforme seu sistema:

### macOS

Com Homebrew:

```sh
brew install tectonic
```

### Windows

No PowerShell:

```powershell
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://drop-ps1.fullyjustified.net'))
```

Depois mova o `tectonic.exe` gerado para uma pasta que esteja no `PATH`, para que o comando `tectonic` funcione em qualquer terminal.

### Linux

Em distribuições Unix-like, incluindo Linux, você pode usar o instalador oficial:

```sh
curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net | sh
sudo install -m 755 tectonic /usr/local/bin/tectonic
```

No Arch Linux, também dá para instalar pelo pacote oficial:

```sh
sudo pacman -S tectonic
```

Em qualquer sistema, confirme a instalação com:

```sh
tectonic --version
```

Se você preferir usar uma distribuição LaTeX completa, o script também aceita `pdflatex`, disponível em ferramentas como MacTeX, TeX Live ou MiKTeX.

## O que vem pronto

- Site pessoal rápido, estático e simples de manter.
- Conteúdo em Markdown/MDX para posts, projetos, experiências, habilidades, educação e liderança.
- Dados centrais de perfil em `src/data/cv-data.json`.
- Currículos gerados automaticamente em PDF:
  - `public/luna-peregrina-cv-pt.pdf`
  - `public/luna-peregrina-cv-en.pdf`
- Templates em LaTeX pensados para um currículo limpo e amigável para ATS.
- Suporte a rotas em português e inglês.
- RSS, sitemap, SEO básico e metadados OpenGraph.

## Como usar como base para o seu site

1. Clone este repositório.

```sh
git clone <url-do-repositorio>
cd website-lunaperegrina
```

2. Instale as dependências do projeto.

```sh
npm install
```

3. Rode o projeto localmente.

```sh
npm run dev
```

O site ficará disponível em `http://localhost:4321`.

4. Troque as informações da Luna pelas suas.

Comece por estes arquivos:

| Arquivo/pasta | O que editar |
| :-- | :-- |
| `src/data/cv-data.json` | Nome, e-mail, localização, redes sociais e seções que aparecem no currículo |
| `src/content/work/` | Experiências profissionais em português e inglês |
| `src/content/skills/` | Habilidades técnicas, idiomas e outras competências |
| `src/content/education/` | Formação, cursos e certificações |
| `src/content/leadership/` | Atividades de liderança, comunidade ou voluntariado |
| `src/content/projects/` | Projetos exibidos no site |
| `src/content/blog/` | Posts do blog |
| `src/i18n/ui.ts` | Textos fixos da interface |
| `src/consts.ts` | Configurações gerais do site |
| `astro.config.mjs` | URL final do seu site em `site` |

5. Ajuste os arquivos do currículo, se quiser mudar o visual.

Os templates ficam em:

- `src/lib/latex/curriculo.tex`
- `src/lib/latex/resume.tex`

Na maior parte dos casos, você só precisa mudar os dados e conteúdos Markdown. Mexa nos templates apenas se quiser alterar a estrutura visual do PDF.

## Gerando o currículo

O currículo é montado a partir de:

- `src/data/cv-data.json`
- `src/content/work/`
- `src/content/skills/`
- `src/content/education/`
- `src/content/leadership/`

Para gerar os PDFs:

```sh
npm run build:resume
```

Para gerar currículo e site de produção juntos:

```sh
npm run build
```

> Se `tectonic` ou `pdflatex` não estiver disponível no terminal, o script pula a geração dos PDFs. Para transformar isso em erro de build, rode com `RESUME_PDF_STRICT=1`.

## Comandos úteis

| Comando | Ação |
| :-- | :-- |
| `npm install` | Instala as dependências |
| `npm run dev` | Inicia o servidor local em `localhost:4321` |
| `npm run build:resume` | Gera os PDFs do currículo |
| `npm run build` | Gera currículo e site de produção em `dist/` |
| `npm run preview` | Visualiza o build localmente |
| `npm run deploy` | Faz build e deploy via Wrangler |

## Dicas para personalizar bem

- Mantenha o currículo objetivo: ATS costuma lidar melhor com texto claro, títulos previsíveis e pouca decoração.
- Escreva experiências com impacto, tecnologia usada e resultado quando possível.
- Crie as versões em português e inglês do conteúdo profissional dentro de `src/content/work/pt` e `src/content/work/en`.
- Depois de trocar o nome do projeto, atualize também `package.json`, `wrangler.jsonc` e os caminhos dos PDFs se quiser remover qualquer referência à Luna.
- Antes de publicar, rode `npm run build` para verificar se site e currículo continuam gerando corretamente.

## Créditos

Este site nasceu a partir do template de blog do Astro e evoluiu para o meu site pessoal com geração de currículo.

O tema original se inspira no [Bear Blog](https://github.com/HermanMartinus/bearblog/), e os templates LaTeX de currículo referenciam o projeto [resume-template](https://github.com/celiobjunior/resume-template).
