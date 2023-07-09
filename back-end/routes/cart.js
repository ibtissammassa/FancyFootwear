const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {User} = require('../models/user');
const {Product} = require('../models/product');

//GET
router.get('/:userId/cart',async(req,res)=>{
    const user = await User.findOne({id:req.params.userId});
    if(!user)return res.status(404).send('User not found');
    const products = await Product.find();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id => products.find(product => product.id === id));
    res.send(cartItems);
});

//add
router.post('/:userId/cart',async(req,res)=>{ 
    const { productId } = req.body;
    let user = await User.updateOne({ id:req.params.userId }, {
        $addToSet: { cartItems: productId },
      });
    if(!user)return res.status(404).send('User not found');
    res.send(user.cartItems);
});

//delete
router.delete('/:userId/cart/:productId',async(req,res)=>{
    let user = await User.updateOne({ id:req.params.userId }, {
        $pull: { cartItems: req.params.productId },
      },{new:true});
    if(!user)return res.status(404).send('User not found');
    user = await User.findOne({id:req.params.userId});
    const products = await Product.find();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds?.map(id => products.find(product => product.id === id));
    res.send(cartItems);
});

module.exports = router;