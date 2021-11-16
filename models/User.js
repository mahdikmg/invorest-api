// Define schema
module.exports = (Sequelize, { DataTypes }) => {
  const User = Sequelize.define("User", {
    // Define attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    is_employee: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: Sequelize.CHAR(32),
      allowNull: true,
    },
  });

  return User;
};
