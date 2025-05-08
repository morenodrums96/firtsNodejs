// Define el tiempo de espera en milisegundos (3000 ms = 3 segundos)
const waitTime = 3000;

// Imprime un mensaje en consola indicando cuánto tiempo se va a esperar
console.log(`setting a ${waitTime / 1000} second delay`);

// Define una función flecha que imprimirá "done" cuando sea ejecutada
// Esta función NO se ejecuta aún, solo está siendo declarada
const timerFinished = () => console.log("done");

// setTimeout es una función nativa de JavaScript que recibe dos argumentos:
// 1. Una función que se ejecutará después del tiempo especificado
// 2. La cantidad de milisegundos a esperar (en este caso, 3000 ms = 3 segundos)
setTimeout(timerFinished, waitTime);

// ¿Qué pasa exactamente?
// Cuando el programa llega a esta línea, inicia un temporizador de 3 segundos.
// Después de ese tiempo, se ejecuta la función timerFinished, que imprime "done".
