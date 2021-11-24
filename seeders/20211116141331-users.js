"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          username: "customer@customer.customer",
          password:
            "$2a$08$Ze1sk6/aL.RCuvmwYh6y/uS.MMR5l1Wxt2d22k4pD.YA82Inmx5Ue", //123456789
          is_admin: false,
          is_employee: false,
        },
        {
          username: "admin@admin.admin",
          password:
            "$2a$08$Ze1sk6/aL.RCuvmwYh6y/uS.MMR5l1Wxt2d22k4pD.YA82Inmx5Ue",
          is_admin: true,
          is_employee: false,
        },
        {
          username: "employee@employee.employee",
          password:
            "$2a$08$Ze1sk6/aL.RCuvmwYh6y/uS.MMR5l1Wxt2d22k4pD.YA82Inmx5Ue",
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
