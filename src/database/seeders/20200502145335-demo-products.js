"use strict";

const faker = require("faker/locale/pt_BR");
const { User } = require("../../app/models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var newData = [];

    const user = await User.findOne();

    for (let i = 0; i < 10; i++) {
      const seedData = {
        code: faker.finance.account(5),
        name: faker.commerce.productName(),
        price: faker.commerce.price(10, 100, 2),
        stock: faker.finance.amount(0, 10),
        color: faker.commerce.color(),
        size_w: faker.random.number(100),
        size_h: faker.random.number(100),
        image: faker.image.technics(),
        user_id: user.id,
        created_at: new Date(),
        updated_at: new Date(),
      };
      newData.push(seedData);
    }

    return queryInterface.bulkInsert("products", newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
