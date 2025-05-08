import { writeFile , appendFile} from 'node:fs';

// writeFile('./files/new-text.txt', 'data sent from the node', (error) => {

//     if (error) {
//         console.log('error');

//     } else {
//         console.log('write of the file');

//     }

// });


appendFile('./files/new-text.txt', '\nnew line', (error) => {

    if (error) {
        console.log('error');

    } else {
        console.log('write of the file');

    }

});