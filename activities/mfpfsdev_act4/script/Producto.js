class Producto {

    #sku
    #title
    #price

    constructor(sku, title, price) {
        this.#sku = sku
        this.#title = title
        this.#price = price
    }

    getSKU() {
        return this.#sku
    }

    getTitle() {
        return this.#title
    }

    getPrice() {
        return this.#price
    }

    getProduct() {
        return {
            SKU: this.#sku,
            title: this.#title,
            price: this.#price
        }
    }
}