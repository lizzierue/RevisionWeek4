let hungry = false;

if (hungry) {
    console.log("hungry is true");
} else {
    console.log("hungry is false")
}

let number = 0;
if (number) {
    console.log("number is a truthy");
} else {
    console.log("number is a falsy")
}

let negNumber = -1
if (negNumber) {
    console.log("number is a truthy");
} else {
    console.log("number is a falsy")
}
let string1 = "0"
if (string1) {
    console.log("string1 is true");
} else {
    console.log("string1 is false");
}

let string2 = "false"
if (string2) {
    console.log("string2 is true");
} else
    console.log("string2 is false")

let string3 = "NaN"
if (string3) {
    console.log("string 3 is a truthy");
} else {
    console.log ("string 3 is a falsy");
}

let string4 = "undefined"
if (string4) {
    console.log("stirng 4 is true");

} else { console.log("string 4 is false") }

let string5 = " "
if (string5) {
    console.log("string 5 is true")
}
else {
    console.log("string5 is false");
}