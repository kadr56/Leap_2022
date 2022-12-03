
////  Урвуу тоо
////  12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.

// Бодолт А - Утга String байдлаар байвал
let number = prompt ("Insert number");
console.log("Input number: " + number);
let flipNumber = "";
let i = number.length;

while (0 < i) {
    flipNumber = flipNumber + number.charAt(i-1);
    i--;
}

console.log("Flipped number: " + flipNumber);




// // Бодолт B - Утга String байдлаар байвал
// let number = prompt ("Insert number");
// console.log("Input number: " + number);
// let flipNumber = "";
// let i = 0;

// while (i < number.length) {
//     i++;
//     flipNumber = flipNumber + number.charAt(number.length-i);
// }

// console.log("Flipped number: " + flipNumber);




// // Бодолт C
// // Learned new optimal way. 
// let num = (prompt ("Insert number"));
// console.log("Input number: " + num);

// function reversedNum(num) {
//     return (
//       parseFloat(
//         num
//           .toString()
//           .split('')
//           .reverse()
//           .join('')
//       ) * Math.sign(num)
//     )                 
//   };

// console.log("Flip number using Function : " + reversedNum(num) );

