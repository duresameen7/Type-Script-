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

// console.log(userId);
// // Question: 6
// function printValue(value: string | number): void {
//     console.log(value);
// }
// printValue("hello");
// printValue(100);
// // Question: 7
// type Status = "pending" | "success" | "failed";

// let currentStatus: Status = "pending";
// currentStatus = "success";
// currentStatus = "failed";
// // Question: 8
// interface Product {
//     id: number;
//     name: string;
//     price: number;
// }
// const product: Product = {
//     id: 1,
//     name: "Laptop",
//     price: 50000
// };
// console.log(product);
// // Question: 9
// interface Address {
//      city: string;
//     postalCode: number;
// }
// const address: Address = {
//     city: "Peshawar",
//     postalCode: 25000
// };
// console.log(address);
// // Question: 10
// interface Employee {
//     name: string ,
//     email: string,
//      salary: number,
//       address: Address 
// }
// const employee: Employee = {
//     name: "Sameen",
//     email: "sameen@example.com",
//     salary: 60000,
//     address: {
//         city: "Peshawar",
//         postalCode: 25000
//     }
// };
// console.log(employee);
// // Question: 11
// interface  Student {
//     id?: string;
//     name: string;
// }
// // Object with id
// const student1: Student = {
//     id: "01",
//     name: "Saad"
// };
// // Object without id
// const student2: Student = {
//     name: "Omar"
// };
// console.log(student1);
// console.log(student2);
// // Question: 12
// interface User {
//     name: string;
//     email: string;
//     phone?: string; 
// }
// // Object with phone
// const user1: User = {
//     name: "Sana",
//     email: "sana@example.com",
//     phone: "03001234567"
// };
// // Object without phone
// const user2: User = {
//     name: "Soha",
//     email: "soha@example.com"
// };
// console.log(user1);
// console.log(user2);
// Question: 13
interface Car {
    brand: string;
    model: string;
    getInfo: () => string;
}
// Create an object implementing the interface
const car: Car = {
    brand: "Toyota",
    model: "Corolla",
    getInfo: function (): string {
        return `${this.brand} ${this.model}`;
    }
};
// Call the method
console.log(car.getInfo());
// Question: 14
interface Calculator {
    add: (a: number, b: number) => number;
}
const calculator: Calculator = {
    add: (a, b) => a + b
};
console.log(calculator.add(5, 3));
// Question: 15
interface Users {
    name: string;
}
interface Users {
    age: number;
}
// Valid object
const user: Users = {
    name: "Maano",
    age: 20
};
console.log(user);
// Question: 16
interface User {
    email: string;
}
// Question: 17
// type Status = "pending" | "success" represents allowed values.
// interface Status {} represents the shape of an object.

// Question: 18
interface Userss {
    name: string;
}

interface Userss {
    age: number;
}

const users: Userss = {
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

let value: string | number = "hello";
value = 10;
console.log(typeof value);

value = "hello";

console.log(typeof value);
