// Importa el módulo 'path' de Node.js para trabajar con rutas de archivos y directorios
const path = require("path");

// Importa el módulo 'util' de Node.js para usar utilidades como logs con timestamp
const util = require("util");

// Importa el módulo 'v8' para acceder a estadísticas del motor de JavaScript (usado internamente por Node)
const v8 = require("v8");

// Muestra en consola solo el nombre del archivo actual (por ejemplo: "archivo.js")
// __filename es una variable global que contiene la ruta completa del archivo actual
console.log(path.basename(__filename));

// Une varios segmentos de ruta en una sola ruta válida del sistema operativo
// __dirname es la ruta completa del directorio actual (donde está este archivo)
// path.join evita errores con / o \ entre carpetas, funciona igual en Windows, Linux y Mac
const dirUploads = path.join(
    __dirname,
    "www",
    "files",
    "uploads"
);

// Muestra en consola la ruta completa que se armó con path.join
console.log(dirUploads);

// Imprime el nombre del archivo con timestamp (fecha y hora) usando util.log
util.log(path.basename(__filename));

// Imprime estadísticas del heap (memoria) usada por el motor V8
// Esto es útil para monitorear consumo de memoria en una app Node.js
util.log(v8.getHeapStatistics());
