/* 
Desarrollar las pruebas para la función sumar
- sumar(3,4) -> 7
- sumar(2, 9) -> 11
*/

function sumar(num1, num2) {
    return num1 + num2;
}

describe('pruebas para la función sumar', () => {

    it('debería retornar la suma de los dos números', () => {
        const result = sumar(3, 4);
        expect(result).toBe(7);
        expect(sumar(2, 9)).toBe(11);
    });

})