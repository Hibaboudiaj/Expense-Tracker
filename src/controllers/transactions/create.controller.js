const service = require("../../services/transaction.service");

const create = async (req, res,next) => {
    try{
        const transaction = await service.createTransaction(req.body);
        res.json(transaction);
    }catch(err){
        next(err)
    }
};

const getAll = async (req, res,next) => {
    try{
        const transactions = await service.getTransactions();
        res.json(transactions);
    }catch(err){
        next(err)
    }
};

module.exports = {
  create,
  getAll,
};