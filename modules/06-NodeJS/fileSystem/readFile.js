const fsPromises = require('node:fs/promises');
const fsSync = require('node:fs');

// readFile --> Leer el contenido de un fichero
(async () => {
    try {
        const content = await fs.readFile('../basicos/.env', 'utf-8');
        console.log(content);
    } catch (error) {
        console.log(error.message);        
    }
})();

// appendFile --> Añadir contenido a un fichero
(async () => {
    try {
        // Creamos la carpeta logs si no existe
        if(!fsSync.existsSync('./logs')){
            await fsPromises.mkdirSync('./logs');
        }
        // Agregamos contenido al fichero prueba.log
        await fsPromises.appendFile('./logs/prueba.log', 'Se agrega una nueva linea al fichero\n');
        console.log('Fichero actualizado correctamente');
    } catch (error) {
        console.log(error.message);        
    }
})();