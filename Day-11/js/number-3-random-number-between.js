// // **************************************  JS Number exercise - 3 ************************************** 
// // **************************************  Random numbers between ************************************** 
/*
1. 2 тоо prompt - оор авна.
2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.
*/

let input1 = prompt("Тоо №1 оруулна уу .")
let input2 = prompt("Тоо №2 оруулна уу.")
console.log("Оруулсан тоо №1 : " + input1);
console.log("Оруулсан тоо №2 : " + input2);


let max = Math.max(input1, input2);
let min = Math.min(input1, input2);

let random = Math.floor((Math.random()*(max - min +1)) + min);

console.log("Уг хоёр тооны дундах Random тоо: " + random);
