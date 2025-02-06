//Métodos asociados a objetos
const alumno = {
    firstName: 'Félix',
    lastName: 'Blanco'
}
//object.keys --> Devuelve un array con las claves del objeto
console.log(Object.keys(alumno)) // ['firstName', 'lastName']
//object.values --> Devuelve un array con los valores del objeto
console.log(Object.values(alumno)) // ['Félix', 'Blanco']
//object.entries --> Devuelve un array de arrays (Dupla) con las claves y los valores del objeto
console.log(Object.entries(alumno)) // [['firstName', 'Félix'], ['lastName', 'Blanco']]

//zoo