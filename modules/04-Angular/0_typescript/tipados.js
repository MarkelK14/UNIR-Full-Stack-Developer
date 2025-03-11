var nombre = "Juan Antonio";
var edad = 23;
var estado = true;
console.log(typeof nombre);
//tipar array
//opcion1 
var nombres = ['Juan', "Pepe", 'Lucia', 'Rodrigo', 'Maria'];
//opcion2
var numeros = [1, 2, 3, 4, 56];
// funciones se puede tipar los parametros de entrada y tambien se puede tipar la salida
function sumar(n1, n2) {
    return n1 + n2;
}
console.log(sumar(2, 2));
var restar = function (n1, n2) {
    var resultado = n1 - n2;
    return "el resultado de restar ".concat(n1, " y ").concat(n2, " seria ").concat(resultado);
};
console.log(restar(12, 3));
