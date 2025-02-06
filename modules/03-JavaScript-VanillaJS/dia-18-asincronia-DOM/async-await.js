const traerDatos = async () => {
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(res => res.json())
    //   .then(photos => console.log(photos))

    // es lo mismo:
    console.log('antes del fetch')
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await res.json()// con await convertimos el codigo asincrono en sincrono
    // es como hacer un "pause" en el codigo, hasta que no termina la linea 9 no sigue con la siguiente
    // si no tuviese un await en la linea 9, la linea 10 se ejecutaria antes de que termine la linea 9
    // se utiliza cuando necesitas especificamente que el await te devuelva algo para seguir con la ejecucion
    console.log('despues del fetch', photos)
}

traerDatos()