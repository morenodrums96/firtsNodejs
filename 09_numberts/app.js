// Importamos solo la función 'uniq' desde la ruta específica de lodash.
// Este estilo de importación funciona porque estamos usando ES Modules (gracias al "type": "module" en package.json)
import uniq from 'lodash/uniq.js';

// Creamos un array con varios números repetidos
const numeros = [1, 5, 8, 10, 1, 5, 5, 5];

// Imprimimos el array original
console.log("Original:", numeros);

// Usamos 'uniq' para filtrar los valores duplicados del array
console.log("Únicos:", uniq(numeros)); // Resultado esperado: [1, 5, 8, 10]
