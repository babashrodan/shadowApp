const mongoose = require('mongoose');

const ArmsSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ArmsTransaction'
  }]
});

module.exports = mongoose.model('Arms', ArmsSchema);
