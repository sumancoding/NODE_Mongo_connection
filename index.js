const {MongoClient} = require('mongodb');
const url= 'mongodb://localhost:27017'; //path og mongo db so that node knows
const database= 'e-comm';
const client= new MongoClient(url);  //data being fetched from mongodb

async function getData() {
    let result= await client.connect();  
    let db= result.db(database);
    let collection= db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);

}
getData();
















  


