const mongoose = require('mongoose');

const ConsultancySchema = new mongoose.Schema({
  clientName: String,
  projectName: String,
  startDate: Date,
  endDate: Date,
  status: String,
  notes: String
});

module.exports = mongoose.model('Consultancy', ConsultancySchema);
