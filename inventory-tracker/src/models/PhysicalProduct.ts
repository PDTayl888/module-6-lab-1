import { Product } from './Product.js';

export class PhysicalProduct extends Product {
    constructor(
        sku: string, 
        name: string, 
        price: number, 
        private weight: number
    ) {
        super(sku, name, price);
    }

    get formattedWeight(): string {
        return `${this.weight} Kg`;
    }

    getPriceWithTax(): number {
        const taxRate = 0.10; 
        return this.price * (1 + taxRate);
    }
}