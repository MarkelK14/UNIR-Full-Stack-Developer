//La asincronia es que se puedea ejecutar codigo distinto en un mismo hilo de ejecución

// Hijo Padre

console.log('Soy el hilo padre')

const unaPromesa = new Promise((resolve, reject) =>{
  //Hilo hijo
    console.log('Soy el hilo hijo')
  
  setTimeout(() => {
    console.log('Soy el hilo hijo que ha terminado')
    resolve('Todo OK') //es como un return
    //reject('Ha ido mal :(')
  }, 3000)
})

console.log(unaPromesa)

// unaPromesa.then ((res)=>{
//   console.log('Toma los nuggets', res)
//   console.log(unaPromesa)
// })
// unaPromesa.catch ((res)=>{
//   console.log('Castigado', res)
// })

unaPromesa
    .then ((res)=>{
    console.log('Toma los nuggets', res)
    console.log(unaPromesa)
  })
  .catch ((res)=>{
    console.log('Castigado', res)
  })

console.log('Soy el hilo padre que sigue haciendo cosas')