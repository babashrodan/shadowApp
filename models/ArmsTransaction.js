const mongoose = require('mongoose');

const ArmsTransactionSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  date: { type: Date, default: Date.now },
  arms: { type: mongoose.Schema.Types.ObjectId, ref: 'Arms' }
});

module.exports = mongoose.model('ArmsTransaction', ArmsTransactionSchema);
