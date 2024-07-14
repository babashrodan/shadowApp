const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'TradeAccount' }
});

module.exports = mongoose.model('Trade', TradeSchema);
