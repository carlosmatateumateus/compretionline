# Compretionline

Compretionline é um ecommerce de tecnologia minimalista. O objetivo desse projeto é oferecer aos clientes uma plataforma de compras online fácil de navegar, segura e de alta qualidade, com foco na simplicidade e eficiência.

![screen1](./screens/Captura%20de%20ecrã%20de%202023-02-22%2017-59-16.png)

![screen2](./screens/Captura%20de%20ecrã%20de%202023-02-22%2017-59-35.png)

## Funcionalidades

Neste ecommerce, os utilizadores poderão:

- Pesquisar e filtrar produtos para encontrar os que melhor se adequam às suas necessidades
- Criar productos de diversas categorias e preços
- Visualizar productos

## Rodar o projecto
<ol style="display: flex;flex-direction:column; gap:10px;">
  <li>
    Crie um arquivo .env na raiz do projecto com as seguintes informações:

    VITE_API_KEY=***
    VITE_AUTH_DOMAIN=***
    VITE_PROJECT_ID=***
    VITE_STORAGE_BUCKET=***
    VITE_MESSAGING_SENDER_ID=***
    VITE_APP_ID=***
    VITE_MEASUREMENT_ID=***
    
    VITE_BACKEND_URL=http://localhost:4000
    
  </li>


  <li>Inicie sesão no firebase com o Google, depois de iniciares sesão crie um projecto no firebase.</li>

  <li>Habilite no teu projecto a autenticação e o firebase storage.</li>

  <li>
    Depois substitua o valor das seguintes variaveis pela as informações reais do app que criaste no arquivo env.

    VITE_API_KEY=***
    VITE_AUTH_DOMAIN=***
    VITE_PROJECT_ID=***
    VITE_STORAGE_BUCKET=***
    VITE_MESSAGING_SENDER_ID=***
    VITE_APP_ID=***
    VITE_MEASUREMENT_ID=***
  </li>



  <li>Rode o projecto compretionline-backend (segui os passos na documentação do <a href="https://github.com/compretionline">compretionline-backend</a/</li>

  <li>
    Execute este comando na raiz do projecto:

    npm run dev
  </li>
</ol>

## Tecnológias usadas

<br>

<div style="display: flex;gap:10px;align-items:center;">
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="30" height="30" alt="Typescript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="30" height="30" alt="React" /></a>
<a href="https://firebase.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" width="39" height="30" alt="Firebase" /></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="30" height="30" alt="TailwindCSS" /></a>
<br />