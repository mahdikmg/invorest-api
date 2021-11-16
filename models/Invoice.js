// Define schema
module.exports = (Sequelize, { DataTypes }) => {
  const Invoice = Sequelize.define("Invoice", {
    // Define attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userid: {
      type: Sequelize.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    total_price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    is_paid: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  Invoice.associate = (models) => {
    Invoice.hasOne(models.User, { foreignKey: "userid" });
  };

  return Invoice;
};
