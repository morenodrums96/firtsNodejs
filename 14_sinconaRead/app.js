import { readFileSync , readFile } from 'node:fs';

const start = performance.now();
//let contect = readFileSync('files/text.txt', 'utf-8');
let contect = readFile('files/text.txt', 'utf-8', ()=>{
    console.log ('contenido ok');
});
const final = performance.now();
const totalTime = final - start;

console.log(totalTime);