export abstract class Product {
    constructor(
        public sku: string,
        public name: string,
        public price: number
    ) {

    }

    displayDetails(): string {
        return `${this.sku} - ${this.name}: $${this.price.toFixed(2)}`;
    }

    abstract getPriceWithTax(): number;
}