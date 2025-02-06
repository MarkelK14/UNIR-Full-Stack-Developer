// Ejercicio 3: Función que me devuelva el IMC (Índice de Masa Corporal) de una persona
const imc = (peso, altura) => {
    const imc = peso / (altura * altura)

    if (imc < 18.5) {
        return 'Peso inferior al normal'
    }
    else if(imc >= 18.5 && imc < 25){
        return 'Normal'
    }else if (imc >= 25 && imc < 30){
        return 'Peso superior al normal'
    }else{
        return 'Obesidad'
    }
}
console.log(imc(72, 1.75)) // 22.86

// Ejercicio 4: Función calculadora: Función que reciba por parámetro los operadores y el signo de la operación
const calculadora = (num1, num2, operacion) => {
    switch (operacion) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operación no válida'
    }
}
console.log(calculadora(2, 3, '+')) // 5

// Ejercicio 5: Función que dado un array de caracteres, capitalice de manera "uno mayus y otro minus" los caracteres
const capitalize = (arr) => {
    const resultado = []
    for (let i = 0; i < arr.length; i++) {
        resultado[i] = (i % 2 === 0) ? (arr[i].toLowerCase()) : (arr[i].toUpperCase())
    }
    return resultado
}
console.log(capitalize(['c', 'a', 'p', 'i', 't', 'a', 'l', 'i', 'z', 'e']))

// Ejercicio 6: Función que recibe por parámetro un array y cuenta la cantidad de apariciones de un elemento
const apariciones = (arr, element) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++
        }
    }
    return count
}
console.log(apariciones(['a', 'e', 'a', 'e', 33, true, 'e'], 33))

// Ejercicio 7: Función que recibe por parámetro un array y devuelve un objeto con clave-valor de cada elemento y su cantidad de apariciones
const cuentaLetras = (arr) => {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (typeof obj[arr[i]] === 'undefined') {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return obj
}
console.log(cuentaLetras(['a', 'e', 'a', 'e', 'f', 'e', 'p', 'k', 'l']))