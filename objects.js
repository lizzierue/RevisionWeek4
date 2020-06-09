// let person = {
//     name: "Liz",
//     age: 25

// };

// console.log(person);
// person.lastName = "Samatepo"
// console.log(person)

// // you can add arrays to objects.

// person.friends = ["Aaron", "Siobhan", "Daisy"]
// console.log(person);

// // to access an element in an  array 

// console.log(person.friends[1]);

// // to loop through the array 

// for (let i = 0; i < person.friends.length - 1; i++) {
//     console.log(person.friends[i]);
// }


// create object called pet with 2 properties

let pet = {
    name: "Lola",
    age: 3
}
console.log(pet);

// add array called owners that lists people that live with pet 

pet.owners = ["Liz", "Martin", "Margaret", "Siobhan"]

console.log(pet);

// loop through owners property

for (let i = 0; i <= pet.owners.length - 1; i++) {
    console.log(pet.owners[i]);
}

//4
let newPet = new Object();

//5 

newPet["name"] = "Rex"
console.log(newPet)

//6
newPet.age = 6
console.log(newPet)

//7

 for (let key in newPet)
console.log(`${key} has value: ${newPet[key]}`)
console.log("".padEnd(30,"-"));