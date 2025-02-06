const albums = []
let photos

const placeholderToPlacehold = (placeholderUrl) => {
    const {pathname} = new URL(placeholderUrl)
    return `https://placehold.co${pathname}/png`
}

const showDialog = (photoId) => {
    const dialog = document.querySelector('.x-dialog')
    const photo = photos.find(photo => photo.id === photoId)
    const {url} = photo

    // remove previous img tag
    const previousImg = dialog.querySelector('img')
    if (previousImg !== null) {
        previousImg.remove()
    }

    const img = document.createElement('img')
    img.src = placeholderToPlacehold(url)
    dialog.append(img)

    dialog.setAttribute('open', 'true')
}

const albumDetailClickHandler = (event) => {
    const photoId = event.target.dataset.photoId
    if(typeof photoId !== 'undefined') {
        showDialog(Number(photoId))
    }
}

const albumSelectorClickHandler = (event) => {
    const albumId = event.target.dataset.albumId
    if(typeof albumId !== 'undefined') {
        paintAlbum(Number(albumId))
    }
}

const dialogCloseBtnClickHandler = (event) => {
    const btn = event.target
    const dialog = btn.closest('.x-dialog')
    dialog.removeAttribute('open')
}

const init = (photosInfo) => {
    photos = photosInfo
    photos.forEach(photo => {
        if (!albums.includes(photo.albumId)) {
            albums.push(photo.albumId)
        }
    })
    paintAlbums()

    // listeners
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
        albumsEl.append(newButtonEl)
    })
}

const paintAlbum = (albumId) => {
    const photosInAlbum = photos.filter(photo => photo.albumId === albumId)
    const albumDetailEl = document.querySelector('.x-album-detail')
    albumDetailEl.innerHTML = `<h2>Album: ${albumId}</h2>`
    photosInAlbum.forEach(photo => {
        const imgEl = document.createElement('img')
        imgEl.src = placeholderToPlacehold(photo.thumbnailUrl)
        imgEl.dataset.photoId = photo.id
        albumDetailEl.append(imgEl)
    })
}

document.addEventListener('DOMContentLoaded',() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(res=>res.json()).then(init)
})

