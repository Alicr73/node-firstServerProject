const express = require('express');
const hbs = require('hbs');
var TAG = ' --------------------------server.js '
var app = express();

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

app.listen(3000);