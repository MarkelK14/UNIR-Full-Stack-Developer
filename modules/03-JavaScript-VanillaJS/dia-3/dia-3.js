// break
for (let i = 0; i <= 10; i++){
    console.log(i)
    if(i === 10){
      break
    }
}
// try catch
try{
throw new Error ('fallo!')
}catch (err){
console.log(err)
}

// switch
const diaSemana = 'L'
switch (diaSemana) {
    case 'L':{
    console.log('Lunes')
    break
    }
    case 'M':{
    console.log('Martes')
    break
    }
    case 'X':{
    console.log('Miércoles')
    break
    }
default:{
    console.log('Día no encontrado')
}
}

//alternativa: diccionario
const diccionario = {
    L: 'Lunes',
    M: 'Martes',
    X: 'Miércoles',
}
const seleccion = 'J'
const mensaje1 = (typeof diccionario[seleccion] === 'undefined') ? 'Día no encontrado' : diccionario[seleccion]
console.log(mensaje1)
const mensaje2 = (typeof diccionario[seleccion] !== 'undefined') ? diccionario[seleccion] : 'Día no encontrado'
console.log(mensaje2)

// ?? --> si diccionario[seleccion] es null o algo que pueda ser falso, devuelve 'Día no encontrado'. Si concatenas, devuelve el primero que no sea falso
const mensaje3 = diccionario[seleccion] ?? 'Día no encontrado' ?? 'No hay día'
console.log(mensaje3)

// Ejercicio 1: sumar los números pares de entre dos números dados
const inicio = 2
const fin = 45
let suma = 0
for (let i = inicio; i <= fin; i++){
  if (i % 2 === 0){
    suma += i
  }
}
console.log(suma)
suma = 0
let inicioPar = (inicio % 2 === 1) ? inicio + 1 : inicio
for (let i = inicioPar; i <= fin; i = i + 2){
  suma += i
}
console.log(suma)

// Ejercicio 2: convierte un array en otro array multiplicando cada elemento por 2
const arrInicio = [2, 6, 10, 22]
const arrFinal = [] //[4, 12, 20, 44]

for (let i = 0; i < arrInicio.length; i++){
  arrFinal[i] = arrInicio[i] * 2
}
console.log(arrFinal)

// Ejercicio 3: hacer un bucle del 1 al 15 que escriba:
    // - fizz si el numero es multiplo de 3
    // - buzz si el numero es multiplo de 5
    // - fizzbuzz si el numero es multiplo de 3 y de 5

const inicio1 = 1
const fin1 = 15
for (let i = inicio1; i <= fin1; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz')
  }else  if (i % 3 === 0){
    console.log('fizz')
  }else  if (i % 5 === 0){
    console.log('fizz')
  }else{
    console.log(i)
  }
}

for (let i = inicio1; i <= fin1; i++){
  let acumulador = ''
  if (i % 3 === 0){
    acumulador = 'fizz'
  }
  if (i % 5 === 0){
    acumulador = acumulador + 'buzz'
  }
  console.log(acumulador === '' ? i : acumulador)
}

// Ejercicio 4: dar la vuelta a un array
const arr = ['Álvaro', 'Ángela', 'Pablo']
const arrDestino1 = []
const arrDestino2 = []

for (let i = arr.length -1; i >= 0; i--){
  arrDestino1.push(arr[i])
}
console.log(arrDestino1)

let j = 0
for (let i = arr.length -1; i >= 0; i--){
  arrDestino2[j] = arr[i]
  j++
}
console.log(arrDestino2)

// Ejercicio 5: Contar vocales
const arrVocales = ['A', 'B', 'C', 'D', 'E', 'F'] // 2
const vocales = ['A', 'E', 'I', 'O', 'U']

for (let i = 0; i < arrVocales.length; i++){
  if (vocales.includes(arrVocales[i])){
    console.log(arrVocales[i])
  }
}

for (let i = 0; i < arrVocales.length; i++){
  if (vocales.includes(arrVocales[i])){
    console.log(arrVocales[i])
  }
}


let acc = 0
for (let i=0; i<arrVocales.length; i++){
  switch(arrVocales[i].toLowerCase()){
    case 'a':
    case 'e' :
    case 'i':
    case 'o':
    case 'u':{
      acc = acc +1
    }
  }
}
console.log(acc)