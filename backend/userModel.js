const mongoose = require('mongoose');

// Define the schema
const dataSchema = new mongoose.Schema({
  message: { type: String, required: true },
  reply: { type: String, required: true },
  embedding: { type: [Number], required: true },
  frequency: { type: Number, default: 1 },
}, {
  collection: 'data', 
});

module.exports = mongoose.model('Data', dataSchema);
