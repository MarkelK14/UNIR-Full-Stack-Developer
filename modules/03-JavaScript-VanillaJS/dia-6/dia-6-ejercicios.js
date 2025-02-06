// EEJRCICIO 1: https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript
// Write a function that takes a string of parentheses, and determines if the order of the parentheses  is valid. The function should return true if the string is valid, and false if it's invalid.
const parentesisValidos = (str) => {
    const arr = str.split('')
    let acumulador = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '('){
            acumulador++
        }else{
            acumulador--
        }
        if (acumulador < 0){
            return false
        }
    }
    return acumulador === 0
}
console.log(parentesisValidos('()')) // true
console.log(parentesisValidos(')(()))')) // false
console.log(parentesisValidos('(')) // false
console.log(parentesisValidos('(())((()())())')) // true

// EJERCICIO 2: https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
    let result = ''
    const vocales = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < string.length; i++){
      if (!vocales.includes(string[i])){
        result += string[i]
      }
    }
    
    return result;
}

// EJERCICIO 3: https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript
//Write a function that removes the spaces from the values and returns an array showing the space decreasing.
const unArray = ['i', 'have', 'no', 'space']
const runningOut1 = (array) => {
    let result = []
    let accText = ''
    for (let i = 0; i < array.length; i++){
        accText += array[i]
        result[i] = accText
    }
    return result
}
const runningOut2 = (array) => {
    let result = []
    let accText = ''
    for (let i = 0; i < array.length; i++){
        if (i === 0){
            result[i] = array[i]
        }else{
            result[i] = result[i-1] + array[i]
        }
    }
    return result
}
console.log(runningOut1(unArray))
console.log(runningOut2(unArray))

// EJERCICIO 4: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript


// EJERCICIO 5: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
    //accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(string) {
    let result = ''
    let contadorLetra = 0
	for (let i = 0; i < string.length; i++){
        contadorLetra = 1
        for (let j = 0; j <= i; j++){
            result += (contadorLetra === 1) ? string[i].toUpperCase() : string[i].toLowerCase()
            contadorLetra++
        }
        result += ((i+1) === string.length) ? '' : '-'
    }
    return result
}
console.log(accum('abcd')) // A-Bb-Ccc-Dddd