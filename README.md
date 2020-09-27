<p align="center">
  <img src="https://github.com/RafaelGoulartB/Proffy/raw/master/.github/logo.png" width="300"/>
</p>

<h3 align="center">
  📚 O seu jeito fácil de encontrar um professor que faça sentido para os seus objetivos.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/bprofiro/proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/bprofiro/proffy">
  
  <a href="https://github.com/bprofiro/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/bprofiro/proffy">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/bprofiro/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/bprofiro/proffy?style=social">
  </a>

  <a href="https://github.com/bprofiro/">
    <img alt="Feito pela Brenda" src="https://img.shields.io/badge/feito%20pela-Brenda-%237519C1">
  </a>
</p>

<h4 align="center">
	🚧  Em desenvolvimento 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
* [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
     * [Mobile](#mobile)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
     * [Server](#user-content-server--nodejs----typescript)
     * [Mobile](#user-content-mobile--react-native----typescript)
   * [Contribuidores](#-contribuidores)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Proffy -   Esse projeto foi desenvolvido durante a Next Level Week, organizada pela Rocketseat, evento criado com o objetivo de passar, no periodo de uma semana, conhecimentos básicos e avançados de programação, por meio do desenvolvimento de um projeto de ponta a ponta. O projeto de vez foi o Proffy.

O Proffy é um aplicativo de Marketplace de professores de programação, visando conectar alunos interessados em conhecer a linguagem JavaScript e instrutores dispostos a ensina-la. Ele foi desenvolvido com uma Rest API em NodeJs, ReactJS e React Native, tudo isso utilizando o TypeScript.

A escolha dessa Stack se deve à quantidade de conhecimento que é possível aproveitar entre as tecnologias, por conta de todas elas utilizarem apenas uma linguagem: o JavaScript, além de serem extremamente modernas e poderosas com o uso de seu ecossistema.

---

## ⚙️ Funcionalidades

- [ ] Usuários podem se cadastrar na plataforma enviando:
  - [ ] nome, email e senha

- [ ] Usuários podem se autenticar na plataforma enviando:
  - [ ] email e senha

- [ ] Usuários podem recuperar sua senha enviando:
  - [ ] email

- [ ] Dentro da plataforma os usuários podem:
  - [x] cadastrar suas aulas
  - [x] salvar seus professores favoritos
  - [x] entrar em contato com outros professores
  - [x] listar todos os professores
  - [x] filtrar professores por tecnologia e disponibilidade
  - [ ] fazer upload de imagem
  - [ ] alterar seus dados e aulas
  - [ ] alternar entre dark e light mode

---

## 🎨 Layout

### Frontend web

<p align="center">
  <img src="https://github.com/bprofiro/assets/blob/master/Proffyweb.png"/>
</p>

### Frontend mobile

<p align="center">
  <img src="https://user-images.githubusercontent.com/59852846/89736484-1b5c0900-da40-11ea-92ef-5c55d2f1648a.gif"  height="500"/>
</p>


---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/bprofiro/proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy

# Acesse a pasta do projeto do servidor
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```
---

#### 🎲 Rodando o Frontend (web)

```bash

# Clone este repositório
$ git clone https://github.com/bprofiro/proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy


# Acesse a pasta do projeto da aplicação web
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

```
---

#### 🎲 Rodando o Frontend (mobile)

```bash

# Clone este repositório
$ git clone https://github.com/bprofiro/proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy

# Acesse a pasta do projeto da aplicação web
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:19002 - acesse http://localhost:19002 

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Backend**
-   **[Node](https://nodejs.org/en/)**
-   **[SQLite](https://www.sqlite.org/index.html)**
-   **[Express](https://expressjs.com/pt-br/)**
-   **[Knex](http://knexjs.org/)**
    **[CORS](https://github.com/expressjs/cors)**

#### **Web**

-   **[React](https://pt-br.reactjs.org/)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[React Router Dom](https://reactrouter.com/web/guides/quick-start)**

#### **Mobile**

-   **[React Native](https://reactnative.dev/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Expo](https://expo.io/)**
---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor
<p align="center">
  <a href="https://github.com/bprofiro">
  <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/59852846?s=460&u=7eefe48768a2c3f95271868f85d8e61f9ffbebad&v=4" width="100px;" alt=""/>
  <br />
  <sub><b>Brenda Profiro</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago/" title="Rocketseat">🚀</a>
  <br />
</p>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Brenda Profiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/brenda-profiro/)

---