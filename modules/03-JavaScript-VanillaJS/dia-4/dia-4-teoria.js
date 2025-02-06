// # Tema 3. Funciones

// function, anonima y arrow
    // Js Clásico
    function puertaDiscoteca(edad){
        return edad >= 18
    }
    const fila = [20,17,2,55]
    for (let i=0; i<fila. length; i++){
        console.log(puertaDiscoteca(fila[i]))
    }
    console.log(puertaDiscoteca(20))

    // Función anónima
    const puertaDiscoteca2 = function(edad) {
        return edad >= 18
    }

    console.log(puertaDiscoteca2(20))

    // ES6 (Js moderno, eñ de hoy en día): Arrow function
    const puertaDiscoteca3 = (edad) => {
        return edad >= 18
    }
    console.log(puertaDiscoteca3(20))

    //Arrow function al mínimo
    const puertaDiscoteca3minimo = edad => edad >= 18
    console.log(puertaDiscoteca3minimo(19))
    const elevarcuadrado = x =>x*x
    console.log(elevarcuadrado(5))

// ## Parámetros de una función
    const elevarCuadrado = (x) => {
        return x*x
    }
    console.log(elevarCuadrado(4))
    console.log(elevarCuadrado(5))

    const multiplicador = (numero1, numero2) => {
        return numero1*numero2
    }
    console.log(multiplicador(2,4))
    console.log(multiplicador(5,3))

    const saludador = (nombre, edad) => {
        console.log('Hola: ' + nombre + ', tienes ' + edad + ' años')
    }
    saludador('Markel', 24)

// ### Retorno de una función
    const mayorDeEdad = (edad) => {
        return edad >= 18
    }

// Ámbito de variables
    const puerta = (edad) => {
        const decision = edad >= 18
        
        if (decision) {
        const message = 'pasa, persona que tienes ' + edad + decision
        console.log(message)
        }
        return decision
    }
    puerta (19)

// ## Rest params