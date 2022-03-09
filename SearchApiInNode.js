const express= require('express');
require('./config');
const ProductModel= require('./product');
const app= express();

app.use(express.json());

app.get('/search/:key', async (req,res) => {
    console.log(req.params.key)
    let data=  await ProductModel.find({    //$or means this can be in multiple fileds also
        "$or": [
             {"name": {$regex: req.params.key}},
            {"brand": {$regex: req.params.key}}
            ]
    });
    res.send(data);
});
app.listen(5000);