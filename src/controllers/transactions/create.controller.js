const service = require("../../services/transaction.service");

const create = async (req, res) => {
    //try jareb nafd lcod ila w9a3 mochekil m,chiw l catch 
  try {
    //createTransaction function katsift bayanat l data
    const transaction = await service.createTransaction(req.body);
    //kayraj3 natija
    res.json(transaction);
  } catch (err) {
    //khatae f server
    res.status(500).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const transactions = await service.getTransactions();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { create, getAll };