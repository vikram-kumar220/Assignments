let marks:number = 96;
console.log(marks);
let name1: string = "Bharath"; //double quotes
let name2: string = 'Bharath'; //single quotes
let name3: string = `Bharath`; //backticks
console.log("Name1: ", name1);
console.log("Name2: ", name2);
console.log("Name3: ", name3);
let visaStatus: boolean = true;
let isGraduated: boolean = false;
console.log("Visa Status: ", visaStatus);
console.log("Is Graduated: ", isGraduated);
let empAddress:string |number ;
empAddress ="chennai"
empAddress =123 
console.log(empAddress);
let empSalary: undefined | number;
empSalary = 60000;
console.log("Employee Salary: ", empSalary);
let empRole: null | string;
empRole = null;
empRole = "Developer";
console.log("Employee Role: ", empRole);
const countryOfOrigin = Symbol();
interface Product {
productName: string;
ProductPrice: number;
[countryOfOrigin]: string;
eligibleForReturn: boolean;
}
let productDetails: Product = {
productName: 'OnePlus 12',
ProductPrice: 60000,
[countryOfOrigin]: 'China',
eligibleForReturn: false
}

