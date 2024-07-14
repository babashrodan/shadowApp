const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  name: String,
  type: String,
  value: Number,
  performanceHistory: [{
    date: { type: Date, default: Date.now },
    value: Number
  }]
});

module.exports = mongoose.model('Asset', AssetSchema);
