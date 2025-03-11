// los interface son un contrato, estoy definiendo los elementos de objeto. objetos literales - JSON - objetos propios Class
let nombre: string | number = "ddd";
nombre = 2;
let edad: any = "h"
edad = 3

interface IUsuario {
    id?: number;
    nombre: string;
    edad: number;
}


const usuario: IUsuario[] = [
    { nombre: 'Juan', edad: 42 },
    { id: 2, nombre: 'Maria', edad: 23 },
    { id: 3, nombre: 'Pepe', edad: 67 },
    { id: 4, nombre: 'Lucia', edad: 50 },
]

interface ITarea {
    priority: number;
    printTask(): string;
}

class Tarea implements ITarea {
    //sin let es un propiedad
    private title: string = ""
    priority: number = 0;

    constructor(title, priority) {
        this.title = title;
        this.priority = priority
    }

    printTask(): string {
        return `${this.title} - ${this.priority}`
    }

    //getter - me permite leer un elemento private
    getTitle(): string {
        return this.title
    }
    // setter - me permite modificar una propieda private
    setTitle(newtitle: string): void {
        this.title = newtitle
    }


}

let tarea = new Tarea('Estudiar Angular', 1)


