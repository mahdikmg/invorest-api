const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const Sequelize = require("sequelize");
let config = require("../config/config.json")[process.env.NODE_ENV];
const db = {};
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database synchronized");
//   })
//   .catch(() => {});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
