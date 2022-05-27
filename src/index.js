const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/',(req,res) =>{
    res.send('<h1>si sirve la api</h1>');
});

app.get('/getData',(req,res) =>{
    res.json({
        name:'marko',
        edad:22
    });
})




app.listen(port, () =>{
    console.log(`servidor en el puerto ${port}`);
});


