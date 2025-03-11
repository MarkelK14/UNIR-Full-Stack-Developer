let nombre: string = "Juan Antonio";
let edad: number = 23;
let estado: boolean = true;
console.log(typeof nombre)

//tipar array
//opcion1 
const nombres: string[] = ['Juan', "Pepe", 'Lucia', 'Rodrigo', 'Maria']

//opcion2
const numeros: Array<number> = [1, 2, 3, 4, 56]

// funciones se puede tipar los parametros de entrada y tambien se puede tipar la salida

function sumar(n1: number, n2: number): number {
    return n1 + n2
}

console.log(sumar(2, 2))

const restar = (n1: number, n2: number): string => {
    let resultado: number = n1 - n2;
    return `el resultado de restar ${n1} y ${n2} seria ${resultado}`
}

console.log(restar(12, 3))