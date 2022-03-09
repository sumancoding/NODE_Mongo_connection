const express = require('express');
const con = require('./configuration');
const app= express();

app.use(express.json());

app.get('/', (req,res) => {
   con.query('select * from users', (err,result) => {
       if(err) {
           res.send('error')
       } else {
           res.send(result)
       }
   })
});

app.post('/', (req,res) => {
const data= req.body;
con.query('INSERT INTO users SET ?', data , (err, result, field)=> {
   if(err) throw err;
   res.send(result)
} )
})


app.put('/:name', (req,res) => {
    let data= [req.body.name, req.body.brand, req.body.price, req.body.category, req.params.name]; //name params is being used
    con.query('UPDATE users SET name= ?, brand=?, price=?, category=? where name= ?', data, (err,result,fields) => {
        if(err) throw err;
        res.send(result)
    });

app.delete('/:name', (req,res) => {
    con.query("DELETE FROM users WHERE name =" + req.params.name, (err,result,field) => {
        if(err) throw err;
        res.send(result)
    })
})
    
})
app.listen(5000);

