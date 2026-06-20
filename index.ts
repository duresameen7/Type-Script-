// function displayName(name: string): string {
//     return name;
// }

// displayName("Saad");

// let b: string | number = "Hello";
// b = 34;  

// console.log(b);

// Nothing return 
// function addTwoNumbers(a: number, b: number): void {
//     console.log(a+b);
    

// Return array 
// function addTwoNumbers(a: number, b: number): string[] {
//     return [];
// }

// Return Object 
// function addTwoNumbers(a: number, b: number): { a: number, b: number } {
//     return { a, b };
// }

// Return function

// function addTwoNumbers(a: number, b: number): () => void {
//     return () => {}
//     }


// Return Boolean

// function addTwoNumbers(a: number, b: number): boolean {
//     return a + b > 10;
// }
// addTwoNumbers(5, 10);

// Boolean function example
// function multiplyTwoNumbers(a: number = 12 , b: number): void {
//     console.log(a*b);
// }
// multiplyTwoNumbers(2,4);

// Objects 


// Not accept union 
// interface  status = "Success" | "Failed" | "Pending";
// Accept union
export type status = "Success" | "Failed" | "Pending";
interface userDetails {
 username: string;
    email: string;
    age: number;
    admin: boolean;
    address: {
        city: string;
        postalCode: number;
    }
    displayName: () => string; 
    status?: status;
}

interface userDetails {
    id?: string;
}
    const userDetails: userDetails = {
        displayName () {
            return "Sameen";
        },
        username: "Saad",
        email: "saad02@example.com",
        age: 27,
        admin: true,
        address: {
            city: "Peshawar",
            postalCode: 25000,
        }
    }

console.log(userDetails);  


export {};