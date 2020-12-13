<h1 align="center"> Certifica Aí </h1>

![Certifica Aí](./images/certificai.jpg)

<p align="justify"> Sabe aquele curso que você fez e não tem ideia de onde guardou o certificado? Você poderá guardar eles em um único lugar, simples e de fácil acesso! </p>

### PROJETO FINAL {Reprograma} 

O certifica aí é um projeto desenvolvido para a conclusão do bootcamp de desenvolvimento back-end da {Reprograma} com o MINAs do Porto Digital. Seu objetivo é de armazenar certificados de cursos em um único lugar, tem o intuito de ser uma plataforma de fácil utilização, podendo listar todos os cursos, quais os cursos feitos em determinado ano ou por área.

### O que se pode fazer no certifica aí?  

- [X] Login para cadastro na plataforma
- [X] Cadastrar certificados
- [X] Listar todos os certificados
- [X] Listar todos os certificados por ID
- [X] Listar todos os certificados por área
- [X] Listar todos os certificados por ano
- [X] Alterar dados do certificado por ID
- [X] Deletar um certificado por ID

### Instruções para utilização da API

- [x] Faça um fork desse [repositório](https://github.com/marilliaalves/certifica-ai) no seu GitHub
- [x] Clone o repositório para sua máquina local - `git clone <url-do-fork-repositório>`
- [x] Entre na pasta `<cd certifica-ai>` e crie sua branch `<git checkout -b sua_branch>`  
- [x] Instale as dependências `<npm install>`
- [x] Para inicializar o server dê `<npm start>`
- [x] Será executado na porta `8080`
- [x] Para fazer o commit após contribuições utilize `<git commit -m 'o que foi feito'>`
- [x] Suba as contribuições através do `<git push origin sua_branch>`

### Tecnologias usadas
* Git/GitHub
* Node.JS
* MongoDB
* Heroku

### Rotas da API

### Participante: 
|ROTA|MÉTODO UTILIZADO|FUNCIONALIDADE
| -------- | -------- | -------- 
|`/certifies`|`GET`|`Retorna todos os certificados`
|`/certifies/:id`|`GET`|`Retorna certificados por ID`
|`/certifies/year/:year`|`GET`|`Retorna certificados por ANO`
|`/certifies`|`POST`|`Inclui novos certificados`
|`/certifies/:id`|`PUT`|`Altera certificados por ID`
|`/certifies/:id`|`DELETE`|`Exclui certificados por ID`

