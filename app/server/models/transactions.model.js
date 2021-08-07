const { DataTypes, Model, Sequelize } = require('sequelize');

module.exports = sequelize => {
  const model = sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_customer: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
    },
    total_price: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    cc_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cc_number: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'transactions',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
    deletedAt: 'deleted_at'
  })
  
  return model;
}