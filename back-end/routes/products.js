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

//update a product

// router.put('/:id',async (req,res)=>{
//     let product = await Product.findByIdAndUpdate(req.params.id,{
//         $set:{
//             name: req.body.name,
//             price: req.body.price,
//             description: req.body.description,
//             imageUrl: req.body.imageUrl,
//             averageRating: req.body.averageRating,
//         }
//     },{new:true});
//     if(!product)return res.status(404).send("product not found !");
    
//     res.send(product);
// });

//delete product

// router.delete('/:id',async (req,res) => {
//     const product = await Product.deleteOne({_id:req.params.id});
//     res.send(product);
// })

module.exports = router;