import { readFile } from 'node:fs';

readFile('./files/books.json', (error, datos) => {
    
    let book = JSON.parse(datos)
    console.log(book.libro);
})