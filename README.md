<p align="center">
  <img src="https://github.com/RafaelGoulartB/Proffy/raw/master/.github/logo.png" width="300"/>
</p>

<p align="center">
  <img src="https://github.com/bprofiro/assets/blob/master/Proffyweb.png"/>
</p>


## Sobre o Projeto

  Esse projeto foi desenvolvido durante a Next Level Week, organizada pela Rocketseat, evento criado com o objetivo de passar, no periodo
de uma semana, conhecimentos básicos e avançados de programação, por meio do desenvolvimento de um projeto de ponta a ponta. O projeto
de vez foi o Ecoleta.

  O Proffy é um aplicativo de Marketplace de professores de programação, visando conectar alunos interessados em conhecer a linguagem JavaScript e instrutores dispostos a ensina-la. Ele foi desenvolvido com uma Rest API em NodeJs, ReactJS e React Native, tudo isso utilizando o TypeScript.

  A escolha dessa Stack se deve à quantidade de conhecimento que é possível aproveitar entre as tecnologias, por conta de todas elas utilizarem 
apenas uma linguagem: o JavaScript, além de serem extremamente modernas e poderosas com o uso de seu ecossistema.

## Motivação social

<p align="center">
  <img src="https://user-images.githubusercontent.com/59852846/89736484-1b5c0900-da40-11ea-92ef-5c55d2f1648a.gif"  height="500"/>
</p>

  O Proffy é uma aplicação voltada para a conexão entre professores de programação (Principalmente do ecossistema JavaScript) e alunos que querem aprender. Uma funcionalidade a mais foi implementada nessa versão da aplicação proposta na NLW: o backend consome os dados da API do Github, portanto o usuário não precisará fornecer sua foto, seu nome ou uma bio, tudo será importado do seu Github e salvo no nosso banco de dados.


## Tecnologias:
  O Proffy é um aplicação complexa e, portanto muitas ferramentas foram utilizadas para o seu desenvolvimento. Entre elas estão:

- TypeScript
- Node
- React
  - React Icons
  - React Dom
  - React Router Dom
- React Native
  - React Navigation
  - React Native Gesture Handler
  - React Native Reanimated
  - React Native Screens
  - React Native Svg
  - React Native Web
- Expo
  - Expo Font
  - Expo Location
  - Expo Mail Composer
- SQLite3
- Join
- Express
- Knex
- CORS
- Axios
- Multer 
- ESlint
- Prettier

## Ambiente de Desenvolvimento

Para rodar essa aplicação em sua máquina, você precisará de um ambiente NodeJs básico instalado.

**Clonando o repositório:**

```
$ git clone https://github.com/bprofiro/proffy.git
```

### Instalando:

**Back-End**

- Digite `npm install` na pasta `backend` para instalar todas as dependências;
- Digite `npm run start` para rodar o servidor;

**Front-End** 

- Digite `npm install` na pasta `web` para instalar todas as dependências;
- Digite `npm start` para rodar o projeto;

**Mobile** 

- Digite `npm install` na pasta `mobile` para instalar todas as dependências;
- Atualize a baseURL na pasta src/services/api.js.
- Digite `expo start` para rodar o projeto.
