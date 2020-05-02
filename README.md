# Cèos Controle de Migrations

# Definição

Este README.md documenta o funcionamento das Migrations para o gerenciamento da estrutura do banco de dados do Cèos.

# Tecnologias

- Node.js

# Versão

> Dot.Lib version 1.0.0

# Ambiente

Instalar os pacotes necessários

```sh
$ yarn
```

Rodando as migrations no banco de dados

```sh
yarn sequelize db:migrate
```

Rollback nas migrations no banco de dados

```sh
yarn sequelize db:migrate:undo
```

# Pacotes

| Pacote        | Documentação                             |
| ------------- | ---------------------------------------- |
| dotenv        | https://github.com/motdotla/dotenv       |
| mysql2        | https://github.com/sidorares/node-mysql2 |
| sequelize     | https://github.com/sequelize/sequelize   |
| sequelize-cli | https://github.com/sequelize/cli         |
