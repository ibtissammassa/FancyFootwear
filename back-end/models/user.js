const mongoose = require('mongoose');

const User = mongoose.model('User',new mongoose.Schema({
    id: Number,
    name: String,
    cartItems: Array
}));

exports.User = User;