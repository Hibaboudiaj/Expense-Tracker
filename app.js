const express = require('express');
const app = express();

const transactionRoute = require('./src/routes/transaction.routes');

app.use(express.json()); // allows JSON body in requests

app.use('/api/v1/transactions', transactionRoute);


module.exports = app;