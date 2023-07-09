const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Product} = require('../models/product');

//GET
router.get('/',async(req,res)=>{
    const products = await Product.find();
    res.send(products);
});

//GET a single product (by id)
router.get('/:id',async (req,res)=>{
    const product = await Product.findOne({id:req.params.id});
    if(!product)return res.status(404).send('Product not found');
    res.send(product);
});

module.exports = router;