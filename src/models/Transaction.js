const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },

  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0.01, 'Amount must be greater than 0']
  },

  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: ['income', 'expense']
  },

  category: {
    type: String,
    required: function () {
      return this.type === 'expense';
    }
  },

  date: {
    type: Date,
    required: [true, 'Date is required']
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
