const { Sequelize } = require('sequelize');

const host = process.env.MYSQL_SERVICE || '127.0.0.1';

const config = {
  username: "root",
  password: "acro",
  database: "acro",
  host: host,
  port: "3306",
  dialect: "mysql",
  pool: {
    max: 50,
    min: 0
  }
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;