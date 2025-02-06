// https://www.codewars.com/kata/55f8ba3be8d585b81e000080

// 039 xxx xx xx - Golden Telecom
// 050 xxx xx xx - MTS
// 063 xxx xx xx - Life:)
// 066 xxx xx xx - MTS
// 067 xxx xx xx - Kyivstar
// 068 xxx xx xx - Beeline
// 093 xxx xx xx - Life:)
// 095 xxx xx xx - MTS
// 096 xxx xx xx - Kyivstar
// 097 xxx xx xx - Kyivstar
// 098 xxx xx xx - Kyivstar
// 099 xxx xx xx - MTS Test [Just return "MTS"]

// Detector de operador de telefonía móvil
const operadores = {
    '039': 'Golden Telecom',
    '050': 'MTS',
    '063': 'Life:)',
    '066': 'MTS',
    '067': 'Kyivstar',
    '068': 'Beeline',
    '093': 'Life:)',
    '095': 'MTS',
    '096': 'Kyivstar',
    '097': 'Kyivstar',
    '098': 'Kyivstar',
    '099': 'MTS'
}
const detectorOperador = (numeroTelefono) => {
    if (typeof operadores[numeroTelefono.slice(0, 3)] === 'undefined') {
        return 'Operador no enocontrado'
    }else{
        return operadores[numeroTelefono.slice(0, 3)]
    }
}

console.log(detectorOperador('099 123 45 789')) // MTS


//Operador Encadenamiento opcional --> ?. --> Si el valor es null o undefined, no se lanza una excepción, sino que se devuelve undefined
const alumno1 = {
    firstName: 'Félix',
    lastName: 'Blanco',
    address: {
        street: 'C/ Ninguna',
        streetNumber: '1',
        postalCode: '28001'
    },
    genero: 'M'
}

const alumno2 = {
    firstName: 'Félix',
    lastName: 'Blanco',
    address: {
        street: 'C/ Ninguna',
        streetNumber: '1'
    },
    genero: 'M'
}

const alumno3 = {
    firstName: 'Juan',
    lastName: 'Blanco'
}

console.log(alumno1.address.postalCode)
console.log(alumno2.address.postalCode)
console.log(alumno3.address.postalCode) // --> ERROR
console.log(alumno3.address?.postalCode) // --> undefined