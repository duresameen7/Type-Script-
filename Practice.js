"use strict";
// Question: 1
// function greet (name: string): string {
//     return name;
// }
// console.log (greet("Sameen"));
// // Question: 2
//  function Multiply (a: number, b: number): number {
//     return a * b;
//  }
//  console.log (Multiply(7,7));
// // Question: 3
// function isAdult(age: number): boolean {
//     return age >= 18;
// }
// console.log(isAdult(27)); 
// console.log(isAdult(16));
// // Question: 4
// function createUser () {
//     return {
//         name: "Sameen",
//         age: 20
//     };
// }
// console.log(createUser());
// // Question: 5
// let userId: string | number;
// userId = 123;     
// userId = "abc";   
// Create an object implementing the interface
const car = {
    brand: "Toyota",
    model: "Corolla",
    getInfo: function () {
        return `${this.brand} ${this.model}`;
    }
};
// Call the method
console.log(car.getInfo());
const calculator = {
    add: (a, b) => a + b
};
console.log(calculator.add(5, 3));
// Valid object
const user = {
    name: "Maano",
    age: 20
};
console.log(user);
const users = {
    name: "Sameen",
    age: 20
};
console.log(users);
// Question: 19
// type Userr = {
//     name: string;
// };
// type Userr = {
//     age: number;
// };
// A type creates a complete type definition. Once User is defined, TypeScript does not allow another type User = ... declaration.
// Question: 20
let value = "hello";
value = 10;
console.log(typeof value);
value = "hello";
console.log(typeof value);
