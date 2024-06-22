let teacher = {
    name: "Zeeshan",
    experience: "10"
}

console.log(teacher.name);
console.log(teacher["experience"]);


// Type Declaration
let student : {
    name: string,
    age: number
}

student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.name);
console.log(student.age);



console.log("**************");


let person={
    name:"ali",
    age: 26
}

let employee:{
    employeeID: number,
    'compensation & perks': number,
    location:string,
    address:{
        city: string,
        country:string
    }
}


employee={
employeeID: 32101,
'compensation & perks':2356,
address:{
    city:"Islamabad",
    country:"PK"//,
    // state:"Federal"
},
location:"Remote"
}




console.log(person.name+" "+person.age)
console.log(employee.employeeID)
console.log(employee.address)
console.log(employee.address.city+" "+employee.address.country)



person['age']=20

employee['compensation & perks']=14535


console.log(employee["compensation & perks"])







