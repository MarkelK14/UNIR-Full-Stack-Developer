// Eventos en clases
class Coche{
    constructor(matricula, marca, modelo, color){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
}

class Parking{
    constructor(){
        this.coches = [];
        this.listeners = {};
    }

    aparcar(coche){
        this.coches.push(coche);
        this.listeners['cocheAparcado'].forEach(callback => {
          callback(coche)
        })
    }
    sacar(){
        return this.coches.shift()
    }

    addEventListener(nombreEvento, callback){ //el callback es una función a ejecutar
        if (typeof this.listeners[nombreEvento] === 'undefined'){
            this.listeners[nombreEvento] = [callback]; // si listeners está vacío lo inicializamos como un array
        }else{
            this.listeners[nombreEvento].push(callback); // si ya tiene algo, añadimos el callback al array
        }
    }
}

//script1.js
const coche1 = new Coche('1234ABC', 'Ford', 'Focus', 'Azul');
const parking1 = new Parking();


//script2.js
parking1.addEventListener('cocheAparcado', (coche) => {
    console.log('El coche con matricula ' + coche.matricula + ' ha sido aparcado');
})
parking1.addEventListener('cocheAparcado', (coche) => {
    console.log('Otro evento de que han aparcado el coche con matricula ' + coche.matricula + ' ha sido aparcado');
})

parking1.aparcar(coche1);