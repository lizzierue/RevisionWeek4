

let numbers = [12, 19, 57, 84, 24];

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }

let bigNumbers = [];

for (let element of numbers) {
    if (element > 30) {
        bigNumbers.push(element)
    }
}
console.log(bigNumbers);

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }


let stringsArray = ["banana", "tomato", "strawberry"]

for ( let i = 0 ; i < stringsArray.length; i++){
  
    let listofArray = stringsArray[i];
    console.log (listofArray)
}

let numbersArray = [1,2,3,4,5]

for (let x = 0 ; x < numbersArray.length; x++) {

    let number = numbersArray[x];
    console.log (number * 2)
}

