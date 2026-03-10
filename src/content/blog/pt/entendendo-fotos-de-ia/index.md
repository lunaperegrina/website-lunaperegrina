---
title: "Como imagens geradas por IA funcionam (e por que algumas são fáceis de identificar)"
description: "Uma explicação simples de como modelos como Stable Diffusion geram imagens e por que certas fotos que circulam na internet são claramente produzidas por inteligência artificial."
date: "Aug 14 2023"
---

# Como imagens geradas por IA funcionam

Nos últimos anos, imagens geradas por inteligência artificial começaram a aparecer **em todos os lugares da internet**.

Memes, fotos falsas, retratos hiper-realistas, montagens políticas — muita coisa que parece fotografia hoje pode ter sido criada por um modelo de IA.

Neste texto vou explicar **de forma simples** como esse processo funciona e por que algumas dessas imagens são relativamente fáceis de identificar.

> Observação: não sou pesquisadora de IA. Isso é apenas uma explicação baseada em curiosidade e experimentação prática.

## O que é Stable Diffusion?

Um dos modelos mais conhecidos para geração de imagens é o **Stable Diffusion**.

Ele é um modelo de **aprendizado profundo (deep learning)** capaz de gerar imagens a partir de texto.

Esse tipo de sistema é chamado de **text-to-image (TXT2IMG)**.

Você fornece um prompt como:

```

a cyberpunk city at night with neon lights

```

e o modelo gera uma imagem correspondente.

É um conceito semelhante ao funcionamento de modelos de linguagem (como o ChatGPT), mas em vez de **texto → texto**, temos **texto → imagem**.

## Outros modos de uso

Além de **TXT2IMG**, esses modelos também podem funcionar de outras formas.

Os dois modos mais comuns são:

### Text-to-Image (TXT2IMG)

Entrada: texto  
Saída: imagem completamente nova.

### Image-to-Image (IMG2IMG)

Entrada: uma imagem + um prompt  
Saída: uma nova imagem **baseada na original**, mas modificada.

Esse segundo modo é muito usado para transformar imagens existentes.

## O papel do ruído

Modelos de difusão funcionam a partir de um conceito central: **ruído**.

Durante o treinamento, o modelo aprende a:

1. adicionar ruído progressivamente a imagens
2. depois **remover esse ruído para reconstruir uma imagem plausível**

Na geração de imagens, o processo é invertido.

O modelo começa com algo próximo de **ruído aleatório** e gradualmente transforma esse ruído em uma imagem coerente baseada no prompt.

## Como o modo IMG2IMG funciona

No modo **image-to-image**, a imagem original é parcialmente transformada em ruído.

Depois disso, o modelo reconstrói a imagem guiado pelo prompt fornecido.

O nível de transformação é controlado por um parâmetro chamado **denoise strength**.

## O controle de denoise

O parâmetro **denoise** controla o quanto da imagem original será preservado.

- **denoise baixo** → a imagem final fica muito parecida com a original
- **denoise alto** → a imagem pode mudar bastante

Isso permite coisas como:

- alterar estilo artístico
- modificar expressões ou poses
- transformar fotos em pinturas
- gerar variações de uma imagem existente

## Por que algumas imagens parecem "claramente IA"?

Quando uma imagem é gerada a partir de outra (por exemplo, usando IMG2IMG), o modelo frequentemente mantém:

- **silhuetas**
- **estrutura do rosto**
- **posição de objetos**

Isso acontece porque o modelo ainda está usando a **geometria da imagem original como base**.

Em muitos casos, a imagem original é usada apenas como **estrutura**, enquanto o resto é reconstruído pela IA.

## Outras técnicas

Além do método básico de difusão, existem técnicas complementares como:

- **Textual Inversion**
- **DreamBooth**
- **LoRA**

Essas técnicas permitem treinar o modelo para reproduzir:

- estilos específicos
- personagens
- rostos
- identidades visuais

Isso torna as imagens ainda mais convincentes.

## O problema da verificação

Hoje já é **difícil distinguir imagens reais de imagens geradas por IA**, especialmente quando:

- há pós-processamento
- o modelo foi bem treinado
- a resolução é alta

Com o avanço desses modelos, esse problema tende a se tornar ainda mais complexo.