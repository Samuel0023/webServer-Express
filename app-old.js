const http = require('http');

//callback
http.createServer((req, res) => {

        //webservice
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
                nombre: 'fernando',
                edad: 23,
                url: req.url
            }
            // res.write('Hola Mundo');

        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');