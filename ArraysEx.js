// 1. An empty Array using "newArray Syntax"

let emptyArray = new Array();
console.log(emptyArray);

//2. push 3 strings to the array.

emptyArray.push("apple", "pear", "berry");
console.log(emptyArray);

//3. log the string values in reverse

for (let i = emptyArray.length - 1; i >= 0; i--)
    console.log(emptyArray[i])

//4. an array of numbers. there should be at least 4 elements

let numbersArray = [2, 3, 4, 5, 10, 20];
console.log(numbersArray)

//5. add new element at start and end of array

numbersArray[6] = 30
numbersArray.unshift(1)
console.log(numbersArray);

//6. log all elements with an even index

redo
//7. use for of loop to log all elements divisible by two

for (let numbers of numbersArray)
    if (numbers % 2 == 0) {
        console.log(numbers)
    }


//8. create a new array and fill it with elements greater than or equal to ten

let newArray = new Array()

for (let numbers of numbersArray)
    if (numbers >= 10) {
        newArray.push(numbers)
    }
console.log(newArray)