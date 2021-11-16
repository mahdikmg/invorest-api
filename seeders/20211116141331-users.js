"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          username: "customer@customer.customer",
          password: "123456789",
          is_admin: false,
          is_employee: false,
        },
        {
          username: "admin@admin.admin",
          password: "123456789",
          is_admin: true,
          is_employee: false,
        },
        {
          username: "employee@employee.employee",
          password: "123456789",
          is_admin: false,
          is_employee: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
