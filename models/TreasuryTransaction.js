const mongoose = require('mongoose');

const TreasuryTransactionSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  treasury: { type: mongoose.Schema.Types.ObjectId, ref: 'Treasury' }
});

module.exports = mongoose.model('TreasuryTransaction', TreasuryTransactionSchema);
