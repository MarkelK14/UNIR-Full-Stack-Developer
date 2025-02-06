// for vs forEach vs reduce
//sumar los elementos de un array
let acumulador1 = 0
for (let i = 0; i < numeros.length; i++){
    acumulador1 += numeros[i]
}
console.log(acumulador1)

let acumulador2 = 0
arr.forEach((number, i, arrOriginal) => { //como segundo parametro, te pasa el indice. COmo tercer parametro, te pasa el array original
    acumulador2 += number
    console.log(i)
    console.log(arrOriginal)
})
console.log(acumulador2)

let acumulador3 = 0
acumulador3 = numeros.reduce((acc, number) => acc + number, 0) //el primer parametro es la función, y el segundo parametro es el valor inicial del acumulador
console.log(acumulador3)

// Ordenar los elementos de un array
const letras = ['a', 'b', 'z', 'k', 'c']
console.log(letras.sort())

const numeros1 = [49, 8, 1, 33, 88888, 2]
console.log(numeros1.sort((a, b) => {
    // - < 0'. Si el valor devuelto por la función de comparación es menor que 0, entonces el elemento b es mayor que a.
    // - '0'. Si el valor devuelto por la función de comparación es 0, entonces a y b deben tener la misma posición.
    // - > 0'. Si el valor devuelto por la función de comparación es mayor que 1, entonces el elemento a es mayor que b
    return a - b
}))

const listadoUsuarios = [
    {
        nombre: "Gabriel Pacheco",
        edad: 34,
        signoZodiaco: "Virgo"
    },
    {
        
        nombre: "Lola Rocha Tercero",
        edad: 30,
        signoZodiaco: "Capricornio"
    },
    {
        
        nombre: "Jhon Rocha Tercero",
        edad: 30,
        signoZodiaco: "Capricornio"
    },
    {
        
        nombre: "Rodrigo Sendino Sanz",
        edad: 20,
        signoZodiaco: "Tauro"
    }
];

console.log(listadoUsuarios.sort((a, b) => {
    return a.edad - b.edad
}))

//PREGUNTA ENTREVISTA TÉCNICA: .map .filter .find devuelven una copia (no modifican el array original)
// .sort sí modifica el array original
const arr1 = [1, 2, 4, 3]
console.log(`arr1: ${arr1}`)

const otroArr1 = arr1.toSorted((a,b) => a - b)
console.log(`otroArr1: ${otroArr1}`) // [1, 2, 3, 4]
console.log(`arr1: ${arr1}`) // [1, 2, 4, 3]

const otroArr2 = arr1.sort((a,b) => a - b)
console.log(`otroArr2: ${otroArr2}`) // [1, 2, 3, 4]
console.log(`arr1: ${arr1}`) // [1, 2, 3, 4]



// Métodos de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// PUSH --> Añade un elemento al final del array
console.log('numeros.push(10) --> ' + numeros.push(10))
console.log('numeros --> ' + numeros)
// UNSHIFT --> Añade un elemento al principio del array
console.log('numeros.unshift(11) --> ' + numeros.unshift(11))
console.log('numeros --> ' + numeros)
// SHIFT --> Añade un elemento al principio del array, eliminando el primer elemento (sustituye)
console.log('numeros.shift() --> ' + numeros.shift())
console.log('numeros --> ' + numeros)
// POP --> Añade un elemento al final del array, eliminando el último elemento (sustituye)
console.log('numeros.pop() --> ' + numeros.pop())
console.log('numeros --> ' + numeros)

//SPLIT --> Divide un string en un array
console.log(frase.split(' ')) // ['podríamos', 'hacer', 'alún', 'ejemplo', 'de', 'contar', 'las', 'veces']

const csv = `Félix; Blanco Sánchez; 38`
const [nombre,apellidos,edad] = csv.split(';')
console.log(nombre)

// EJERCICIO: Crea una función que dada una cadena de texto encuentre la palabra más larga
const frase = "podríamos hacer alún ejemplo de contar esternocleidomastoideo las veces"
const palabraMasLarga1 = (cadenaTexto) => {
    const palabras = cadenaTexto.split(' ')
        let palabraMasLarga = ''
    palabras.forEach((palabra) => {
        palabraMasLarga = palabra.length > palabraMasLarga.length ? palabra : palabraMasLarga
    })
    return palabraMasLarga
}
console.log(palabraMasLarga(frase)) // esternocleidomastoideo

const palabraMasLarga2 = frase.reduce((palabraMasLarga, palabra) => {
    return palabra.length > palabraMasLarga.length ? palabra : palabraMasLarga, ''
})
console.log(palabraMasLarga2) // esternocleidomastoideo