# Forge — site institucional

Site informativo da **Forge**, estúdio que cria sites profissionais para
empresas. Perfil: [@forge_sitee](https://www.instagram.com/forge_sitee/).

> Instagram da empresa: *"Sites profissionais para empresas. Sua marca, mais
> forte no digital. Solicite seu orçamento."*

## Sobre o visual

Identidade desenhada do zero — **sem template**. A metáfora é a **forja**:
aço escuro, brasa laranja, textura de grão sobre toda a página e
tipografia condensada (Bebas Neue) para os títulos. A marca é um
**martelo laranja em movimento** batendo numa barra de aço.

| Token | Uso |
|-------|-----|
| `--aco-900` a `--aco-300` | Escala de aço (fundos, bordas, texto secundário) |
| `--brasa-500` / `--brasa-400` | Destaques, hover, ícones |
| `--calor` | Gradiente de brasa usado nos botões e palavras-chave |

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
  main.jsx              entrada
  App.jsx               composição das seções
  styles/global.css     sistema visual (tokens, grão, botões)
  hooks/useReveal.js    animação de entrada ao rolar
  components/
    Header.jsx   Hero.jsx   Servicos.jsx
    Portfolio.jsx Processo.jsx Diferenciais.jsx
    Planos.jsx   Contato.jsx  Footer.jsx  Logo.jsx
    ilustracoes/
      CenaForja.jsx   bigorna, martelo e metal (hero)
      Icones.jsx      ícones de serviços e etapas
      MockupSite.jsx  miniaturas de sites (portfólio)
    templates/
      TemplatePreview.jsx  visualizador full-screen (desktop/tablet/celular)
      previewContext.js    contexto compartilhado de prévia
      BrasaTemplate.jsx    demo de restaurante (+ brasa.css)
      VittaTemplate.jsx    demo de clínica (+ vitta.css)
      NorteTemplate.jsx    demo de moda (+ norte.css)
```

## Templates interativos

O portfólio abre três demonstrações **navegáveis** em um visualizador
full-screen. Elas são pontos de partida conceituais, não sites prontos:
cada uma tem identidade, conteúdo e fluxo próprios para mostrar o nível de
acabamento que a Forge entrega.

| Demo | Segmento | O que dá para testar |
|---|---|---|
| **Brasa** | Restaurante | Menu por categorias, ficha do prato e reserva com validação |
| **Clínica Vitta** | Saúde | Especialidades em acordeão e agendamento em 3 etapas |
| **Ateliê Norte** | Moda | Coleção com filtros, ficha da peça, tamanhos, sacola e checkout simulado |

O visualizador alterna entre **desktop (1280×800)**, **tablet (834×1112)**
e **celular (390×844)**, com escala automática, foco preso no modal e
fechamento por `Esc`. Os templates usam `container-type: inline-size` e
`@container` para responder ao tamanho da prévia, não só ao viewport.

Ao clicar em **Usar este template**, a página dispara o evento
`forge:template`; o formulário de contato mostra o template escolhido e
inclui essa informação na mensagem copiada para o Instagram.

## Desenhos e ilustrações

Tudo é vetorial e autoral — nenhuma foto de banco de imagens.

| Peça | Onde | Técnica |
|---|---|---|
| Marca (logo) | Header, footer e favicon | SVG (`Logo.jsx` + `public/spark.svg`): martelo laranja, barra de aço e linhas de impacto |
| Cena de forja | Hero | SVG (`CenaForja.jsx`) com martelo animado, metal pulsando e faíscas |
| Ícones de serviço | Serviços | SVG em linha (`IconeServico`), um desenho por serviço |
| Ícones de etapa | Processo | SVG em linha (`IconeEtapa`): chama, bigorna, martelo, têmpera, entrega |
| Estudos de layout | Portfólio | Miniaturas em HTML/CSS (`MockupSite.jsx`) + três demos interativas em `templates/` |
| Bigorna d'água | Rodapé | SVG (`BigornaMini`) em baixa opacidade |

Os mockups e as demos são **estudos conceituais**, não cases de clientes. Para
trocar por trabalhos reais, substitua o array `ESTUDOS` em `Portfolio.jsx`.

## Animações

Todas seguem a metáfora da forja e são desligadas/estabilizadas em
`prefers-reduced-motion`.

| Efeito | Onde | Como funciona |
|---|---|---|
| Brasas subindo | Hero | Canvas 2D (`ForgeSparks.jsx`), ~70 partículas com deriva senoidal |
| Faíscas de martelada | Página toda | Canvas fixo (`ClickSparks.jsx`), explosão a cada clique |
| Halo de calor no cursor | Desktop | `EmberCursor.jsx` com interpolação (lerp) via rAF |
| Barra de temperatura | Topo | `ScrollProgress.jsx` — `scaleX` conforme o scroll |
| Metal líquido | Títulos com `em` | Gradiente animado no `background-position` |
| Título "esfriando" | Hero | Linhas entram com blur + subida, em cascata |
| Tilt 3D + brilho | Planos | `Tilt.jsx` inclina o card e move o glare com o mouse |
| Linha aquecendo | Processo | Bolinhas e linha acendem quando a etapa entra na tela |
| Brilho varrendo | Botões | `::after` desliza no hover |
| Cena de forja | Hero | `CenaForja.jsx`: martelo martelando, metal respirando, faíscas piscando |
| Ícones desenhados | Serviços / Processo | SVG em linha que acende no hover |

## O que ajustar antes de publicar

- **Contato** — o formulário de `Contato.jsx` copia a mensagem e abre o
  Instagram. Se quiser um canal direto (WhatsApp/e-mail), troque a
  constante `INSTAGRAM` ou adicione um novo link.
- **Planos** — os planos em `Planos.jsx` têm preço fechado (R$ 350–500,
  R$ 800 e R$ 1.200 por projeto) e uma taxa separada de **R$ 79/mês** de
  manutenção, que aparece no bloco `.plano-mensal`. Troque os valores
  alterando `PLANOS` e o texto do bloco mensal.
- **Prazos** — os prazos em `Processo.jsx` (Dia 1–2, 3–8...) são
  referência; ajuste ao ritmo real do estúdio.
- **SEO** — `index.html` tem título e meta description. Configure
  `og:image` quando houver imagem de compartilhamento.
