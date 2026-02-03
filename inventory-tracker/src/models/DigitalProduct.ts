import { Product } from './Product.js';

export class DigitalProduct extends Product {
    constructor(
        sku: string, 
        name: string, 
        price: number, 
        private fileSize: number
    ) {
        super(sku, name, price);
    }

    getPriceWithTax(): number {
        return this.price;
    }

    get formattedSize(): string {
        return `${this.fileSize} MB`;
    }
}