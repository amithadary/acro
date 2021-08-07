const { Sequelize, Op, Transaction } = require('sequelize');
const { Customers, Transactions } = require('../models/index');

module.exports = {
  async getTransactions(req, res, next) {
    try {
      const limit = req.params.limit;
      const page = req.params.page;

      const transactions = await 
        Transactions.findAll({
          order: [['id', 'DESC']],
          offset: ((page) * limit), limit: +limit
        })
        
      res.json(transactions);
    }
    catch(err) {
      next(err)
    }
  },
  async createTransaction(req, res, next) {
    try {
      const payload = req.body;
      await Transactions.create(payload);
      res.status(200).send();
      next();
    }
    catch(err) {
      next(err)
    }
  },
  async updateTransaction(req, res, next) {
    try {
      const payload = req.body;
      const entry = await Transactions.findByPk(payload.id);
      Object.assign(entry, payload);
      await entry.save();
      res.status(200).send();
    }
    catch(err) {
      next(err)
    }
  },
  async deleteTransaction(req, res, next) {
    try {
      const idTransaction = req.params.idTransaction;
      await 
        Transactions.destroy({
          where: {
            id: idTransaction
          }
        })

      res.status(200).send();
    }
    catch(err) {
      next(err)
    }
  },
  async getModelCount(req, res, next) {
    try {
      const count = await Transactions.count();
      res.json(count);
    }
    catch(err) {
      next(err);
    }
  }
}