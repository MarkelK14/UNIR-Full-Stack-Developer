class Product{
    constructor(sku, name, price){
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.quantity = 0;
    }
}

class Products{
    constructor(){
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    removeProduct(sku){
        this.products = this.products.filter(product => product.sku !== sku);
    }

    showProducts(){
        console.log(this.products);
    }
}