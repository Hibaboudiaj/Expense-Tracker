const express = require("express");
const router = express.Router();

const controller = require("../controllers/transactions/create.controller.js");
const controllerSats = require("../controllers/transactions/stats.controller");
// const { route } = require("../../app");

router
.post("/", controller.create)
.get("/", controller.getAll)

router
.route('/stats')
.get(controllerSats.MonthlyStats);


module.exports = router;

 