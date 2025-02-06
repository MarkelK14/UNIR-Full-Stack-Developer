//Desestructuración de objetos
const alumno = {
    firstName: 'Félix',
    lastName: 'Blanco'
}
    
const firstName = alumno.firstName
const lastName = alumno.lastName

const {firstName2, lastName2} = alumno // Se asigna a las variables firstName2 y lastName2 los valores de las propiedades firstName y lastName del objeto alumno
console. log ( 'Hola ' + firstName2 + ' '+ lastName2)

const alumnoMarkel = {
    firstName: 'Markel',
    lastName: 'Kortajarena'
}

const saludador = (alumno) => {
    console.log('Hola ' + alumno.firstName + ' ' + alumno.lastName)
}
saludador(alumnoMarkel)

//Template strings --> Se utilizan para concatenar strings y variables
const saludador2 = (alumno) => {
    console.log(`Hola ${alumno.firstName} ${alumno.lastName}`)
}
saludador2(alumnoMarkel)

//Spread operator (esparcir) --> Se utiliza para descomponer un array u objeto
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// Se concatenan los dos arrays, es como que quita el contenedor de cada array y los junta
const arr12 = [...arr1, ...arr2] // --> [1, 2, 3, 4, 5, 6]
console.log(arr12)

//Rest operator --> Se utiliza para recoger los argumentos de una función
const suma = (...operadores) => { // numero ilimitado de parámetros, sería un array
    let acumulador = 0
    for (let i = 0; i < operadores.length; i++) {
        acumulador += operadores[i]
    }
    return acumulador
}
console.log(suma(2, 3))
console.log(suma(2, 3, 4, 5, 25))

const arr3 = [3, 2, 4, 5, 6, 7, 8]
console.log(suma(...arr3))
console.log(Math.max(2, 3, 4)) // es lo mismo que en la línea anterior, podemos meter la cantidad de argumentos que queramos
console.log(Math.max(2, 3, 4, 1, 56, 23, 45, 67, 23, 45, 67))

// Var vs Let vs Const
    // Var --> Se puede redeclarar y reasignar. El ambito de var es la función más cercana
    // Let --> No se puede redeclarar pero si reasignar
    // Const --> No se puede redeclarar ni reasignar

function varTest() {
    var x = 1
    if (true) {
        var x = 2
        console.log(x) // 2
    }
    console.log(x) // 2 --> podemos usarlo porque el ambito de var es la función más cercana
}

// HOISTING (Elevación de las declaraciones) - Pregunta de entrevista nivel medio
const preguntaEntrevista = () => {
    const a = 3
    const b = 4
    console.log()
    if (a < b) {
        console.log(a)
    }
    const d = 3 // por debajo Js se anticipa y crea la variable d en cuanto entra en la función, en esta línea solo le asigna el valor
}