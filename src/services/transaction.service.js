const Transaction = require("../models/Transaction");

const createTransaction = async (data) => {
  return await Transaction.create(data);
};

const getTransactions = async () => {
  return await Transaction.find();
};



//get balence
const getBalance = async () => {
  const re = await Transaction.aggregate([
    {
      $group: {
        _id: "$type",
        totale: {
          $sum: "$amount"
        }
      }
    }
  ]);

  let incom = 0;
  let expense = 0;

  re.forEach(el => {
    if (el._id === "incom") incom = el.totale;
    if (el._id === "expense") expense = el.totale;
  });

  return incom - expense;
};

const listTransactionsService = async (query) => {
  //filter
  let filter = {};

  if (query.type) filter.type = query.type;
  if (query.category) filter.category = query.category;
  //pagination
  const page = query.page || 1;
  const limit = query.limit || 10;
  const skip = (page - 1) * limit;

  const totale = await Transaction.countDocuments(filter);

  const transaction = await Transaction.find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip);

  return {
    meta: { totale, page, limit },
    data: transaction
  };
};

module.exports = {
  createTransaction,
  getTransactions,
  getBalance,
  listTransactionsService
};