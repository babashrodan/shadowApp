const mongoose = require('mongoose');

const BioFuelSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  date: { type: Date, default: Date.now },
  biofuel: { type: mongoose.Schema.Types.ObjectId, ref: 'Biofuel' }
});

module.exports = mongoose.model('BioFuelTransaction', BioFuelSchema);
