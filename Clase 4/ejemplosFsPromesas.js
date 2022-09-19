const fs = require('fs');

async function readFile() {
    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf8');
        console.log(contenido);
    } catch (error) {
       console.error(error); 
    }
}

readFile();