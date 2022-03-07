const dbConnect= require('./mongodb');

const main= async() => {
    let data = await dbConnect();
    let result= await data.updateMany({name:'Apple Earpod'}, {
        $set:{name:'Earbud'}
    })
    console.log(result)
}
main();


