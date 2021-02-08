<<<<<<< HEAD
# NLW-02-Proffy
=======
# Next Level Week-02-Proffy

### Sobre o Projeto

O projeto que realizamos durante essa semana chama-se **proffy,** ele é uma plataforma que ajuda aos usuários a teram conexões, o aluno pode estudar com um professor e conectar com o mesmo via whatsapp. 

### Pré-requisitos

Para que o projeto possa rodar em sua máquina e necessário ter os seguintes pacotes instalados:

- Git-Hub
- Nodejs
- Yarn/ Npm
- Expo
- React
- React Native

### Tecnologias

Usamos as seguintes tecnologias para realização desse projeto:

- NodeJs
- React
- React Native
- Knex - SQL query builder

### Clonando o Projeto

```jsx
git clone https://github.com/mauriani/Next-Level-Week-02.git
```

Após isso para iniciar as aplicações.

- Server

```jsx
cd server
yarn start
```

- Web

```jsx
cd web
yarn start
```
### Iniciando o projeto Server

Para iniciar o nosso serve foi necessário ir na nossa pasta raiz.

```jsx
cd NextLevelWeek-02
```

Depois criamos uma pasta chamada server.

```jsx
mkdir server
```

Agora vamos navegar até a pasta é dá o seguinte comando:

```jsx
yarn init -y
```

Esse comando será responsável pelo nosso package.Json.

### Knex

Para criar o nosso server, instalamos o Knex. Mas o que é ? O Knex.js é um construtor de consultas JavaScript para bancos de dados relacionais. Em sua documentação você pode encontrar o bancos que podem ser usado juntamente com ele.

Você pode escrever uma consulta com o SQL assim:

```jsx
SELECT id 
FROM pessoa 
WHERE first_name = 'foo'
```

Mas com o Knex ela pode fica simplifica dessa forma:

```jsx
knex ('pessoa') 
  .where ({ 
    first_name: 'foo' 
  }) 
  .select ('id')
```

Em nosso projeto para usar ele vamos instalar o knex e o banco que desejamos usar, no nosso caso escolhemos o SQLite3.

```jsx
// usando yarn

yarn add knex sqlite3 

// usando npm
npm install knex --save
npm install sqlite3
```

O nosso projeto foi estruturado usando arquitetura mvc.

### Funcionalidades

**Conexões**

- Rota de listagem de conexões realizadas (operação de soma dos registros);
- Rota de criação de nova conexão (ativada quando clicarem em **Entrar em contato**).

**Aulas**

- Rota de listagem de aulas [filtros por matéria, dia da semana e hora];
- Rota de Criação de nova aula.


### Iniciando o Projeto Web

Para criar o nosso projeto temos que copiar o seguinte comando e colar no terminal.

```jsx
yarn create react-app nome-da-aplicacao --template typescript
```

Esse projeto foi desenvolvido com o conceito de responsividade, onde a nossa aplicação não perde tanto do layout no mobile.
>>>>>>> 7e4bdbe049405863465895cc83592391e00402e8
