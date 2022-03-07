const mongoose = require('mongoose'); //loading mongoose package

const main = async() => {
    await mongoose.connect("mongodb://localhost:27017/e-comm") //connecting database url  
    const ProductSchema = new mongoose.Schema({     //schema is about fields   
        name: String,
        brand: String,
        price: Number,
        category: String
    })
    const ProductModel= mongoose.model('products', ProductSchema) //using schema to connect node with mongo 

    let data = new ProductModel({name:'Ipad', brand: 'Apple', price: 200, category: 'tablet'})  //creating new instance, entering fields
    let result= await data.save();  //await beacuse it returns a promise 
    console.log(result)

}
main();