TypeScript and Object-Oriented Programming
Scenario
You are working as a software developer for a company that manages a large inventory of products. The inventory system must account for both physical items, like electronics and apparel, and digital products, such as e-books and software licenses. Due to the complexity of managing different product types, your team is shifting toward an object-oriented design that will simplify the codebase and make it easier to extend in the future.

Your supervisor has tasked you with building a prototype for an inventory tracker. This prototype should distinguish between physical and digital products, handle tax calculations based on product type, and manage the inventory in a structured way. You will leverage TypeScript and object-oriented programming to create reusable, scalable code and meet the team’s standards for type safety and maintainability.

To further improve this system, you will also develop a modular structure that separates concerns, making it easier to maintain and add features down the line. Once completed, this prototype will form the basis of the company’s inventory management application.

Task
Create a simple object-oriented inventory tracker using TypeScript. The tracker will distinguish between PhysicalProduct and DigitalProduct, calculate applicable taxes, and manage inventory using modules. This lab will reinforce the key object-oriented programming concepts learned in the last lesson, including inheritance, encapsulation, abstraction, and polymorphism, while using TypeScript features such as type annotations and interfaces.

Objective
By the end of this lab, you will demonstrate the ability to use TypeScript with type annotations, interfaces, and object-oriented programming concepts to build a small yet functional object-oriented system.

Instructions
Setup Your Project:

Create a new directory for the project and initialize it with npm:


mkdir inventory-tracker
cd inventory-tracker
npm init -y
Install TypeScript and other dependencies:


npm install typescript @types/node --save-dev
Create a tsconfig.json file:


npx tsc --init
Set up a basic folder structure for the project:


inventory-tracker/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   │   ├── PhysicalProduct.ts
│   │   └── DigitalProduct.ts
│   ├── utils/
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json
Create the Product Base Class:

Inside src/models/Product.ts, create a Product base class with the following:
Properties: sku (string), name (string), price (number).
Methods:
displayDetails() - a method that returns a formatted string with the product’s details.
getPriceWithTax() - a method that calculates the final price of the product with tax.
Create the PhysicalProduct Subclass:

Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
Add a weight property (number) for physical products.
Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
Create the DigitalProduct Subclass:

Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
Add a fileSize property (number) for digital products.
Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
Use a getter method to return the formatted file size in megabytes.
Create a Tax Calculator Utility:

Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
Add a function calculateTax() that accepts a Product object and returns the price including tax.
Implement the Main Program:

Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
Hint: Utilize polymorphism to your advantage here.
Compile and Run the Program:

Compile the TypeScript code:


npx tsc
Run the compiled JavaScript:


node dist/main.js