const sequelize = require('../config/sequelize.config');

const db = {
  Transactions: require('./transactions.model')(sequelize),
  Customers: require('./customers.model')(sequelize)
}

db.Transactions.belongsTo(db.Customers, {foreignKey: 'id_customer'});
db.Customers.hasMany(db.Transactions, {foreignKey: 'id_customer'});

module.exports = db