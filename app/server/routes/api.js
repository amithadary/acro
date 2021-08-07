const express = require('express');
const router = express.Router();

const transactionsRoutes = require('./transactions.routes');

router.use('/transactions', transactionsRoutes);

module.exports = router;
