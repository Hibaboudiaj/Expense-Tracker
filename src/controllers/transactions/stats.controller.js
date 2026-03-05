const Transactions = require('./../../models/Transaction');

exports.MonthlyStats = async (req, res) => {
  try {
    const month = parseInt(req.query.month);
    const year = parseInt(req.query.year);

    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 1)

    const transactions = await Transactions.find({
      date: {
        $gte: startDate,
        $lt: endDate
      }
    });

    let totalIncome = 0;
    let totalExpenses = 0;
    let categoryTotals = {};

  } catch (err) {
    console.log(err);
  }
}