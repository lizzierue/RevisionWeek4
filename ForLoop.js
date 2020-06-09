// // 1- declare the incrementor 2 - condition  ( if false, loop is broken) 3- incrementing statement. runs once after ea iteration

// //forloop that logs numbers from 2 - 6 inclusive 
// for (let i = 2; i < 7 ; i++) {
//      console.log (i);

// }
// // loop that logs odd numbers between 10 and 20
// for (let x = 11; x < 21 ; x +=2) {
//     console.log (x);

// }
// // loop that logs from 3 to -4
// for (let z = 3; z >= -4 ; z --) {
//     console.log (z);

// }
// // loop that logs from 30 to 75 in 5's 
// for (let e = 30; e <= 75 ; e += 5 ) {
//     console.log (e);

// }

// %  - write for loop goes from 9 to 17 odd numbers

// for (let e = 9; e <= 17; e++) {

//     if (e % 2 == 0) {

//         continue;
//     }

//     console.log(e);

// }
//for loop that logs all even numbers between 10 and 16 (inclusive). must use a continue statement

for (let i = 10; i <= 17; i ++) {

    if (i %  2 == 1) {

        continue;
    }

    console.log(i);
}
//2 

// for (let i = 45 ; i >= 33; i --) {

//     if (i %  2 == 0) {

//         continue;
//     }

//     console.log(i);
// }
// for loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5. You must use a continue statemen

for (let i = 50; i <= 100; i ++) {

    if (i % 10 != 5 ) {

        continue;
    }

    console.log(i);
}
