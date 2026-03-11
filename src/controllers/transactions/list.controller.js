const { model } = require("mongoose");
const listT = require("../../services/transaction.service.js");


const listTransaction = async (req, res) => {
    try {
        const {meta, data} = await listT.listTransactionsService(req.query)

        res.status(200).json({
            success: true,
            message: "Transactions fetched successfully",
            meta,
            data
        })
    }catch(err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

module.exports = { listTransaction }