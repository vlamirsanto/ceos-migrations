"use strict";

const faker = require("faker/locale/pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = [];

    for (let i = 0; i < 5; i++) {
      const seedData = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.technics(),
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
