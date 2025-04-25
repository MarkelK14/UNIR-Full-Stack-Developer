class Empleado {
    nombre;
    apellido;
    email; 
    telefono;

    constructor (nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }
}

module.exports = Empleado; // Exporta la clase Empleado