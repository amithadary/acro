const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactions.controller');

router.get('/all/:page/:limit',
  controller.getTransactions
);

router.route('/transaction/')
.post(
  controller.createTransaction
)
.put(
  controller.updateTransaction
)
router.delete('/transaction/:idTransaction',
  controller.deleteTransaction
)

router.get('/count',
  controller.getModelCount
);

module.exports = router;