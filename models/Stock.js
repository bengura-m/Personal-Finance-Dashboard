const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  exchangeTimezoneName: { type: String, required: true },
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;