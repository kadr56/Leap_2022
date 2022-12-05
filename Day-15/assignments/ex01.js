// given number of arrays = 1, 2, 3, 4, 5, 6, 7, 8
// let's find  out which numbers are even
// if the number is even, then print out the number
// you have to use FOR loop

// let myArray = [1,2,5,3,5,6,7,8];

// console.log("Let's print the even numbers");

// for (let i = 0; i < myArray.length; i++) {
//     if(myArray[i]%2 == 0) {
//         console.log(myArray[i]);
//     } 
// }




let playerNames = ['saleh', 'mane', 'becker', 'diaz'];
console.log(playerNames);
playerNames[1] = 'Khangai';
console.log(playerNames);


/* 
Given number of arrays = 1, 2, 5, 3, 5, 6, 7, 8
output new      arrays = 2, 3, 6, 4, 6, 7, 8, 9
Array item values change
use of loop
*/

let arrays = [1, 2, 5, 3, 5, 6, 7, 8];

console.log(arrays);
for(let i = 0; i < arrays.length; i++) {
    arrays[i] = arrays [i] * 10;
}

console.log(arrays);