class Carrito{
    #currency
    constructor(currency){
        this.productos = []
        this.cantidades = []
        this.#currency = currency
    }

    anadirProducto(producto) {
        this.productos.push(producto)
    }

    actualizarUnidades(sku, unidades) {
        this.cantidades[sku] = unidades
    }

    obtenerInformacionProducto(sku) {
        const productoEncontrado = this.productos.find(producto => producto.getSKU() === sku);
        if (productoEncontrado) {
            return  {
            ...productoEncontrado, // copia todas las propiedades del producto
            quantity: this.cantidades[sku]  || 0, // si devuelve undefined, se asigna 0
            subtotal: Math.round(((this.cantidades[sku]  || 0) * productoEncontrado.getPrice()) * 100) / 100
            };
        }
    }

    obtenerCarrito() {
        let total = 0
        let productos = []
        this.productos.forEach(producto => {
            const cantidad = this.cantidades[producto.getSKU()]  || 0
            if(cantidad > 0){
                const precio = parseFloat(producto.getPrice())
                const subtotal = Math.round((precio * cantidad) * 100) / 100
                total += subtotal
                productos.push({
                    ...producto.getProduct(), // copia todas las propiedades del producto
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