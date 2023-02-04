require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home.hbs', {
        nombre: 'Rodrigo Perez',
        titulo: 'Aplicación en node.js',
        css: 'assets/css/main.css'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Rodrigo Perez',
        titulo: 'Aplicación en node.js',
        css: 'assets/css/main.css'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Rodrigo Perez',
        titulo: 'Aplicación en node.js',
        css: 'assets/css/main.css'
    });
})




app.listen(port)