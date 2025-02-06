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
    }
];

// Ejercicio 1: Sumar las edades de los usuarios
const sumaEdades = listadoUsuarios.reduce((acumulador, usuario) => {
    return acumulador + usuario.edad;
}, 0);
console.log(sumaEdades)

// Ejercicio 2: Sacar un array de los nombres de los usuarios
const nombres = listadoUsuarios.map((usuario) => usuario.nombre);
console.log(nombres)

// Ejercicio 3: Coger solo los usuarios que sean Virgo
const virgos = listadoUsuarios.filter((usuario) => usuario.signoZodiaco === 'Virgo');
console.log(virgos)

// Ejercicio 4: Comprobar si Gabriel Pacheco está en la lista
const estaGabriel = listadoUsuarios.find((usuario) => usuario.nombre === 'Gabriel Pacheco');
console.log(estaGabriel)

// Ejercicio 5: Contar las veces que sale cada palabra en una frase --> reduce vs forEach vs for