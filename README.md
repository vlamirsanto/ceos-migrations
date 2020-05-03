# Cèos Controle de Migrations

# Definição

Este README.md documenta o funcionamento das Migrations e Seeders para o gerenciamento da estrutura do banco de dados do Cèos, aplicação criada para o [Megahack](https://www.megahack.com.br).

# Tecnologias

- Node.js
- Mysql

# Ambiente

Instalar os pacotes necessários

```sh
$ yarn
```

Rodando as migrations no banco de dados

```sh
$ yarn sequelize db:migrate
```

Inserindo dados "fakers" no banco de dados

```sh
$ yarn sequelize db:seed:all
```

Rollback nas migrations no banco de dados

```sh
$ yarn sequelize db:migrate:undo
```

# Pacotes

| Pacote        | Documentação                             |
| ------------- | ---------------------------------------- |
| bcryptjs      | https://github.com/dcodeIO/bcrypt.js     |
| dotenv        | https://github.com/motdotla/dotenv       |
| faker         | https://github.com/marak/Faker.js/       |
| mysql2        | https://github.com/sidorares/node-mysql2 |
| sequelize     | https://github.com/sequelize/sequelize   |
| sequelize-cli | https://github.com/sequelize/cli         |
