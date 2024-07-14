const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  name: String,
  assets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asset'
  }]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
