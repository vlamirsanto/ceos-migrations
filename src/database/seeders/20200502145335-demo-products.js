"use strict";

const faker = require("faker/locale/pt_BR");
const User = require("../../app/models/User");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var newData = [];

    for (let i = 0; i < 10; i++) {
      const seedData = {
        code: faker.finance.account(5),
        name: faker.commerce.productName(),
        price: faker.commerce.price(10, 100, 2),
        stock: faker.finance.amount(0, 10),
        color: faker.commerce.color(),
        sizeW: faker.random.number(100),
        sizeH: faker.random.number(100),
        image: faker.image.technics(),
        // user_id: await User.findAll({ limit: 1 }).id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      newData.push(seedData);
    }

    return queryInterface.bulkInsert("products", newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
