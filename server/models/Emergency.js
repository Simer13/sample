const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  type: String,
  location: String,
  details: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Emergency', emergencySchema);
