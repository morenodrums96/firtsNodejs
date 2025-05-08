import { copyFile } from 'node:fs';


copyFile('./files/new-text.txt', './files/copy-text.txt', (error) => {
    if (error) {
        console.log('error');
    } else {
        console.log('COPY OK');

    }

});