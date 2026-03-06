import Transaction from "../models/Transaction.js";



export const getBalance = async () => {
  const re = await Transaction.aggregate([
    {
      $group: {
        _id: "$type",
        totale: {
          $sum: "$amount"
        }
      }
    }
  ])



  let incom = 0;
  let expense = 0;

  re.forEach(el => {
    el._id === "incom" ? incom = el.totale : 0;
    el._id === "expense" ? expense = el.totale : 0;
  })

  return incom - expense

}

export const listTransactionsService = async (query) => {

  //filter
  let filter = {};
  if(query.type) {
    filter.type = query.type;
  }

  if(query.category) filter.category = query.category;

  // pagination
  const page = query.page;
  const limit = query.limit;
  const skip = (page - 1) * limit;

  const totale = await Transaction.countDocuments(filter)
  const transaction = await Transaction.find(filter).sort({createdAt: -1}).limit(limit).skip(skip)
  

  return {
    meta: {totale, page, limit},
    data: transaction
  }

}