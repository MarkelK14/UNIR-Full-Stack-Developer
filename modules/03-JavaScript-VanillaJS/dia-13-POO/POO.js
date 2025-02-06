// Programación Orientada a Objetos
class Coche{

    #bastidor // propiedad privada

    constructor(marca, matricula, bastidor){
        this.marca = marca;
        this.matricula = matricula;
        this.encendido = false;
        this.#bastidor = bastidor;

        console.log(`Se ha creado un coche de la marca ${marca} y matrícula ${matricula}`);
    }

    encender(){
        this.encendido = true;
    }

    apagar(){
        this.encendido = false;
    }

    getBastidor(){
        return this.#bastidor;
    }
}

class Descapotable extends Coche{
    constructor(){
        super() // llama al constructor de la clase padre y luego ejecuta el constructor de la clase hija
        this.capotado = true
    }

    capotar(){
        this.capotado = true;
    }
    descapotar(){
        this.capotado = false;
    }
}

class Parking {
    constructor(nombre){
        this.nombre = nombre
        this.coches = [];
    }

    aparcar(coche){
        this.coches.push(coche);
    }
    sacar(){
        return this.coches.shift(); // saca del array el primer elemento
    }
}

const parkingPepe = new Parking('Parking Pepe');

const coche1 = new Coche('Renault', '1234ABC', '23HGH232F');
const coche2 = new Coche('Mazda', '4321CBA', '12HF1U2KF');

parkingPepe.aparcar(coche1);
parkingPepe.aparcar(coche2);
parkingPepe.coches
console.log(parkingPepe.sacar())
parkingPepe.coches
const descapotable = descapotable('Ferrari', '5678DEF', '73NWU901N');
deacapotable.capotar();
descapotable.capotado// true
coche1.descapotar();// error --> Es coche, pero no es descapotable