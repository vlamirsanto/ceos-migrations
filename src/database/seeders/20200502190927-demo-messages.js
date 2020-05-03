"use strict";

const faker = require("faker/locale/pt_BR");
const { Product } = require("../../app/models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var newData = [];

    const products = await Product.findAll();

    for (let i = 0; i < 100; i++) {
      const product = faker.random.arrayElement(products);

      let date = faker.date.recent();

      const seedData = {
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        order: faker.finance.account(5),
        question: faker.random.arrayElement([
          "não é possível só vai até cinco",
          "O envio seria por qual loja? Corpo perfeito?",
          "Funciona na central ecp max cell 4 gdm?",
          "quanto fica 45 metros?",
          "Olá tem número 18",
          "Serve na xre 15/15 ?",
          "acompanha cabo extensor?",
          "Tem na cor azul",
          "Boa noite, o cooler funciona através de cabo usb no celular? Qual é o consumo em relação a bateria do telefone?",
          "Tem kit sem a milha ?",
          "Acabei de comprar seis canecas e pedi película correio,  porém se estiver na cidade de são. Paulo  retiro amanhã",
          "Disponivel",
          "tem branco?",
          "Manda um link obrigado",
          "Quanto fica pada o CEP: 35.030-070",
          "Esse é aquele óleo MULTIVISCOSO SAE API-SF que vem nos manuais da Honda?",
          "Você emite nota fiscal?",
          "Qual frequência em MHz?",
          "Boa noite! Teria esse modelo com a lente verde no mesmo valor?",
        ]),
        product_id: product.id,
        created_at: date,
        updated_at: date,
      };
      newData.push(seedData);
    }

    return queryInterface.bulkInsert("messages", newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};
