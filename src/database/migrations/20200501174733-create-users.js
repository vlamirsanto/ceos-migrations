"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      whatsapp_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(60),
      },
      city: {
        type: Sequelize.STRING(80),
      },
      profileImage: {
        type: Sequelize.STRING(120),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
