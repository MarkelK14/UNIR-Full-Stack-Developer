//una decorador es una funcion que se aplica antes de propiedad(varible), funcion o de clase,
//el objetivo es decorar a lo precede.
function miDecorador(constructor: Function) {
    console.log('el decorador se ha ejecutado')
}

@miDecorador
class miClase {
    nombre: string = '';


    constructor(name: string) {
        this.nombre = name
        console.log('Bienvenido ' + this.nombre)
    }

}

const clase = new miClase('Juan Antonio');

