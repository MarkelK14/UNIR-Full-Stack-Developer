const postListClickHandler = (event) => {

    console.log(event.target) // Vemos el elemento que ha sido clickeado
    console.log(event.target.dataset.id) // Vemos el id del elemento clickeado

    if (event.target.id !== 'undefined'){
        const id = Number(event.target.dataset.id) // Guardamos el id del elemento clickeado. Lo convertimos a number porque por defecto viene en string
        const post = posts.find(post => post.id === id) // Buscamos el post con el id clickeado
        
        const postDetailWrapper = document.querySelector('.post-detail-wrapper')
        postDetailWrapper.textContent = ''

        ///user
        const user = document.createElement('p')
        user.textContent = `User: ${post.userId}`
        postDetailWrapper.appendChild(user)
        //title
        const title = document.createElement('p')
        title.textContent = `Title: ${post.title}`
        postDetailWrapper.appendChild(title)
        //body
        const body = document.createElement('p')
        body.textContent = `Body: ${post.body}`
        postDetailWrapper.appendChild(body)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const postList = document.querySelector('.post-list')
    
    posts.forEach(post => {
        const nuevoLi = document.createElement('li')
        nuevoLi.textContent = post.title
        nuevoLi.dataset.id = post.id
        postList.appendChild(nuevoLi)

        
        // nuevoLi.addEventListener('click', (event) => {
        //     nuevoLiClickHandler(event)
        // });
        // Es lo mismo
        // nuevoLi.addEventListener('click', nuevoLiClickHandler);
    })

    postList.addEventListener('click', postListClickHandler); // Se le añade el evento al padre, y se delega la responsabilidad a los hijos
});