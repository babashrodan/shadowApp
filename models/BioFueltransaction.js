const mongoose = require('mongoose');

const BioFuelSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  date: { type: Date, default: Date.now },
  arms: { type: mongoose.Schema.Types.ObjectId, ref: 'Arms' }
});

module.exports = mongoose.model('BioFuelTransaction', BioFuelSchema);
