# Herefone

## Link: https://herefone.vercel.app

Site de rankings e reviews de fones TWS (True Wireless Stereo) do mercado brasileiro.

## Stack

- **React 18** + **JavaScript (JSX)**
- **Vite 6** — build tool
- **Bootstrap 5** — estilização
- **React Router 7** — roteamento
- **Lucide React** — ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Build de produção

```bash
npm run build
```

## Estrutura

```
src/
├── app/
│   ├── components/
│   │   ├── Home.jsx          # Página inicial com rows de fones
│   │   ├── EarbudCard.jsx    # Card de fone (scroll horizontal)
│   │   ├── EarbudRow.jsx     # Linha horizontal com scroll
│   │   ├── EarbudDetails.jsx # Página de detalhes do fone
│   │   ├── Ranking.jsx       # Página de rankings (tabelas)
│   │   ├── Marcas.jsx        # Página de marcas
│   │   └── Guias.jsx         # Guias de compra
│   ├── data/
│   │   └── earbuds.js        # Banco de dados dos fones
│   ├── App.jsx               # Root com RouterProvider
│   └── routes.jsx            # Definição de rotas
├── styles/
│   └── index.css             # CSS customizado (complemento ao Bootstrap)
└── main.jsx                  # Entry point
```
