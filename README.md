# Luna Peregrina - site pessoal + currículo ATS

Este repositório é o código do meu site pessoal. Ele reúne minha página inicial, links, posts, projetos e experiências em um site estático feito com [Astro](https://astro.build).

você pode clonar o projeto, trocar as minhas informações pelas suas e criar o seu próprio site pessoal com geração de currículo em PDF, em português e inglês, a partir dos mesmos dados do conteúdo.

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

2. Instale as dependências.

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

> Para gerar os PDFs, você precisa ter um compilador LaTeX instalado, como `pdflatex` ou `tectonic`. Se não tiver, o build do site continua funcionando, mas a geração dos PDFs pode ser ignorada ou falhar se o modo estrito estiver ativo.

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
