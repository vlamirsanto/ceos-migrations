"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Vlamir",
          lastname: "Santo",
          email: "vlamirsanto@gmail.com",
          password: await bcrypt.hash("q1w2e3r4", 8),
          whatsapp_number: "+5521980610494",
          state: "RJ",
          city: "Rio de Janeiro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
