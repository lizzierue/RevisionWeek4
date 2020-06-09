// Step 1. Convert the function into a function expression

// BEFORE
// function addTwo(num) {
//     return num + 2;
// }

// AFTER
// const addTwo = function (num) {
//     return num + 2;
// }



// Step 2. Remove the function keyword and add the arrow
// between the parameters and the function body

// BEFORE
// const addTwo = function (num) {
//     return num + 2;
// }

// AFTER
// const addTwo = (num) => {
//     return num + 2;
// }


// Step 3 (Optional). If there is only 1 parameter, remove the brackets around it

// BEFORE
// const addTwo = (num) => {
//     return num + 2;
// }

// AFTER
// const addTwo = num => {
//     return num + 2;
// }


// Step 4 (Optional). If there is only 1 line in the function body,
// remove the curly brackets that declare the function body
// and remove the return keyword

// BEFORE
// const addTwo = num => {
//     return num + 2;
// }
// AFTER
// const addTwo = num => num + 2;

// let res = addTwo(10);
// console.log(res);


// const addTwo = num => {
//     return num + 2;
// }



// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// greet( )

1.

const greet = name => console.log (`Hello ${name}`)

greet ("Liz");


// function sayHello(name = "Luke") {
//     return (`Hello ${name}`)
// }

// let userGreeting = sayHello( )
// console.log(userGreeting)

//as function expression :
// const sayHello = function(name){
// return (`Hello ${name}`)
// }

// as arrow function 

const sayHello = name => `Hello ${name}`;


let  sayHi  = sayHello("Liz");
console.log (sayHi)


// function largestNumber(num1, num2 = 100) {
//     if (num1 > num2)
//         console.log(num1, num2)
//     else console.log(num2, num1)
// }

// largestNumber(5);

const largestNumber = (num1, num2) => {
    if (num1 > num2){
        console.log (num1,num2)
    } else {
        console.log (num2, num1)
    }
}

largestNumber(6,7);

const smallestNumber = (num1, num2) => {
    if (num1 < num2){
        return "num1"
    } else 
        return "num2"
}


let myNumbers = (1,2);
console.log(myNumbers);
// function smallestNumber(num1 = 5, num2 = 5) {
//     if (num1 <= num2) {
//         return num1;
//     } 
//     else {
//         return
//             num2;        }

//     }

//     let myNumbers = smallestNumber(1)
//     console.log(myNumbers)