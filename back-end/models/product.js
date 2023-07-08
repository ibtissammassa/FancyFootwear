const mongoose = require('mongoose');

const Product = mongoose.model('product',new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    averageRating: Number
}));

exports.Product = Product;