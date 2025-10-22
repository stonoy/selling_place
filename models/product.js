const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [String],  // URLs
  category: { type: String, required: true },
  isSold: { type: Boolean, default: false },
  location: {type: String, required: true},
  type: { type: String, required: true },
  featured: {type: Boolean , required: true, default: false}
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
