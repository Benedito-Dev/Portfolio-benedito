# Portfólio — Benedito Bittencourt

Portfólio pessoal de desenvolvedor full stack. Uma single-page em React + TypeScript, com foco em código limpo, tipografia sóbria e interações sutis que dão vida à navegação sem competir com o conteúdo.

> Web e mobile, do banco à interface.

## ✨ Destaques

- **Hero em camadas** — fundo e figura recortada entram em velocidades diferentes, criando profundidade real na abertura.
- **Reveal on scroll** — cada seção surge em cascata conforme entra na viewport, com timing escalonado.
- **Dobra "Sobre" animada** — um personagem em vídeo reage quando a seção aparece, acompanhado de um balão de pensamento em SVG que se monta em tempo real e um título que se sublinha da esquerda para a direita.
- **Acessível por padrão** — toda animação respeita `prefers-reduced-motion`; quem prefere menos movimento vê a página estática e legível.
- **Sem dependências de UI** — animações e efeitos são CSS + um único hook de scroll (`useScrollFX`), sem bibliotecas externas.

## 🧱 Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) — build e dev server
- CSS puro (custom properties, grid, animações), sem framework de estilo

## 🗂️ Estrutura

```
src/
├── App.tsx                 # composição das seções
├── main.tsx                # entrypoint
├── index.css               # design tokens + estilos
├── hooks/
│   └── useScrollFX.ts       # reveal-on-scroll + parallax
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx             # abertura em camadas
    ├── About.tsx
    ├── AboutVisual.tsx      # vídeo + balão de pensamento
    ├── Stack.tsx
    ├── Projects.tsx         # case study (TecSIM)
    ├── Process.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── CaseVisuals.tsx
    └── icons.tsx
```

## 🚀 Rodando localmente

Requer [Node.js](https://nodejs.org/) 18+.

```bash
# instalar dependências
npm install

# servidor de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção (gera dist/)
npm run build

# pré-visualizar o build
npm run preview
```

## 📬 Contato

- **Email** — beneditobittencourtt@gmail.com
- **GitHub** — [@Benedito-Dev](https://github.com/Benedito-Dev)
- **LinkedIn** — [Benedito Bittencourt](https://www.linkedin.com/in/benedito-bittencourt-13ab1b233/)
