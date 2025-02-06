const libros = [
    {
        titulo: "Todas esas cosas que te diré mañana",
        genero: "Ficción",
        autor: "Elísabet Benavent",
        isbn: "978-84-9129-597-6",
        peso: 642
    },
    {
        titulo: "El peligro de estar cuerda",
        genero: "Ensayos literarios",
        autor: "Rosa Montero",
        isbn: "978-84-322-4064-5",
        peso: 484
    },
    {
        titulo: "Compas 7. Los Compas vs. hackers",
        genero: "Ficción",
        autor: "Mikecrack, El Trollino y Timba Vk",
        isbn: "978-84-270-5000-6",
        peso: 734
    }
]

class Libro {
    #titulo
    #genero
    #autor
    #isbn
    #peso

    constructor(titulo, genero, autor, isbn, peso) {
        this.#titulo = titulo
        this.#genero = genero
        this.#autor = autor
        this.#isbn = isbn
        this.#peso = peso
    }

    // Getters
    get titulo() {
        return this.#titulo;
    }

    get genero() {
        return this.#genero;
    }

    get autor() {
        return this.#autor;
    }

    get isbn() {
        return this.#isbn;
    }

    get peso() {
        return this.#peso;
    }

    // Setters
    set titulo(titulo) {
        this.#titulo = titulo;
    }

    set genero(genero) {
        this.#genero = genero;
    }

    set autor(autor) {
        this.#autor = autor;
    }

    set isbn(isbn) {
        this.#isbn = isbn;
    }

    set peso(peso) {
        this.#peso = peso;
    }
}

class Libreria{
    #libros //se hace privada para que nos protejamos con nuestras reglas, controlamos lo que entra
    constructor(){
        this.#libros = []
    }

    anadirLibro(libro){
        this.#libros.push(libro)
    }

    sacarLibro(isbn) {
        // Find the index of the book with the given ISBN
        const index = this.#libros. findIndex(libro => libro.isbn === isbn);
        
        if (index !== -1) {
            // Remove the book from the array and return it
            const [removedBook] = this.#libros.splice(index, 1);
            console.log (`Libro con ISBN ${isbn} fue eliminado.`);
            return removedBook;
        }else{
            console. log(`No se encontró ningún libro con ISBN ${isbn}.`);
            return null;
        }
    }

    tamano(){
        return this.#libros.length
    }
  
  pesoTotal(){
    return this.#libros.reduce((acumulador, libro) => {
      return acumulador + libro.peso
    },0)
  }
}

const unaLibreria = new Libreria()
libros.forEach(libro => unaLibreria.anadirLibro(libro))
unaLibreria.tamano()
console.log(unaLibreria.pesoTotal())

// AVISO PARA LA ACTIVIDAD 4
class Producto{
  
}
class Carrito{ // SOlo maneja datos, ESTÁ PROHIBIDO UN DOCUMENT.XXXX
// debe manejar informacion, solo manejar informacion de productos (tipo libro- libreria, carrito-producto)
// en otras clases si que se puede, pero EN CARRITO ESTÁ PROHIBIDO
}