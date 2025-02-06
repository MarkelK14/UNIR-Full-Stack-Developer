const unTexto = '["a","b","c"]' //esto es texto

//vemos que es convertible a un array

const array = ['a','b','c'] //esto es un array

console.log(array[2]) //c

//un JSON es un texto con la sintaxis correcta potencialmente convertible en un array o un objeto


const unTexto1 = "['a','b','c']" //esto es un JSON
const unTexto2 = "['a','b','c'" //esto NO es un JSON

const arr =  JSON.parse(unTexto) //convierte un texto en un array
console.log(typeof arr)
console.log(arr)

const alumno = {
  firstName : 'Felix',
  lastName: 'Blanco'
}

const json = JSON.stringify(alumno) //pasa de un objeto a texto, al reves de JSON.parse
console.log(typeof json)
console.log(json)