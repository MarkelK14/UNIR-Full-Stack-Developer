const albums = []
let photos

const placeholderToPlacehold = (placeholderUrl) => {
    // const url = new URL(placeholderUrl)
    // console.log(url.pathname)

    // Es lo mismo: (desestructuracion)
    const {pathname} = new URL(placeholderUrl)

    return `https://placehold.co${pathname}/png`
}

const showDialog =(photoId) => {
    const dialog = document.querySelector('.x-dialog')
    const photo = photos.find(photo => Number(photo.id) === Number(photoId))
    const {url} = photo //destructuración, es lo mismo que const url = photo.url

    // remove previous photo
    const previousImg = dialog.querySelector('img')
    if(previousImg !== null){
        previousImg.remove()
    }

    const img = document.createElement('img')
    img.src = placeholderToPlacehold(url)
    dialog.appendChild(img)
    dialog.setAttribute('open', true)
}

const dialogCloseBtnClickHandler = (event) => {
    const btn = event.target
    const dialog = btn.closest('.x-dialog') // busca el elemento padre que tenga la clase x-dialog
    // query selector es de padre a hijo y closest de hijo a padre

    dialog.removeAttribute('open')
}

const albumDetailClickHandler = (event) => {
    const photoId = event.target.dataset.photoId
    if(typeof photoId !== 'undefined'){
        paintAlbum(showDialog(photoId))
    }
}

const albumSelectorClickHandler = (event) => {
    const albumId = event.target.dataset.albumId
    if(typeof albumId !== 'undefined'){
        paintAlbum(Number(albumId))
    }
}

const init = (photosInfo) => {
    photos = photosInfo
    photos.forEach(photo => {
        if(!albums.includes(photo.albumId)){
            albums.push(photo.albumId)
        }
    })
    paintAlbums()

    //listeners
    document.querySelector('.x-album-selector').addEventListener('click', albumSelectorClickHandler)
    document.querySelector('.x-album-detail').addEventListener('click', albumDetailClickHandler)
    document.querySelector('.x-dialog-close-button').addEventListener('click', dialogCloseBtnClickHandler)
}

const paintAlbums = () => {
    const albumsEl = document.querySelector('.albums-list')
    albums.forEach(albumId => {
        const newButtonEl = document.createElement('button')
        newButtonEl.textContent = albumId
        newButtonEl.dataset.albumId = albumId
        albumsEl.appendChild(newButtonEl)
    })
}

const paintAlbum = (albumId) => {
    const photosInAlbum = photos.filter(photo => photo.albumId == albumId)
    const albumDetailEl = document.querySelector('.x-album-detail')
    // albumDetailEl.textContent = '' //vacío el contenido
    albumDetailEl.innerHTML = `<h2>Album ${albumId}</h2>` //vacío y pongo el título

    photosInAlbum.forEach(photo => {
        const imgEl = document.createElement('img')
        imgEl.src = placeholderToPlacehold(photo.thumbnailUrl)
        imgEl.dataset.photoId = photo.id
        albumDetailEl.appendChild(imgEl)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(res=>res.json()).then(init)
})