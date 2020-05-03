"use strict";

const bcrypt = require("bcryptjs");
const faker = require("faker/locale/pt_BR");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: faker.name.firstName(),
          lastname: faker.name.lastName(),
          email: faker.internet.email(),
          password: await bcrypt.hash("q1w2e3r4", 8),
          whatsapp: "+5521980610494",
          state: faker.address.stateAbbr(),
          city: faker.address.city(),
          profile_image: faker.image.avatar(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.name.firstName(),
          lastname: faker.name.lastName(),
          email: 'ceos@email.com',
          password: await bcrypt.hash("q1w2e3r4", 8),
          whatsapp: "+5521980610491",
          state: faker.address.stateAbbr(),
          city: faker.address.city(),
          profile_image: faker.image.avatar(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
