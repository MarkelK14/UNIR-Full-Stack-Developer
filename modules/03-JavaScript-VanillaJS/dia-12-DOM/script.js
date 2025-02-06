// debugger // Para en el debugger. Es como debuguear en el navegador. Para utilizarlo se debe tener la consola abierta en el navegador

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
// -------------------------------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded') --> Se ejecuta cuando el DOM está cargado.
document.addEventListener('DOMContentLoaded', () => {  // TODO EL CODIGO QUE USE EL DOM DEBE IR DENTRO DE ESTE EVENTO. ASÍ SE ASEGURA QUE EL DOM ESTÁ CARGADO
    const alumnos = document.querySelectorAll('li'); // Selecciona todos los elementos li. Se debería seleccionar por clase o id
    console.log(alumnos);
    alumnos.forEach(alumno => {
        alumno.textContent = 'Alumno sobreescrito desde JavaScript';
    });

    //Eventos
        //Mejor optimizar el código, porque el DOM es muy costoso. Si solo se ejecuta una vez, no es necesario meterlo en un evento porque nunca va a cambiar el valor
    const btnAcumulador = document.querySelector('.btnAcumulador');
    const txtAcumulador = document.querySelector('.txtAcumulador');
    let acumulador = 0

    btnAcumulador.addEventListener('click', () => {
        acumulador += 1;
        console.log(acumulador);
        txtAcumulador.textContent = acumulador;
    });

    //Accordion
    const accordionBtn = document.querySelector('.accordion__button')
    const accordion = document.querySelector('.accordion')
    accordionBtn.addEventListener('click', () => {
        //ClassList --> Sirve para agregar, quitar o ver las clases de un elemento
        //Opcion 1: if else
        // if(accordion.classList.contains('accordion--open')){
        //     accordion.classList.remove('accordion--open')
        // }else{
        //     accordion.classList.add('accordion--open')
        // }
        //Opcion 2: Toggle --> Si tiene la clase la quita, si no la tiene la pone
        accordion.classList.toggle('accordion--open')
    });

    //Saludador de nombre
    const saludarBtn = document.querySelector('.saludar-boton')
    const saludarNombre = document.querySelector('.saludar-nombre')
    const saludarResultado = document.querySelector('.saludar-resultado')
    saludarBtn.addEventListener('click', () => {
        const nombre = saludarNombre.value
        //innerHTML --> Sirve para modificar el contenido de un elemento HTML. Solo se puede utilizar cuando estemos seguros del contenido que vamos a escribir. Es fuente de ataques de seguridad porque se puede inyectar código Js
        saludarResultado.innerHTML = `Hola <strong>${nombre}</strong>`
    });

    //ToDo List
    const todoTarea = document.querySelector('.todo-tarea')
    const todoBtn = document.querySelector('.todo-boton')
    const todoList = document.querySelector('.todo-list')
    todoBtn.addEventListener('click', () => {
        const nuevaTarea = todoTarea.value

        if(nuevaTarea !== ''){
            const nuevoLi = document.createElement('li')
            li.textContent = tarea
            todoList.appendChild(li)

            todoTarea.value = ""
        }
    });

    const enlaceGoogle = document.querySelector('.enlaceGoogle')
    enlaceGoogle.addEventListener('click', (event) => {
        event.preventDefault() //Evita que el navegador deje de hacer ese comportamiento por defecto que tienen los navegadores
        console.log('No se recarga la página')
    });

    const unFormulario = document.querySelector('.unFormulario')
    unFormulario.addEventListener('submit', (event) => {
        if(unFormulario.querySelector('#name').value === ''){
            event.preventDefault()
            console.log('El campo está vacío')
        }
        
    });

});

// ### Document ready
// ## Manipulación del DOM
// ### Manipulando el documento
// ### Manipulando elementos
// ## Intervalos y timeout

// ## Trabajo con los objetos propios document, windows, history, location, localStorage, cookies