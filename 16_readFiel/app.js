import { readdir } from 'node:fs';


readdir('./files', { withFileTypes: true }, (error, data) => {
    if (error) {
        console.log("error");
        throw error
    } else {

        data.forEach(entry  => {
            if (entry.isFile()) {
                console.log(entry.name);

            } else if (entry.isDirectory()) {
                console.log(entry.name);

            }
        });

        console.log(data);
    }
});