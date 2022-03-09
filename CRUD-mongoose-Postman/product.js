//defining schema and model here
 const mongoose= require('mongoose');
const ProductSchema= new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});
const ProductModel= mongoose.model('products', ProductSchema);

module.exports= ProductModel;


