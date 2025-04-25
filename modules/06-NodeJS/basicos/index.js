const colors = require('colors');
const axios = require ('axios');

// const calculo = require('./calculo');
const {sumar, restar, multiplicar, dividir} = require('./calculo'); // destructuring para mejorar la legibilidad
const Empleado = require('./empleado'); // Importa la clase Empleado

require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
console.log(process.env.MY_ENV_VARIABLE); // Imprime la variable de entorno MY_ENV_VARIABLE

console.log('Hello'.green);
console.log('World'.rainbow);

// axios.get('https://peticiones.online/api/series')
//     .then( (response) => console.log(response.data))
//     .catch( (error) => console.log(error))

async function loadSeries () {
    const response = await axios.get('https://peticiones.online/api/series')
    console.log(response.data);
}
// loadSeries();

// const suma = sumar(5, 10);
// console.log(suma);

const empleado1 = new Empleado('Juan', 'Pérez', 'juan.perez@example.com', '123456789');
console.log(empleado1);