/*
Game Setup
user should guess a number
we should create new ship on the board


| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| x | x | o | o | o | x | x |
*/

let guesses = 0;
let isSunk = false;
let hit = 0;

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;

let locations = [false, false, true, true, true, false, false];

console.log('Game begins')

// for (let i = 0; i < locations.length; i++) {
//     console.log(locations[i])
// }




while (!isSunk) {


    let userGuess = Number(prompt("Give me your position: "));
    guesses ++;
    console.log("guesses = " + guesses)

    if(!(guesses < 6)) {
        console.log("You hit 6 times already.")
        break;
    }

    if(0 < userGuess && userGuess <= 6 ) {
        // console.log(" guess number = " + userGuess);

        
        if(locations[userGuess - 1]) {
            hit = hit + 1;
            // console.log(user)
            alert("I took hit. \nHIT count = " + hit + " at location " + (userGuess - 1)  );
            console.log("I took hit. \nHIT count = " + hit + " at location " + (userGuess - 1) )
            locations[userGuess - 1] = false;
            
        } else {
            alert("Miss ");
        }
    
        if(hit == 3) {
            isSunk = true;
        }
    } else {
        console.error("Give me number between 1-6");
    }


}


if(isSunk) {
    console.log("You won.");
} 
if( guesses == 6 || !isSunk) {
    console.log("You lost")
}

console.log("game ends")










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
