// Importamos la función createServer desde el módulo nativo 'http' de Node.js
import { createServer } from 'node:http';

// Creamos el servidor HTTP usando createServer. Esta función recibe un callback
// con los objetos 'req' (request) y 'resp' (response) para manejar las solicitudes.
const server = createServer((req, resp) => {
    console.log('response'); // Este log se imprime cada vez que se recibe una petición

    // Establecemos el encabezado de respuesta (status 200 y tipo de contenido HTML)
    resp.writeHead(200, { 'content-type': 'text/html' });

    // Enviamos el contenido HTML como respuesta, incluyendo la URL solicitada
    resp.write('Respuesta para el url ' + req.url);
    
    // Finalizamos la respuesta (faltaba esta línea)
    resp.end();
});

// El servidor comienza a escuchar en el puerto 3000
server.listen(3000);

// Mensaje en consola que indica que el servidor fue iniciado correctamente
console.log('Servidor ejecutándose en http://localhost:3000');
