const mongoose = require('mongoose');

const User = mongoose.model('user',new mongoose.Schema({
    id: Number,
    name: String,
    cartItems: {
        type:[Number],
        default:[]
    }
}));

exports.User = User;