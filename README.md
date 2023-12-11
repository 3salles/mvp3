<p align="center">

  <h3 align="center">MVP 3</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Lincense&message=GPL&color=0000ff" alt="License" />
</p>

<p align="center">
    Este projeto foi desenvolvido para a pós graduação de Engenharia de Software da PUC-Rio.
</p>

<!-- TABLE OF CONTENTS -->
## 🗂 Table of Contents

* [Sobre o projeto](#book-sobre-o-projeto)
  * [Tecnologias](#computer-tecnologias)
* [Instalação](#bricks-instalacao)
  * [Pré-requisitos](#construction-pre-requisitos)
  * [Front-end](#lipstick-front-end)
    * [Instalando Dependências](#construction-instalando-dependencias)
    * [Configurando Front-end](#wrench-configurando-front-end)
    * [Rodando Front-end](#arrow_forward-rodando-front-end)
  * [Back-end](#file_cabinet-back-end)
    * [Instalando Dependências](#construction-instalando-dependencias)
    * [Rodando Back-end](#arrow_forward-rodando-back-end)
    * [Rodando os testes](#white_check_mark-rodando-os-testes) 
* [Licença](#page_facing_up-licenca)
* [Autora](#woman_technologist-autora)

## :book: Sobre o projeto

Este projeto foi desenvolvido para a pós graduação de Engenharia de Software da PUC-Rio. No intuito de aliar os conhecimentos aprendidos sobre machine Learning e desenvolvimento de softwares guiados por teste.

### :computer: Tecnologias

* [Vite](https://vitejs.dev)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org)
* [Chakra UI](https://chakra-ui.com/)
* [Flask](https://flask.palletsprojects.com/en/2.3.x)
* [Swagger](https://swagger.io/)
* [OpenAPI](https://www.openapis.org)
* [Sqlite](https://www.sqlite.org/index.html)
* [SQLAlchemy](https://www.sqlalchemy.org/)
* [scikit-learn](https://scikit-learn.org/stable/)

## :bricks: Instalação

Este projeto usa [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com), [Python](https://www.python.org/) e [Virtualenv](https://virtualenv.pypa.io/en/latest/), você precisa deles para construir as dependências dele.

### :construction: Pré-requisitos

Clone o repositório deste projeto:

```bash

$ git clone https://github.com/3salles/mvp3.git

```
🚨 Se você não possuir o git em sua máquina, instale [aqui](https://git-scm.com/downloads).

## :lipstick: Front-end

Entre na pasta `front` e rode os seguintes comandos:


```bash
$ cd front
```

A aplicação estará disponível em `http://localhost:5173`.

### :construction: Instalando Dependências

Dentro da pasta `front`, instale as dependências:

```bash
$ yarn install
```

### :arrow_forward: Running Front-end

Rode o seguinte comando para ver a aplicação:

```bash
$ yarn dev
```

A aplicação estará disponível em  `http://localhost:5173`.

## :file_cabinet: Back-end

### :construction: Instalando Dependências

Na pasta `back`, crie um ambiente virtual com o virtualenv e ative-o:

```bash
$ virtualenv venv
$ source venv/bin/activate
```

Com o ambiente virtual ativado, instale os requerimentos deste projeto com os seguinte comando:

```bash
$ pip install -r requirements.txt
```

### :arrow_forward: Rodando Back-end

Rode o seguinte comando para acessar a aplicação:

```bash
$ flask run -h localhost -p 5001
```

A aplicação estará disponível em `http://localhost:5001`.

### :white_check_mark: Rodando os Testes

Para rodar os testes do projeto para encontrar o melhor modelo a ser usado, use o seguinte comando:

```bash
$ pytest test.py
```

## :page_facing_up: Licença

Este projeto está sob a licença [GPL](https://github.com/3salles/eWallet-front/blob/main/LICENSE).

## :woman_technologist: Autora

[Beatriz Salles](https://github.com/3salles)

<p align="center">Developed with 💜</p>