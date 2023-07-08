const express = require('express');
const app = express();
const mongoose = require('mongoose');

const products = require('./routes/products');
const cart = require('./routes/cart')

//connection to database
mongoose.connect('mongodb://localhost/FancyFootwear')
    .then(()=>{console.log('Connected to mongodb ..')})
    .catch((err)=>{console.error('Couldnt connect : ',err.message)});


app.use(express.json());
app.use('/api/products',products);
app.use('/api/users/:userId/cart',cart);

//listen for requests
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
});