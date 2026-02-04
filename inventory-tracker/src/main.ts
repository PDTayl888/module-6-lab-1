import { DigitalProduct } from './models/DigitalProduct.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { calculateTax } from './utils/taxCalculator.js'


const products = [
    new DigitalProduct("gff4323", "Bunk Beds", 3000, 1200),
    new PhysicalProduct("eew985", "Rocking Chair", 1200, 1432),
    new DigitalProduct("gff4323", "Bunk Beds", 3000, 1200),
    new PhysicalProduct("eew985", "Rocking Chair", 1200, 1432),
    new DigitalProduct("gff4323", "Bunk Beds", 3000, 1200),
    new PhysicalProduct("eew985", "Rocking Chair", 1200, 1432),
    new DigitalProduct("gff4323", "Bunk Beds", 3000, 1200),
    new PhysicalProduct("eew985", "Rocking Chair", 1200, 1432),
    new DigitalProduct("gff4323", "Bunk Beds", 3000, 1200),
    new PhysicalProduct("eew985", "Rocking Chair", 1200, 1432),
]

for (const product of products) {
    console.log("PRODUCT DETAILS:");
    console.log(product.displayDetails());

    if (product instanceof PhysicalProduct) {
        console.log("WEIGHT:");
        console.log(product.formattedWeight);
    } else if ( product instanceof DigitalProduct) {
        console.log("SIZE:");
        console.log(product.formattedSize);
    }

    const priceWithTax = calculateTax(product);
    console.log("PRICE WITH TAX:");
    console.log(priceWithTax);
    console.log("-* *- -* *- -* *- -* *- -* *- -* *- -* *- -* *-")
}