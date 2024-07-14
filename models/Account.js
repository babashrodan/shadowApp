const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  accountNumber: String,
  customerName: String,
  balance: Number,
  transactionHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
});

module.exports = mongoose.model('Account', AccountSchema);
