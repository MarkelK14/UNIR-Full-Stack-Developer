// Tema 2
// Flujo
// if else
const mayorDeEdad = 18
const edad = 19
const zapatillas = false
if (!zapatillas && edad  >= mayorDeEdad){
  console.log('dejo pasar')
}else{
  console.log('no puedes pasar')
}
// ternario
const mensaje = (!zapatillas && edad  >= mayorDeEdad) ? 'dejo pasar' : 'no puedes pasar'
console.log(mensaje)
// switch

// Bucles
// for
for (let i = 1; i<=10; i++){
  console.log(i + '. No volveré a  hablar en clase')
}
/// while
let i = 1
while (i<=10){
  console.log(i + '. No volveré a  hablar en clase')
  i++
}
// PREGUNTA ENTREVISTA TÉCNICA: diferencia entre FOR y WHILE
// for tienes x iteraciones
// while es un bucle sin limite de iteraciones

// Ejercicio: Mostrar numeros entre dos numeros dados
const inicio = 33
const fin = 56
for (let i = inicio; i <= fin; i++){
  console.log(i)
}
// Ejercicio: Mostrar numeros multiplos de 3 entre dos numeros dados
const inicio2 = 33
const fin2 = 56
for (let i = inicio2; i <= fin; i++){
  if (i%3 === 0){
    console.log(i)
  }
}
// Ejercicio: sacar por pantalla cada numero de un array
const arr = [12, 21, 399, 4, 53, 611]
for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

// Ejercicio: sumar todos los numeros de un array
const arr2 = [12, 21, 399, 4, 53, 611]
let acumulador = 0
for (let i = 0; i < arr2.length; i++){
  acumulador += arr2[i]
}
console.log('La suma es ' + acumulador)

// Ejercicio: escribir la tabla de multiplicar del 1
for (let i = 1; i <= 10; i++){
  for(let j = 1; j <= 10; j++){
    console.log(i + 'x' + j + '=' + i*j)
  }
}

// Ejercicio: encontrar en maximo de un array (suponiendo numeros positivos)
const arr3 = [1, 99999, 10, 6, 809870987, 2]
let maximoPositivo = 0
for (let i = 0; i <= arr3.length; i++){
  if (arr3[i] > maximoPositivo){
    maximoPositivo = arr3[i]
  } 
}
console.log('El maximo es el ' + maximoPositivo)

// Ejercicio: encontrar en maximo de un array (suponiendo numeros negativos)
const arr4 = [-1, -99999, -10, -6, -809870987, -2]
let maximoNegativo = Number.NEGATIVE_INFINITY
for (let i = 0; i <= arr4.length; i++){
  if (arr4[i] > maximoNegativo){
    maximoNegativo = arr4[i]
  } 
}
console.log('El maximo es el ' + maximoNegativo)

// Ejercicio: buscar un numero en un array
const numero = 33
const arr5 = [2, 8, 9, 33, 1]
let index = 0
let encontrado = false
while (index < arr5.length && !encontrado){
  if (arr5[index] === numero){
    encontrado = true
  }
  index++
}
console.log(encontrado)

// break
// try catch