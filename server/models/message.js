const mongoose = require('mongoose');
module.exports = mongoose.model('Message', new mongoose.Schema({
  name: String, email: String, message: String
}, { timestamps: true }));