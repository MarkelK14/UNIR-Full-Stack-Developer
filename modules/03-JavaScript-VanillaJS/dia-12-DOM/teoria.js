const saludador = () => {
console. log('ey')

}

//setTimeout --> ejecuta lo que le pases después del tiempo indicado por parámetro
//cleanTimeout --> resetea el contador del timeout
console. log('antes del timeout' )
setTimeout(saludador, '2000') // Limbo ??
console. log('despues del timeout' )


//setInterval --> ejecuta lo que le pases cada cierto tiempo indicado por parámetro
setInterval(saludador, '2000') //ejecuta saludador cada 2 segundos

const intervalId = setInterval(saludador, '2000') //ejecuta saludador cada 2 segundos
clearInterval(intervalId) //para el intervalo