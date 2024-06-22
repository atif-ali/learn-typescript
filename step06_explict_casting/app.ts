let myname: unknown = "atif";


(myname as number);

console.log((myname as string).length);
console.log((<string> myname).length)

