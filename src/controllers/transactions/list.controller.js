import { listTransactionsService } from "../../services/transaction.service.js";


export const listTransaction = async (req, res) => {
    try {
        const {meta, data} = await listTransactionsService(req.query)

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