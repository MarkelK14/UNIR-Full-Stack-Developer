//Js es de tipado debil, no se puede definir el tipo de variable (string, int...)

//Primitivos
const a = 3
const b = 'hola mundo'
const c = true
const d = undefined //Js no tiene ni idea de lo que le estas diciendo
const e = null
//Complejos
const array = ['Lucas', 'Jorge', 'Rodrigo']
console.log(array[0])

const objeto = {
  firstName: 'Lucas',
  lastName: 'Vicente',
  notas: [10, 7, ],
  address: {
    street: 'Calle Gran Via',
    postalCode: '28013'
  }
}
console.log(objeto.firstName)
console.log(objeto.lastName)
console.log(objeto.notas)
console.log(objeto.address)
console.log(objeto.address.street)

//Variables / Constantes
let numero = 3
let letras = 'abc'
let boolean = true
console.log(numero + letras)
console.log(letras + boolean)
console.log(numero + boolean)

// Pregunta entrevista técnica nivel mid/senior
//lo que Js guarda es la forma de llegar a la memoria donde se encuentra el datos (puntero)
const alumno1 = {
  firstName: 'Juan Jose',
  lastName: 'Rodriguez'
}

const alumno2 = alumno1
alumno2.firstName = 'Pepe'
console.log(alumno1.fisrtName) // como apuntan a la misma direccion en memoria, se modifican los dos. Si cambia el contenido de uno, como el otro apunta a la misma direccion se modifica tambien

//Operadores
  //aritmeticos
    // suma, resta, multiplicacion, division, resto
    const suma = 10 + 5
    const resta = 10 - 5
    const multiplicacion = 10 * 5
    const division = 10 / 5
    const resto = 10 % 3
    //coma flotante
    console.log(0.2 + 0.1)

  //logicos
    // and
    false && false
    true && false
    false && true
    true && true
    // or
    false || false
    true || false
    false || true
    true || true
    // not
    !false
    !true
  //comparacion
  console.log(3 > 4)
  console.log(3 <= 4)
  console.log(3 >= 4)
  console.log(3 == 4)
  console.log(3 != 4)

  console.log(3 == 3) // compara valorsin mirar tipo
  console.log(3 == '3') // compara valor sin mirar tipo
  console.log(3 === '3') // compara valor y tipo
  
  //asignacion
  let miNumero = 3
  miNumero = miNumero + 1
  miNumero += 1

//Ejercicios
  //calculo imc
    // imc = peso /altura(m)^2
    const peso = 100
    const altura = 1.8
    const imc = peso / altura **2
    console.log(imc)

//caja registradora
//3 articulos, 10% de descuento, 21% IVA
const articulo1 = 33
const articulo2 = 4
const articulo3 = 17
const iva = 0.21
const descuento = 0.1
const total = articulo1 + articulo2 + articulo3
const totalConDescuento = total - total * descuento
const totalFinal = totalConDescuento + totalConDescuento * iva
console.log(totalFinal)

