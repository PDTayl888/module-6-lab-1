import { Product } from '../models/Product.js';

function calculateTax(product: Product) {
    return product.getPriceWithTax();
}