/*
Ejemplos útiles de process:
Método / Propiedad                     ¿Para qué sirve?
-------------------------------------------------------------------------------
process.exit()                         Termina el programa manualmente.
process.stdin / process.stdout         Leer desde la entrada estándar (como el teclado) o escribir a la salida (como la consola).
process.argv                           Acceder a los argumentos con los que se ejecutó el programa.
process.cwd()                          Devuelve el directorio actual de trabajo.
process.env                            Acceder a variables de entorno.
process.on("exit", fn)                 Ejecuta una función justo antes de que el programa termine.
process.on("uncaughtException", fn)    Captura errores no manejados.
*/


// Arreglo con las preguntas que se harán al usuario
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

// Arreglo vacío donde se almacenarán las respuestas del usuario
const answers = [];

// Función que muestra una pregunta según el índice recibido
function ask(i) {
    // Imprime la pregunta correspondiente
    process.stdout.write(`\n\n${questions[i]}\n> `);
}

// Llama a la función ask con el índice 0 para iniciar la primera pregunta
ask(0);

// Escucha la entrada del usuario desde la terminal (teclado)
process.stdin.on("data", function (data) {
    // Guarda la respuesta del usuario quitando saltos de línea y espacios
    answers.push(data.toString().trim());

    // Si aún quedan preguntas por hacer, se llama a ask con el siguiente índice
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        // Si ya se respondieron todas las preguntas, se termina el programa
        process.exit();
    }
});

// Evento que se ejecuta justo antes de que el programa termine (exit)
process.on("exit", function () {
    // Imprime un mensaje final personalizado usando las respuestas
    process.stdout.write("\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later.\n\n`);
});
