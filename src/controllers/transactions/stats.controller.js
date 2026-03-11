const Transactions = require('./../../models/Transaction.js');
exports.MonthlyStats = async (req, res) => {
  try {
    const { month, year } = req.query;
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0, 23, 59, 59);
    const stats = await Transactions.aggregate([
      {
        $match: { date: { $gte: start, $lte: end } }
      },
      {
        $group: {
          _id: { type: "$type", category: "$category" },
          total: { $sum: "$amount" }
        }
      }
    ])
    let income = 0;
    let expense = 0;
    let categories = [];
    stats.forEach((item) => {
      if (item._id.type === "income") income += item.total;
      if (item._id.type === "expense") {
        expense += item.total;
        categories.push({
          category: item._id.type,
          total: item.total
        })
      };
    })
    const categoryStats = categories.map((item) => ({
      category: item.category,
      total: item.total,
      percentage: Number(((item.total / expense) * 100).toFixed(2))
    }))
    res.json({
      status: 'success',
      month: Number(month),
      year: Number(year),
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
      categories: categoryStats
    })
  } catch (err) {
    console.log(err);
  }
}