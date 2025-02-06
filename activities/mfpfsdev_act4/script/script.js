const modal = document.getElementById('infoModal')
const closeModalBtn = document.getElementById('closeModalBtn')

let carrito
    
const productButtonClickHandler = (event) => {

    const sku = event.target.dataset.id
    let cantidadActual = Number(carrito.obtenerInformacionProducto(sku).quantity)
    
    if(event.code === 'Enter' || event.keyCode === 13){

        if(Number.isInteger(event.target.valueAsNumber) && event.target.valueAsNumber >= 0){
            actualizarCarrito(event, sku, event.target.valueAsNumber)
        }else{
            modalToggler()
            actualizarCarrito(event, sku, null)
        }
        event.target.blur() // Quitar el foco del input
    }else if(event.target.classList.contains('btnAddQuantity')){
        actualizarCarrito(event, sku, cantidadActual + 1)
    }else if(event.target.classList.contains('btnSubQuantity')){
        if(cantidadActual > 0){
            actualizarCarrito(event, sku, cantidadActual - 1)
        }
    }
}

const actualizarCarrito = (event, sku, cantidad) => {
    cantidad !== null ? carrito.actualizarUnidades(sku, cantidad) : null
    event.target.parentElement.querySelector('.productQuantity').value = carrito.obtenerInformacionProducto(sku).quantity
    event.target.parentElement.parentElement.parentElement.querySelector('.prodSubtotal').textContent = `${carrito.obtenerInformacionProducto(sku).subtotal}€`

    actualizarTicket(carrito)
}

const actualizarTicket = (carrito) => {
    const ticketWrapper = document.querySelector('.table__ticket-body')
    ticketWrapper.textContent = ''
    const ticketTemplate = document.querySelector('#products__ticket-template')
    
    carrito.obtenerCarrito().products.forEach(producto => {
        const nuevoProductoTicket = ticketTemplate.content.cloneNode(true)
        nuevoProductoTicket.querySelector('.table__ticket__title').textContent = `${producto.title} (x${producto.quantity})`
        nuevoProductoTicket.querySelector('.table__ticket__price').textContent = producto.subtotal + '€'
        ticketWrapper.append(nuevoProductoTicket)
    })
    document.querySelector('#table__ticket__price').textContent = carrito.obtenerCarrito().total + carrito.obtenerCarrito().currency
}

const initCarrito = (products) => {

    const productWrapper =  document.querySelector('.table__products-body')
    const productTemplate = document.querySelector('#products__table-template')
    const currency = products.currency

    carrito =  new Carrito(currency)

    products.products.forEach(producto => {
        const unProducto = new Producto(producto.SKU, producto.title, producto.price)

        carrito.anadirProducto(unProducto)

        const newProductElement = productTemplate.content.cloneNode(true)
        newProductElement.querySelector('.prodName').textContent = unProducto.getTitle()
        newProductElement.querySelector('.prodReference').textContent = `Ref: ${unProducto.getSKU()}`
        newProductElement.querySelector('.productQuantity').value = 0
        newProductElement.querySelector('.prodPrice').textContent = unProducto.getPrice() + currency
        newProductElement.querySelector('.prodSubtotal').textContent = '0' + currency

        const txtQuantity = newProductElement.querySelector('.productQuantity')
        txtQuantity.addEventListener('keypress', productButtonClickHandler)
        txtQuantity.dataset.id = unProducto.getSKU()

        const buttonAdd = newProductElement.querySelector('.btnAddQuantity')
        buttonAdd.addEventListener('click', productButtonClickHandler)
        buttonAdd.dataset.id = unProducto.getSKU()

        const buttonSub = newProductElement.querySelector('.btnSubQuantity')
        buttonSub.addEventListener('click', productButtonClickHandler)
        buttonSub.dataset.id = unProducto.getSKU()
        productWrapper.append(newProductElement)
    })
    
    document.querySelector('#table__ticket__price').textContent = carrito.obtenerCarrito().total + currency
}

initModalEventListeners = () => {
    window.addEventListener('click', (event) => event.target === modal ? modalToggler() : null)
    closeModalBtn.addEventListener('click', () => modalToggler())
}

modalToggler = () => {
    modal.classList.toggle('modal--active')
}

document.addEventListener('DOMContentLoaded', () => {
    // Para modificar los datos: https://jsonblob.com/1333816026521067520
    fetch('https://jsonblob.com/api/jsonBlob/1333816026521067520')
    .then ((res) => res.json())
    .then((cartInfo) => {
        initCarrito(cartInfo)
        initModalEventListeners()
    })
})