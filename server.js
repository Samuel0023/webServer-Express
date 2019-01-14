const express = require('express');

const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;
//Middlewhere es una instruccion o un callback que se va a ejecutar 
//siempre sin importar que url fuera que el usuario pida.

app.use(express.static(__dirname + '/public'))


// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//hay que tener cuidado cuando hacemos dos o mas peticiones , ya que dependiendo del interprete va 
//ejecutar un u otro



app.get('/', (req, res) => {
    // asi genero contenido dinamico
    res.render('home', {
        nombre: 'samuel OntiVeros'
    });
});


app.get('/about', (req, res) => {

    res.render('about');
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el Puerto ${port}`);
});