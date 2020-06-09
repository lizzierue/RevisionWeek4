let carPrice = 70000;
let carColour = "red"

if (carPrice > 50000) {

    if (carColour == "red") {
        console.log(" I like red cars");
    } else {
        console.log("That's too expensive for a car that's not red!")
    }
}

else if (carPrice > 10000) {
    
    if (carColour == "blue") {
        console.log("I like Blue cars too!")

    } else if (carColour == "red") {
        console.log("I like red cars and this one's a bargain")
    }

    else { console.log ( "Hmm, thats too expensive") }
}
else {
    console.log("wow! what a bargain");
}


// let favouriteGenre = "rnb"
// let favouritePeriod = "late2000s"

// if (favouriteGenre == "rnb") {

//     if (favouritePeriod == "late2000s"){
//         console.log {"great taste in music! you should check out Snoh Alegra!"}
//     } else ("I suppose rnb from any decade is good, with pioneers like Michael Jackson!")

//     else if (favouriteGenre == "soul");{

//         if  (favouritePeriod == "90s"){
//             console.log ("that's a great genre too, check out Aaliyah") }
    
//           else if (favouritePeriod == "late2000s"){
//               console.log ("you can listen to Mariah Carey");
//         else 
//           }

//     else {console.log ("you could listen to Davido, an afrobeats artist");
// }
// }