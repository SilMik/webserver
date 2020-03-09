const express = require('express')
const app = express();
var hbs = require('hbs');
//no es necesario importar el archivo helpers.js en un variable pues solo importa que el archivo se ejecute

require('./hbs/helpers');


//Heroku 

const port = process.env.PORT || 3000;

//middleware es un callball que se ejecutara siempre.
//para crear un middleware->
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Para trabajar con /data por ejemplo hay que crear otro servicio.

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'miguel',
    });
});
app.get('/about', (req, res) => {

    res.render('about')
});

/**app.get('/data', (req, res) => {

    res.send('Hola Data');
})*/

//En heroku desconozco el puerto a usar.
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

//Usar variables anio y nombre del home. hbs