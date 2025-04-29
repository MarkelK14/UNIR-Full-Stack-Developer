const fs = require('node:fs');
const fsPromise = require('node:fs/promises');

// READDIR --> Recuperar todos los ficheros y directorios de una ruta concreta

// Síncrono
const files = fs.readdirSync('../basicos');
console.log(files);

// Asíncrono
console.log('Primero');
fs.readdir('../basicos', (err, files) => {
    console.log('Segundo');
    console.log(err);
    console.log(files);
});
console.log('Tercero');

// Promesas
fsPromise.readdir('../basicos')
    .then((files) => {
        console.log(files);
    })
    .catch((error) => {
        console.log(error);
    });

// Async/Await
(  async () => { // IIFE - Immediately Invoked Function Expression --> Función autoejecutable
    try {
        const files = await fsPromise.readdir('../basicos')
        console.log('ASYNC_AWAIT', files);
    } catch (error) {
        console.log(error.message);    
    }
})();
