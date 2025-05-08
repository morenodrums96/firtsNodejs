const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("how do you line node", (answer) => {
    console.log(`your answe: ${answer}`);
});