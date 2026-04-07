src/
├── assets/ # imagens, ícones
├── components/ # componentes reutilizáveis
│ ├── Header/
│ │ ├── Header.jsx
│ │ └── Header.module.css
│ └── Footer/
│ ├── Footer.jsx
│ └── Footer.module.css
├── pages/ # uma pasta por página
│ ├── Home/
│ ├── Product/
│ └── Cart/
├── data/ # produtos mockados (nosso "banco de dados" por ora)
│ └── products.js
├── context/ # estado global do carrinho
│ └── CartContext.jsx
├── App.jsx # rotas
└── main.jsx # entry point
