const express = require('express');
const transactionController = require('./../controllers/transaction.controller');

const router = express.Router();

router
  .route('/')
  .post(transactionController.createTransaction)
  .get(transactionController.getTransactions);

// router
//   .route('/stats')
//   .get(transactionController.getMonthlyStats);

module.exports = router;