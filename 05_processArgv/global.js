// 📘 Este script lee argumentos pasados por consola cuando ejecutas el archivo con Node.js.
// Ejemplo de uso en terminal:
// node global.js --user Eve --greeting "hello from node"

// ⬇️ Imprime todos los argumentos que se pasaron al script
console.log(process.argv);

// 📌 process.argv es un arreglo (array) que contiene:
// [0] → Ruta al ejecutable de Node.js
// [1] → Ruta al archivo actual (global.js)
// [2+] → Todos los argumentos que tú agregues desde consola (como --user Eve)

// ✅ Esta función recibe una "bandera" (flag), como "--user" o "--greeting",
// y devuelve el valor que viene justo después de esa bandera.
function grab(flag) {
    // Busca en qué posición del array está la bandera
    let indexAfterFlag = process.argv.indexOf(flag) + 1;

    // Retorna el valor que está justo después de la bandera
    // Por ejemplo, si process.argv = ['...', '--user', 'Eve'], devolverá 'Eve'
    return process.argv[indexAfterFlag];
}

// ⬇️ Se extraen los valores de las banderas desde consola
let greeting = grab("--greeting"); // busca el valor después de "--greeting"
let user = grab("--user");         // busca el valor después de "--user"

// 🖨️ Imprime los valores extraídos en consola
console.log(greeting); // Muestra: hello from node
console.log(user);     // Muestra: Eve
