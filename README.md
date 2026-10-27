# Forge — site institucional e demonstrações

Site da **Forge**, estúdio que cria sites profissionais para empresas.
Perfil: [@forge_sitee](https://www.instagram.com/forge_sitee/).

Além da página institucional, o projeto inclui três sites completos de
demonstração. Eles têm rotas, componentes, estilos e conteúdo próprios, sem
compartilhar a identidade visual da Forge.

> Todos os negócios, pessoas, projetos, preços, depoimentos e métricas das
> demonstrações são fictícios. Os formulários fazem apenas validação local:
> nenhum dado é enviado, salvo ou processado por um backend.

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera dist/
npm run preview  # serve o build de produção
```

Com o servidor de desenvolvimento aberto, acesse:

| Página | URL |
|---|---|
| Forge | `http://localhost:5173/` |
| Nexus | `http://localhost:5173/templates/nexus` |
| Lucas Martins | `http://localhost:5173/templates/portfolio` |
| EcoTech | `http://localhost:5173/templates/ecotech` |

No `npm run preview`, a porta padrão é `4173`. As rotas usam History API; em
qualquer hospedagem estática publicada será necessário configurar fallback de
SPA para `index.html`. O repositório não inclui configuração de deploy.

## Demonstrações

| Site | Segmento | O que testar |
|---|---|---|
| **Nexus** | SaaS de gestão de projetos | Dashboard, recursos, abas interativas do produto, planos com seleção no cadastro, FAQ, formulário e menu mobile |
| **Lucas Martins** | Portfólio de desenvolvedor | Sidebar com seção ativa, quatro estudos de caso em modal, habilidades, serviços, formulário e menu mobile |
| **EcoTech** | Energia solar e sustentabilidade | Serviços que pré-selecionam o orçamento, três projetos em modal, processo, depoimentos, formulário validado e menu mobile |

Cada demonstração tem um link no topo para voltar à seção `#demos` da Forge.
Os modais fecham com `Esc`, prendem o foco e devolvem o foco ao elemento que os
abriu. As páginas têm título e descrição próprios, atualizados ao navegar.

## Estrutura

```text
src/
  main.jsx                  entrada
  App.jsx                   home da Forge + roteamento das demos
  router.js                 rotas e navegação via History API
  styles/global.css         sistema visual da Forge
  hooks/
    useReveal.js            animação de entrada ao rolar
    useActiveSection.js     seção ativa nas navegações das demos
    useDialog.js            foco preso, Esc e scroll lock dos modais
    useDocumentMeta.js      título e metadados por rota
  components/
    Header.jsx   Hero.jsx   Servicos.jsx
    Demos.jsx    Processo.jsx Diferenciais.jsx
    Planos.jsx   Contato.jsx  Footer.jsx  Logo.jsx
    ilustracoes/            SVG da forja, ícones e cena do hero
    demos/
      nexus/                NexusPage, dashboard, cadastro, ícones e CSS
      lucas/                LucasPage, contato, modais, visuais e CSS
      ecotech/              EcoTechPage, orçamento, modais, cenas e CSS
```

## Decisões técnicas

- **Sem `react-router`**: um roteador pequeno em `src/router.js` atende três
  rotas e mantém o bundle enxuto.
- **CSS independente por demo**: cada site importa seu próprio arquivo e usa um
  escopo de classes. A textura global da Forge é desligada em `body.tpl-route`.
- **Ilustrações autorais**: todos os visuais são SVG/CSS originais. Não há
  imagens de banco, dependências de ícones ou arquivos externos de mídia.
- **Formulários honestos**: os envios validam os campos, exibem uma confirmação
  demonstrativa e deixam claro que nada foi transmitido.
- **Acessibilidade**: HTML semântico, navegação por teclado, foco visível,
  rótulos e mensagens de erro associados, além de `prefers-reduced-motion`.
- **Conteúdo fictício**: marcas, nomes, projetos, números, preços e depoimentos
  são invenções para demonstração.

## Ajustes antes de publicar

- Troque o contato demonstrativo da Forge no formulário de `Contato.jsx`, que
  hoje copia a mensagem e abre o Instagram.
- Revise preços, prazos e condições comerciais em `Planos.jsx` e
  `Processo.jsx`.
- Se as demos forem publicadas como cases reais, substitua nomes, histórias,
  métricas e depoimentos fictícios por conteúdo autorizado.
- Adicione `og:image` e outros metadados sociais quando houver uma imagem de
  compartilhamento definitiva.
