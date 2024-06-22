import {a,A} from "./first.js"  // non-default should be imported with same name
import h from "./first.js"  // default export can be imported with any name

console.log(a);
console.log(h);

//scope

//var   global
//let   local
//const local

//Union Literals

let myAge: string | number;
myAge=2.5;
//let subAge= myAge/2

if(typeof myAge === "string"){
    console.log(myAge)
}

let phoneNumber: number | string;

phoneNumber=923485263096
phoneNumber="+923485263096"
phoneNumber="03485263096"

let myName: "Ahmed" | "Ali" | "Muaaz";

myName="Ali"
//myName

console.log(phoneNumber)
console.log(myName)




