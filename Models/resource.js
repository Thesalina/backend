const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  
  title: String,
  description: String,
  type: String,
  category: String,
  duration: String,
  url: String
});

module.exports = mongoose.model('Resource', resourceSchema);
