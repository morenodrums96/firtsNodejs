import { copyFile, unlink } from 'node:fs';

const deleteFile = (filePath, nameFile) => {
    unlink(`${filePath}/${nameFile}`, (error) => {
        if (error) {
            console.log("error al eliminar ");
        } else {
            console.log("delete OK");
        }
    });
};

const copyFilesConst = (filePath, newFilePath, nameFile, deleteFile) => {
    copyFile(`${filePath}/${nameFile}`, `${newFilePath}/${nameFile}`, (error) => {
        if (error) {
            console.log('error copy');
        } else {
            console.log("copy OK");
            deleteFile(filePath, nameFile);
        }
    });
};

const origin = 'files';
const destino = 'destinationFiles';
const nameFileText = 'new-text.txt';

copyFilesConst(origin, destino, nameFileText, deleteFile);
