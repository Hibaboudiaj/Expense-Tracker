const service = require("../../services/transaction.service");

const create = async (req, res,next) => {
    try{
        const transaction = await service.createTransaction(req.body);
        res.status(200).json(transaction);
    }catch(err){
        console.log(err);
        
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