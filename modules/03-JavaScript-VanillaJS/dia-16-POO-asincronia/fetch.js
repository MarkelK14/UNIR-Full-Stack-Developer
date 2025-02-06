// FUENTE DE ORIGEN
const unaPromesa = fetch('https://jsonplaceholder.typicode.com/posts')
unaPromesa.then(res =>{
    res.json().then((posts => {
      console.log(posts)
    }))
})

// AZUCAR SINTACTICO 1
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =>{
    res.json().then((posts => {
      console.log(posts)
    }))
})

// AZUCAR SINTACTICO 2
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then((posts => {
      console.log(posts)
    }))

// AZUCAR SINTACTICO 3
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then((posts => console.log(posts)))


// RESULTADO FINAL
const procesarPosts = (posts) => {
    console.log(posts)
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(procesarPosts)

//RESUMEN
// fetch(elURLquequierasusar)
// .then(res=>res.json())
// .then(losdatosquequerias => return devuelveslosdatos)