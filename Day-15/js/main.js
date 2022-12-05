// /*
// Game Setup
// user should guess a number
// we should create new ship on the board


// | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
// | x | x | o | o | o | x | x |
// */

// let guesses = 0;
// let isSunk = false;
// let hit = 0;

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;

// console.log('Game begins')

// while (!isSunk) {


//     let userGuess = Number(prompt("Give me your position: "));
//     guesses ++;

//     if(guesses > 6) {
//         console.log("You hit 6 times already.")
//         break;
//     }

//     if(0 < userGuess && userGuess < 7 ) {
//         console.log(userGuess);

//         if(location1 == userGuess ||location2 == userGuess || location3 == userGuess) {

//             hit = hit + 1;

//             if(location1 == userGuess) {
//                 location1 == -1;
//             }
//             if(location2 == userGuess) {
//                 location2 == -1;
//             }
//             if(location2 == userGuess) {
//                 location3 == -1;
//             }

//             alert("I took hit. HIT count = " + hit );
            
//         } else {
//             alert("Miss ");
//         }
    
//         if(hit == 3) {
//             isSunk = true;
//         }
//     } else {
//         console.error("Give me number between 1-6");
//     }
    
// }

// if(isSunk) {
//     console.log("You won.");
// }
// if( guesses == 6 && !isSunk) {
//     console.log("You lost")
// }

// console.log("game ends")







// // **************************************  Array exercise - 1 ************************************** 
// // **************************************  Simple array 1 ************************************** 
/*
Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 

console.log() ашиглан array хэвлэх
Array дахь компаниудын length хэвлэх
Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
Компани бүрийг хэвлэх
Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.

*/

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", ""]


