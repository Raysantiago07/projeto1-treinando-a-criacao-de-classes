class Product {
    constructor(name,description,price,inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    newStock(quantity) {
        this.inStock += quantity
    }

    calcularDesconto(porcentagem) {
        const desconto = (porcentagem / 100) * this.price
        const newprice = this.price - desconto
        return newprice
    }
}

const notebook = new Product('Notebook', 'Notebook Nitro', 10000)
const estoque = notebook.newStock(10)
const novoPreco = notebook.calcularDesconto(5)

console.log(notebook)
console.log(`Novo valor: R$${novoPreco}`)

