const express = require('express');
require('./config');
const ProductModel= require('./product');
const app= express();

app.use(express.json());

app.post('/create', async (req,res)=> {
    let data = new ProductModel(req.body);
    let result= await data.save();
    console.log(result);
    res.send(result);
});

app.get('/list',async (req,res) => {
let data= await ProductModel.find();
res.send(data);
console.log(data)
})

app.delete('/delete/:_id', async (req,res)=> {     //use :id when you need to get parameter
console.log(req.params)
let data= await ProductModel.deleteOne(req.params)
res.send(data)
})  

app.put('/update/:_id', async(req,res) => {
    let data= await ProductModel.updateOne(req.params,{$set: req.body});
    res.send(data);
})


app.listen(5000);































