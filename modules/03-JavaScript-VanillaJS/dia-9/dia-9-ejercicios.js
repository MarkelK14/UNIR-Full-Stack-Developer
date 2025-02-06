// EJERCICIO 1: https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
// Corregidor de notas
    // Correct answer       |    Student's answer   |   Result         
    // ---------------------|-----------------------|-----------
    // ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
    // ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
    // ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
    // ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
const respuestasCorrectas = ["a", "a", "b", "b"]
const respuestas = ["a", "c", "b", "d"]

// acierto = +4
// fallo = -1
// blanco = 0
// no se puede sacar menos de 0
const checkExam = (solutions, studentExam) => {
    let acc = 0
    solutions.forEach((solution, i) => {
        if (studenExam[i] !== '') {
            if (solution === studentExam[i]) {
                acc += 4
            } else {
                acc -= 1
            }
    }   
    })
    // return acc < 0 ? 0 : acc
    return Math.max(acc, 0)
}
console.log(checkExam(respuestasCorrectas, respuestas))


// INCLUDES --> Devuelve booleano si encuentra el resultado en el array
const numeros = [1,2,3,4,5]
console.log(numeros.includes(5))