

//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3
//this is not part of the overload list, 
//so it has only three overloads
function add(arg3: string| number| boolean, arg2: any): any {
    return arg3 + arg2;
}

function add(arg3: string | number| boolean, arg2: string| number | boolean) : any{
    return arg3 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));

add(4,5)

// add(4,"ok")   Error because string data type is not available for arg2

new Date(2024,12,1)
new Date(20243425121)


function hello(name:string): string{
    return "Air University"+ name
}

//function hello(name:string): string Signature


// function hello(name:string): string{        Function Body
//     return "Air University"+ name
// }




    boolean a=1;
    boolean b=0;


    
