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
        const transactions = await service.getTransactions(req.body);
        res.json(transactions);
    }catch(err){
        next(err)
    }
};

const getOne = async (req, res) => {
    try{
        const transaction = await service.getTransactionById(req.params.id);
        res.json(transaction);
    }catch(err){
        next(err)
    }
};

const update = async (req, res) => {
    try{
        const transaction = await service.updateTransaction(req.params.id, req.body);
        res.json(transaction);
    }catch(err){
        next(err)
    }
};

const remove = async (req, res) => {
    try{
        await service.deleteTransaction(req.params.id);
        res.json({ message: "deleted" });
    }catch(err){
        next(err)
    }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};