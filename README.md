# Locadora - API

API para gerenciamento de locadoras, visa a automatização do processo de alugar filmes, contanto com funcionalidades como, listagem de todos os filmes cadastrados, podendo filtrar por titulo, cadastro de cliente, aluguel e devolução dos filmes.

## Iniciando o projeto

Para iniciar o projeto basta copiar o SQL do arquivo `script.sql` que se encontra na raiz so projeto. É necessário modificar o arquivo `.env` que está localizado na raiz do projeto para apontar para o banco criado localmente, atualmente esse arquivo aponta para uma base de dados no `db4free.net`.

### Instalação
Caso você não queira instalar e executar o projeto em sua máquina basta acessar [https://locadora-api-v1.herokuapp.com/v1](https://locadora-api-v1.herokuapp.com/v1) e utilizar as rotas fornecidas pela documentação.

Pelo terminal vá até a pasta do projeto clonado.

```
npm install
node run dev
```

* Para acessar a documentação da API clique [aqui](https://documenter.getpostman.com/view/2993532/S1LyTSD5?version=latest).
* OBS.: Para fazer a função de logof da API basta não enviar o token de acesso no header da requisição.

## Construido com

* [express](https://expressjs.com/pt-br/) - Framework backend para aplicações web com nodeJS
* [mysql2](https://www.mongodb.com/) - Banco de dados relacional para a persistência dos dados
* [Knex](https://www.npmjs.com/package/knex) - Um construtor de consultas multi dialeto.


## Autor

* **Mauricio Henrique** - [LinkedIn](https://www.linkedin.com/in/mauricio-henrique-1249b5154/)
