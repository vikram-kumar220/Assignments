let fruits:string[]=["apple","banana","cherry"];
console.log(fruits);
//union type Array
let fruits1:(string|number)[]=["apple",1,"banana",2,"cherry",3];
console.log(fruits1);
//Object
interface empdetails {
    empId: number ,
empName: string,
havingVisa: boolean,
address: {
city: string,
zipCode: number,
state: string,
country: string
}
}
let empinfo:empdetails = {
empId: 101,
empName: "John Doe",
havingVisa: true,
address: {
city: "New York",
zipCode: 10001,
state: "NY",
country: "USA"
}
};
console.log("Employee Details: ", empinfo.empName);
console.log("Employee Address: ", empinfo.address.city);
//tupel
let employee:[number,string,boolean] = [101,"John Doe",true];
console.log("Employee ID: ", employee[0]);
console.log("Employee Name: ", employee[1]);
console.log("Employee Visa Status: ", employee[2]);
