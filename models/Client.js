const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  fullName: { type: String, required: true },
  age: { type: integer, default: Date.now },
  financialdependants: { type: String, required: true },
  occupation: { type: String, required: true },
  income: { type: String, required: true },
  otherincome: { type: String },
  expenses: { type: String, required: true },
  assets: { type: String, required: true },
  liabilities:{ type: String, required: true },
  lifeinsurance:{ type: String, required: true },
  tpdcover:{ type: String, required: true },
  incomeprotection: { type: String, required: true },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
