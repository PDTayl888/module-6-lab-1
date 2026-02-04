import { DigitalProduct } from './models/DigitalProduct.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';


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

    
}