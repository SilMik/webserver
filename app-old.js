//http para montar el server

const http = require('http');

http.createServer((req, res) => {

        //regresar un JSON para que sea un servicio.
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Miguel',
            edad: 31,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();


    })
    .listen(8080);

console.log('Escuchando el puerto 8080');