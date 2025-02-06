class Coche{
    #llave
    constructor(llave){
        this.#llave = llave;
    }

    arrancar(llave){
        if(llave === this.#llave){
            console.log('Arranca');
        }else{
            console.log('Llave incorrecta');
        }
    }
}

const llave = '123'
const unCoche = new Coche(llave);
unCoche.arrancar(llave);

//Problema: me pueden copiar la llave
unCoche.arrancar('123')

//Solucion: Symbol
const llave2 = Symbol("foo"); // => Esta llave pasa a ser única. Aunque utilice otro Symbol con el mismo foo, no arranca, necesitaria utilizar la variable
const otroCoche = new Coche(llave2);
otroCoche.arrancar(llave2); // => Arranca
const llave3 = Symbol("foo");
otroCoche.arrancar(llave3); // => Llave incorrecta