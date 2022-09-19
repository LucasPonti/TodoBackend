const fs = require('fs');



try{
    fs.writeFileSync('./fyh.txt', new Date().toLocaleDateString());
} catch(error) {
    throw new Error('Error de escritura')
}