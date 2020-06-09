// function multiply(num1,num2) {   
//     return num1 * num2;
// }


// let result = multiply(5,6);
// console.log(result)


function greet(name = "Liz") {
    console.log(`Hello ${name}`)
}

greet( )



function sayHello(name = "Luke") {
    return (`Hello ${name}`)
}

let userGreeting = sayHello( )
console.log(userGreeting)

function largestNumber(num1, num2 = 100) {
    if (num1 > num2)
        console.log(num1, num2)
    else console.log(num2, num1)
}

largestNumber(5);

function smallestNumber(num1 = 5, num2 = 5) {
    if (num1 <= num2) {
        return num1;
    } 
    else {
        return
            num2;        }

    }

    let myNumbers = smallestNumber(1)
    console.log(myNumbers)