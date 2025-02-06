//TEMA 4

// forEach --> Recorre un array y ejecuta una función por cada elemento
const arr = ['Pikachu', 'Bulbasaur', 'Charmander']
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

const sacadorPantalla = (texto, i) => {
    console.log(`${i} --> ${texto}`)
}

sacadorPantalla('Félix')

arr.forEach(sacadorPantalla)

arr.forEach((texto, i) => {
    console.log(`${i} --> ${texto}`)
})

arr.forEach((texto) => console.log(`${texto}`))
arr.forEach(console.log)

// map --> Devuelve un array con la misma longitud que el original pero con los elementos transformados
const multiplicador = (numero) => (X) => numero * X

const arrMap = [1, 2, 3, 4, 5]
const otroarrayMap = arrMap.map(multiplicador(2))
console.log(otroarrayMap)

const otroArrayMap2 = arrMap.map((X) => X * 2)
console.log(otroArrayMap2)


// filter --> Devuelve un array con los elementos que cumplan una condición. SIempre devuelve un array, aunque esté vacío
const arrFilter = [1, 2, 3, 4, 5]
const esImpar = (x) => x % 2 === 1

const otroArrayFilter = arrFilter.filter(esImpar)
console.log(otroArrayFilter)
console.log(arrFilter.filter((x) => x % 2 === 1))

console.log(arrFilter.map(x=>x*x).filter(x=>x%3===0))
console.log(arrFilter.filter( x => {
    const otroX = x*x
    return otroX % 3 === 0
}))

// find --> Devuelve el primer elemento que cumpla una condición. Si no encuentra nada, devuelve undefined. Devuelve el primer elemento que cumpla la condición
const rebano = ['oveja', 'oveja', 'oveja', 'lobo', 'oveja']

const esLobo = (texto) => texto === 'lobo'
const esMorado = (texto) => texto === 'morado'

console.log(rebano.find(esLobo)) // lobo
console.log(rebano.find(esMorado)) // undefined

// reduce --> Devuelve un valor único a partir de un array
const numeros = [1, 2, 3, 4, 5, 6]
// let acumulador = 0
// for (let i = 0; i < numeros.length; i++){
//     acumulador += numeros[i]
// }
// console.log(acumulador)
const sumador = (numero1, numero2) => {
    return numero1 + numero2
}
// let acumulador = 0
// for (let i = 0; i < numeros.length; i++){
//     acumulador = sumador(acumulador, numeros[i])
// }
// console.log(acumulador)

console.log(numeros.reduce(sumador, 0))



// sort --> Ordena un array