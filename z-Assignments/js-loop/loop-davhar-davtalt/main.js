/*
1. Давхар давталт 1
Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
Input: 5
Output:
 - 1 
 - 1 2 
 - 1 2 3 
 - 1 2 3 4 
 - 1 2 3 4 5

2. Давхар давталт 2
Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
Input: 5
Output:
- 5 4 3 2 1 
- 5 4 3 2 
- 5 4 3 
- 5 4 
- 5
*/

let number = Number(prompt("Input number"));
let sum = "";

for(let i = 1; i <= number; i++) {
    for(let j = 1; j <= i; j++ ) {
        sum += j + " ";
    }
    sum += "\n";
}
console.log(sum + "\n\n");



let pattern = "";
for (let i = 1; i <= number; i++) {
   for (let j = number; j >= i; j--) {
      pattern += j + ' ';
   }
   pattern += "\n";
}
console.log(pattern);





// let rows = prompt("input number");

// // pattern variable carries the final pattern in string format
// let pattern2 = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner Loop - I -> prints spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern2 += " ";
//    }

//    // Inner Loop - II -> prints stars
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern2 += "*";
//    }
//    pattern2 += "\n";
// }
// console.log(pattern2);