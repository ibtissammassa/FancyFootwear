const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {User} = require('../models/user');
const {Product} = require('../models/product');

//GET
router.get('/',async(req,res)=>{
    const userId = req.params;
    const user = await User.find({id:userId});
    if(!user)return res.status(404).send('User not found');
    const products = await Product.find({}).toArray();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
    res.send(cartItems);
});

//create
router.post('/',async(req,res)=>{
    let product = new Product({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        averageRating: req.body.averageRating,
    });
    product = await product.save();
    res.send(product);
});


module.exports = router;