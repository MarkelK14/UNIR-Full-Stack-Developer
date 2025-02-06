const postButtonClickHandler = (evento) => { //Manejador de eventos de click en el boton
    console.log(typeof evento)
    // alert(posts.find(post => post.id === Number(evento.target.parentElement.dataset.id)).title) //Busca el post con el id que coincide con el id del li que contiene el boton y muestra el id
    alert(posts.find(post => post.id === Number(evento.target.dataset.id)).title) //Busca el post con el id que coincide con el id del li que contiene el boton y muestra el id
}

document.addEventListener('DOMContentLoaded', () => {
    // pintar posts
    const postsWrapper =  document.querySelector('.posts');
    const postTemplate = document.querySelector('#post-template') // Opcion 3

    posts.forEach(post => {
        console.log(post)

        //Opciones para pintar informacion
        
        // //Opcion 1 => createElement 🙈
        // const li = document.createElement('li')
        // li.classList.add('post')
        // // li.dataset.id = post.id

        // const pTitulo = document.createElement('p')
        // pTitulo.classList.add('titulo')
        // pTitulo.textContent = post.title
        // const pBody = document.createElement('p')
        // pBody.classList.add('body')
        // pBody.textContent = post.body
        // const button = document.createElement('button')
        // button.textContent = 'Get ID'
        // button.dataset.id = post.id
        // // button.addEventListener('click', (event)=>{
        // //     postButtonClickHandler(event) //Aquí solo pinto elementos, la lógica del click es mejor separarla para que el código quede más limpio
        // // })
        // //es lo mismo:
        // // button.addEventListener('click', postButtonClickHandler) //Otra forma de hacerlo, más correcto.
        //     // si como segundo parametro de un addlistener te ngo una funcion que recibe por param evento,
        //     // que llama a una funcion que llama por parametro a vento, me puedo ahorrar esa funcion
        //     button.addEventListener('click', postButtonClickHandler)

        // li.appendChild(pTitulo)
        // li.appendChild(pBody)
        // li.appendChild(button)
        // postsWrapper.appendChild(li)

        // //Opcion 2 => innerHTML 👍
        // const nuevoLi = document.createElement('li')
        // nuevoLi.classList.add('post')
        // nuevoLi.innerHTML = `<p>${post.title}</p><p>${post.body}</p><button data-id=${post.id} class="button">Get ID</button>`
        // nuevoLi.querySelector('.button').addEventListener('click', postButtonClickHandler)
        // postsWrapper.appendChild(nuevoLi)

        //Opcion 3 => template 👌
        // const postTemplate = document.querySelector('#post-template') // Lo dejamos fuera para no seleccionarlo más de una vez al estar dentro del forEach
        const nuevoPpost = postTemplate.content.cloneNode(true) //clonar el template. Es como si ya hubiera hecho un createElement con toda la estructura del template
        nuevoPpost.querySelector('.title').textContent = post.title
        nuevoPpost.querySelector('.body').textContent = post.body
        const button = nuevoPpost.querySelector('.button')
        button.dataset.id = post.id
        button.addEventListener('click', postButtonClickHandler)
        postsWrapper.append(nuevoPpost)
    })
});