import { Product } from './Product.js';
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get formattedSize() {
        return `${this.fileSize} MB`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map