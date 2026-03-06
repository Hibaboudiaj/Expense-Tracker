const express = require('express');
const transactionController = require('./../controllers/transaction.controller');
const statsController = require('../controllers/transactions/stats.controller');

const router = express.Router();

router
  .route('/')
  .post(transactionController.createTransaction)
  .get(transactionController.getTransactions);
router.route('/stats').get(statsController.MonthlyStats);

module.exports = router;