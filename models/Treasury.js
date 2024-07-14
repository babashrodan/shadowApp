const mongoose = require('mongoose');

const TreasurySchema = new mongoose.Schema({
  type: String,
  faceValue: Number,
  maturityDate: Date,
  interestRate: Number,
  balance: Number,
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TreasuryTransaction'
  }]
});

module.exports = mongoose.model('Treasury', TreasurySchema);
