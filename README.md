# Forge — site institucional

Site informativo da **Forge**, estúdio que cria sites profissionais para
empresas. Perfil: [@forge_sitee](https://www.instagram.com/forge_sitee/).

> Instagram da empresa: *"Sites profissionais para empresas. Sua marca, mais
> forte no digital. Solicite seu orçamento."*

## Sobre o visual

Identidade desenhada do zero — **sem template**. A metáfora é a **forja**:
aço escuro, brasa laranja, textura de grão sobre toda a página e
tipografia condensada (Bebas Neue) para os títulos.

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
    Processo.jsx Diferenciais.jsx Planos.jsx
    Contato.jsx  Footer.jsx  Logo.jsx
```

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
| Chapa de aço | Hero | Reflexo quente percorre a placa |

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
