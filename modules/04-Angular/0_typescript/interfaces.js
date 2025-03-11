// los interface son un contrato, estoy definiendo los elementos de objeto. objetos literales - JSON - objetos propios Class
var nombre = "ddd";
nombre = 2;
var edad = "h";
edad = 3;
var usuario = [
    { nombre: 'Juan', edad: 42 },
    { id: 2, nombre: 'Maria', edad: 23 },
    { id: 3, nombre: 'Pepe', edad: 67 },
    { id: 4, nombre: 'Lucia', edad: 50 },
];
var Tarea = /** @class */ (function () {
    function Tarea(title, priority) {
        //sin let es un propiedad
        this.title = "";
        this.priority = 0;
        this.title = title;
        this.priority = priority;
    }
    Tarea.prototype.printTask = function () {
        return "".concat(this.title, " - ").concat(this.priority);
    };
    return Tarea;
}());
var tarea = new Tarea('Estudiar Angular', 1);
console.log(tarea.title);
