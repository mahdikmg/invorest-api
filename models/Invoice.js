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
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    is_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Invoice.associate = (models) => {
    Invoice.belongsTo(models.User, { foreignKey: "userid" });
  };

  return Invoice;
};
