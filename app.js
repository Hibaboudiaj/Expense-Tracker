const express = require('express')
const app = express()

const transactionRoute = require('./src/routes/transaction.routes')

app.use(express.json())

app.use('/api/v1/transactions', transactionRoute)

module.exports = app 