// let firstName = "Elizabeth"
// let lastName = "Samatepo"
// let preferredName = "Liz"


// let greeting =  0 ||`Hello ${preferredName}`|| `Hello ${firstName} ${lastName}`|| "Hello Stranger"
// console.log (greeting);
//AN OR STATEMENT WILL RETURN THE FIRST TRUE VALUE BUT AN AND STATEMENT WILL RETURN FIRST FALSEY

let firstName = "Elizabeth"
let lastName = "Samatepo"
let preferredName = "Liz"


let greeting =  0 && `Hello ${preferredName}`&& `Hello ${firstName} ${lastName}`&& "Hello Stranger"
console.log (greeting)

// nullish coalescing  op - doesnt work in this version of node use devtools

let firstName = "Elizabeth"
let lastName = "Samatepo"
let preferredName = "Liz"


let greeting =  0 ?? `Hello ${preferredName}` ??  `Hello ${firstName} ${lastName}` ??"Hello Stranger"
console.log (greeting)