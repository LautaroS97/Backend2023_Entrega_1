class ProductManager{

    constructor() {
        this.products = []   
    }

    getProducts = () => {
        return this.products
    }

    getNextId = () => {
        const count = this.products.length
        if (count == 0) return 1

        const lastProduct = this.products[count-1]
        const lastId = lastProduct.id
        const nextId = lastId + 1

        return nextId
    }

    addProduct = (title, description, price, thumbail, code, stock) => {
        
        const id = this.getNextId()
        
        const product = {
            id,
            title,
            description,
            price,
            thumbail,
            code,
            stock,
        }
    
        this.products.push(product)
    
    }

    getProductsById = (productId) => {
        const product = this.products.find(product => product.id == productId)
        if (product.id == productId) {
            return product.name
        } else {
            return "Not found"
        }
    }

}

const manager = new ProductManager()
manager.addProduct("Jabón", "A base de glicerina.", 350, "No thumbail", "1234", 10)
manager.addProduct("Desodorante de ambiente", "Aroma a lavanda.", 1030, "No thumbail", "5678", 8)
manager.addProduct("Shampoo anti-caída", "Engrosador capilar", 1250, "No thumbail", "91011", 5)

console.log(manager.products)