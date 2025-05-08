import { unlink } from 'node:fs';


unlink('./files/copy-text.txt', (error) => {
    if (error) {
        console.log('error');
    } else {
        console.log('delete OK');

    }

});