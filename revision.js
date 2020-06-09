/*typeof operator - returns the type or argument stored in a variable. 

let value = true 
console.log(typeof value);

value = String(value);
console.log(typeof value);      

let number = 1;
number = String(number);
console.log(number + number);

let x = 2
let y = 2
let z = x * y;

z= z+1;
console.log(z);
// but its better to do 

z++
console.log(z); 

let a=1, b =1;

let c = ++a; // increments before assigning 
console.log(c);

let d = b++; // when its post fix
console.log (d); */

// let myVariable = "10" ;
// console.log(typeof myVariable);
// myVariable = Number(myVariable);
// console.log (myVariable);
// console.log(typeof myVariable);


// let myOtherVariable = true
// console.log(typeof myOtherVariable); 
//  myOtherVariable = Number(myOtherVariable);
// console.log(typeof myOtherVariable);

// let myVariableAndMyOtherVariable = myVariable + myOtherVariable;
// console.log(myVariableAndMyOtherVariable);
// console.log(typeof myVariableAndMyOtherVariable);

// myVariable = undefined;
// console.log(myVariable);
// console.log(typeof myVariable);

// myOtherVariable = 0
// console.log(myOtherVariable); 
// console.log(typeof myOtherVariable);

let x = "hello";
let y = true;

let xDataType  = (typeof x);
console.log(xDataType);

let yDataType = (typeof y);
console.log(yDataType);

let areTheSameDataType =  (xDataType == yDataType);
console.log(areTheSameDataType);
