import { Product } from './Product.js';
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get formattedWeight() {
        return `${this.weight} Kg`;
    }
    getPriceWithTax() {
        const taxRate = 0.10;
        return this.price * (1 + taxRate);
    }
}
//# sourceMappingURL=PhysicalProduct.js.map