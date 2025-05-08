// Importamos la función readFile desde el módulo 'fs' de Node.js usando ES Modules.
// 'readFile' permite leer archivos de forma asincrónica.
import { readFile } from 'node:fs';

// Llamamos a readFile para leer el archivo ubicado en 'files/text.txt' con codificación 'utf-8'.
// El tercer argumento es una función de callback que sigue la convención "error-first".
// Esta convención significa que:
//   - Si ocurre un error, se pasa como primer argumento (error).
//   - Si todo sale bien, el segundo argumento (datos) contiene el contenido del archivo.
readFile('files/text.txt', 'utf-8', (error, datos) => {

    // Si hubo un error (por ejemplo, el archivo no existe o no hay permisos)
    if (error) {
        console.log('error de lectura'); // Mostramos un mensaje en consola
        throw error;                    // Lanzamos el error para detener la ejecución
    } else {
        // Si no hubo error, imprimimos el contenido del archivo
        console.log(datos);
    }
});
