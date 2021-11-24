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
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_employee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: true,
    },
  });

  return User;
};
