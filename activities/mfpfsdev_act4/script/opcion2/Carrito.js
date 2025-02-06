class Carrito{
    #currency
    constructor(productos, currency){
        this.productos = productos
        this.cantidades = []
        this.#currency = currency
    }

    actualizarUnidades(sku, unidades) {
        this.cantidades[sku] = unidades
    }

    obtenerInformacionProducto(sku) {
        const productoEncontrado = this.productos.find(producto => producto.SKU === sku);
        if (productoEncontrado) {
            return  {
            ...productoEncontrado, // copia todas las propiedades del producto
            quantity: this.cantidades[sku]  || 0, // si devuelve undefined, se asigna 0
            subtotal: Math.round(((this.cantidades[sku]  || 0) * productoEncontrado.price) * 100) / 100
            };
        }
    }

    obtenerCarrito() {
        let total = 0
        let productos = []
        this.productos.forEach(producto => {
            const cantidad = this.cantidades[producto.SKU]  || 0
            if(cantidad > 0){
                const precio = parseFloat(producto.price)
                const subtotal = Math.round((precio * cantidad) * 100) / 100
                total += subtotal
                productos.push({
                    ...producto, // copia todas las propiedades del producto
                    quantity: cantidad,
                    subtotal: Math.round((subtotal) * 100) / 100
                })
            }
        })
        return {
            total: Math.round((total) *100)/100,
            currency: this.#currency,
            products: productos
        }
    }
  
}