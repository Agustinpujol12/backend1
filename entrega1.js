class ProductManager {
    constructor() {
        this.products = [];
        this.idCounter = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error('Todos los campos son obligatorios');
        }

        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error('Ya existe un producto con el mismo código');
        }

        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++this.idCounter,
        };

        this.products.push(product);

        return this.products;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        }  else {
            return "not found";
        }
    }
}

const manager = new ProductManager();

console.log(manager.getProducts()); 

try {
    manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
} catch (error) {
    console.error("Error al agregar producto:", error.message);
}

console.log(manager.getProducts());

try {
    manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
} catch (error) {
    console.error("Error al agregar producto:", error.message);
}

console.log(manager.getProductById(1));
console.log(manager.getProductById(2));