const express = require('express');
const hbs = require('hbs');
var TAG = ' --------------------------server.js '
var app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.set('view engine','hbs');

    app.get('/',(req,res)=> {
        res.render('home.hbs');
});
    app.get('/about',(req,res)=>{
       res.render('about.hbs',{
            pageTitle:'new page title'
    });

    });

app.listen(port , ()=>{
    console.log(`server has run on port ${port}`)
});