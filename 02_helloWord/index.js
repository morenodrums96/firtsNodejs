// 📘 Apuntes del archivo index.js

// ✅ 1. Declaración de una variable con let
let hello = "hello world from Node.js"; 
// Se declara una variable llamada hello.
// Contiene un string con el texto: "hello world from Node.js".

// ✂️ 2. Uso del método .slice()
let justNode = hello.slice(17); 
// .slice() cuenta desde 0, así que la posición 17 corresponde a la letra "N" de "Node.js".
// Devuelve desde esa posición hasta el final: "Node.js".

// 🖨️ 3. Imprimir en consola usando template literals
console.log(`who let the ${justNode} out ?`);
// Usa comillas invertidas (`) y ${} para insertar la variable justNode dentro del string.
// Resultado en consola: who let the Node.js out ?

// 💬 Diferencia entre Template Literals y Concatenación:

// ✅ Usando Template Literals (más limpio y moderno):
let nombre = "Javier";
let producto = "lentes";
let precio = 499;

console.log(`Hola, ${nombre},
Gracias por comprar ${producto}.
El total a pagar es $${precio}.`);
// Ventajas: legible, soporta multilínea sin \n, ideal para strings complejos.

// ❌ Usando concatenación con + (forma antigua):
console.log("Hola, " + nombre + ",\n" +"Gracias por comprar " + producto + ".\n" +"El total a pagar es $" + precio + ".");
// Desventajas: difícil de leer, requiere \n para saltos de línea.

// ✅ Conclusión:
// Los template literals son la mejor opción para crear textos dinámicos en JS moderno.
// Siempre que puedas, usa comillas invertidas (`) con ${variables} para claridad y limpieza.

