class Coche{

    #llave
    #encendido

    constructor(llave){
        this.#llave = llave
        this.#encendido = false
    }
    arrancar(llave){
        if(this.#llave === llave){
            this.#encendido = true
            console.log('Se ha arrancado el coche')
        }else{
            console.log('llave incorrecta')
        }
    }
    apagar(llave){
         if(this.#llave === llave){
            this.#encendido = false
            console.log('Se ha apagado el coche')
        }else{
            console.log('llave incorrecta')
        }
    }
}

const unaLlave = '1234567890'
const coche1 = new Coche(unaLlave)
coche1.arrancar(unaLlave)
coche1.apagar(unaLlave)
coche1.arrancar(coche1.llave) // eso no debería de funcionar, sería un problema de seguridad. Debería estar protegida, que no se pueda pedir la llave desde fuera