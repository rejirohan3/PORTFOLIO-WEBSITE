const mongoose = require('mongoose');
module.exports = mongoose.model('Project', new mongoose.Schema({
  title: String, description: String, link: String, tech: [String]
}));