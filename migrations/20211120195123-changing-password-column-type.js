"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.changeColumn(
          "User",
          "password",
          {
            type: Sequelize.CHAR(60),
            allowNull: true,
          },
          {
            transaction,
          }
        ),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.changeColumn(
          "User",
          "password",
          {
            type: Sequelize.CHAR(32),
            allowNull: true,
          },
          {
            transaction,
          }
        ),
      ]);
    });
  },
};
