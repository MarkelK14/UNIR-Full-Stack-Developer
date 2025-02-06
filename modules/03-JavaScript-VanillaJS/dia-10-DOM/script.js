debugger // Para en el debugger. Es como debuguear en el navegador. Para utilizarlo se debe tener la consola abierta en el navegador

// ## Selectores y métodos de acceso
const titulo1 = document.querySelector('.titulo1'); // Selector como en CSS, solo devuelve el primer elemento que cumpla con el selector
titulo1.textContent = 'Hola desde JavaScript';

const alumnos = document.querySelectorAll('li'); // Selecciona todos los elementos li. Se debería seleccionar por clase o id
console.log(alumnos);
alumnos.forEach(alumno => {
    alumno.textContent = 'Alumno sobreescrito desde JavaScript';
});

    // document.querySelector --> Selecciona el primer elemento que cumpla con el selector
    // document.querySelectorAll --> Selecciona todos los elementos que cumplan con el selector

const alumnos2 = document.querySelectorAll('.alumno'); // Selecciona todos los elementos con la clase alumno
alumnos2.forEach(alumno => {
    console.log(alumno);
});

/*
    //Son lo mismo
    document.getElementById('cabecera')
    document.querySelector('#cabecera')
    //Son lo mismo
    document.getElementByClassName('alumnoDaniel')
    document.querySelector('.alumnoDaniel')
    //Son lo mismo
    document.getElementsByClassName('alumnoDaniel')
    document.querySelectorAll('.alumnoDaniel')
*/

// ## Eventos
const btnSaludo = document.querySelector('.saludo');
console.log(btnSaludo);
btnSaludo.addEventListener('click', () => {
    titulo1.textContent = 'Hola desde el botón saludo';
});

const btnAcumulador = document.querySelector('.btnAcumulador');
const txtAcumulador = document.querySelector('.txtAcumulador');
let acumulador = 0
btnAcumulador.addEventListener('click', () => {
    acumulador += 1;
    console.log(acumulador);
    txtAcumulador.textContent = acumulador;
});

// document.addEventListener('DOMContentLoaded') --> Se ejecuta cuando el DOM está cargado.
document.addEventListener('DOMContentLoaded', () => {  // TODO EL CODIGO QUE USE EL DOM DEBE IR DENTRO DE ESTE EVENTO. ASÍ SE ASEGURA QUE EL DOM ESTÁ CARGADO
    alert('El DOM está cargado');
});

// ### Document ready
// ## Manipulación del DOM
// ### Manipulando el documento
// ### Manipulando elementos
// ## Intervalos y timeout

// ## Trabajo con los objetos propios document, windows, history, location, localStorage, cookies