const express = require("express");
const router = express.Router();

const controller = require("../controllers/transactions/create.controller.js");
const controllerSats = require("../controllers/transactions/stats.controller.js");
const { listTransaction } = require("../controllers/transactions/list.controller.js");

router
  .post("/", controller.create)
  .get("/", controller.getAll)
  .get("/filter", listTransaction);

router
  .route('/stats')
  .get(controllerSats.MonthlyStats);


module.exports = router;

 