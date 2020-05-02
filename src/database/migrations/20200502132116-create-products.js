"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("products", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(120),
                allowNull: false,
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING(120),
                allowNull: false,
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
        return queryInterface.dropTable("products");
    },
};
