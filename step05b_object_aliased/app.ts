// // anonymous

// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }

// // Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // Interfaces

// interface Manager {
//     name: string,
//     subordiates?: number
// }

// let storeManager: Manager = {
//     name: "Bilal"
// }


type person1={
    name: string,
    age?:number
}         

let employee1: person1={
    name:"stephen"

}



console.log(employee1)
console.log(employee1.name)
console.log(employee1.age)
        
console.log("**************")




//Interfaces


interface Manager  {
    name:string,
    subordinates?:number
}

let storeManager: Manager={
    name: "ahmad"
}


console.log(storeManager.name+" "+storeManager.subordinates)



