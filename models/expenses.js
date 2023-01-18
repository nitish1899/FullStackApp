const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Amount: Sequelize.INTEGER,
  Item: Sequelize.STRING,
  Catg:Sequelize.STRING
});

module.exports = Expense;