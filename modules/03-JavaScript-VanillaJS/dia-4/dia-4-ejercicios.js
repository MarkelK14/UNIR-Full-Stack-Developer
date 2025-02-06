// Ejercicio 1: Funcion que cuente ovejas (recibe como parámetro el número de ovejas)
const sheepCounter = (sheepNumber) => {
    for (let i = 1; i <= sheepNumber; i++) {
        if(i === 1){
            console.log(i + ' oveja')
        } else {
            console.log(i + ' ovejas')
        }
    }
}
sheepCounter(19)

// Ejercicio 1 optimizado: Funcion que cuente ovejas (recibe como parámetro el número de ovejas)
const sheepCounter2 = (sheepNumber) => {
    if(sheepNumber > 0){
        console.log('1 oveja')
        for (let i = 1; i <= sheepNumber; i++) {
            console.log(i + ' ovejas')
        }
    }
}
sheepCounter2(19)

// Ejercicio 2: Función que me devuelva la media de un array pasado como parámetro
const notas = [10, 2, 5, 7, 8]
function calculaMedia(arr) {
    if (!Array.isArray(arr)) {
        return 'No es un array'
    }
    else if (arr.length === 0) {
        return 'El array está vacío'
    }
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
}
console.log(calculaMedia(notas))