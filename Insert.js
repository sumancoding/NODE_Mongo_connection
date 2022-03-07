const dbConnect= require('./mongodb');

const insert = async() => {
let data = await dbConnect();
data= await data.insertMany([
    {
  name: 'Apple Earpod',
  brand:'Apple',
  price: 200,
  category: 'earphone'  
}, {
      name: 'TicWatch',
  brand:'Ticktoker',
  price: 100,
  category: 'smart watch' 
},
  {
        name: 'Mackintosh',
  brand:'Apple',
  price: 1200,
  category: 'desktop' 
  } 
]);

}
insert();


