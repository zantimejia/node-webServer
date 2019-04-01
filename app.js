const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Conten-Type': 'application/json' })
    let salida = {
        nombre: 'Santiago',
        edad: '25',
        url: req.url
    }
    res.write(JSON.stringify(salida))
        // res.write('Hola Mundo')
    res.end()
}).listen(8080)

console.log('Escuchando el puerto 8080');