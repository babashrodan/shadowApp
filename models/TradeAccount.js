const mongoose = require('mongoose');

const TradeAccountSchema = new mongoose.Schema({
  accountNumber: String,
  customerName: String,
  balance: Number,
  tradeHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trade'
  }]
});

module.exports = mongoose.model('TradeAccount', TradeAccountSchema);
