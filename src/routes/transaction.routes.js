import express from 'express';
import { creatTransaction } from '../controllers/transactions/create.controller.js';
import { listTransaction } from '../controllers/transactions/list.controller.js';


const router = express.Router();


// create transaction

// GET Transactions
router.get('/', listTransaction)

// GET transaction/stats


export default router;