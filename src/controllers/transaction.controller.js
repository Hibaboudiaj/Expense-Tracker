const Transaction = require('./../models/Transaction');

exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        transaction: newTransaction
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  };
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({
      status: "success",
      data: {
        transactions
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
}