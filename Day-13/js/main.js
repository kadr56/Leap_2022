// console.log(Math.PI);

// // rounding 
// console.log(Math.PI.toFixed(2));


// // semicolons 
// const budget = 1_000_000_000;
// console.log(budget);

// const degrees = 45;
// let rad = degrees * (Math.PI / 180);

// console.log(rad);

// // Absolute value
// let a = 4, b = 9;
// const diff = Math.abs(a - b);
// console.log(diff);


// // Round up
// console.log(Math.ceil(-7.004)); // -7
// console.log(Math.ceil(7.004)); // 8


// // math.floor - Round down
// console.log(Math.floor(-5.05)); // -6
// console.log(Math.floor(5)); // 5

// // Math.round
// // Rounding 
// console.log(Math.round(0.9));   // Output: 1
// console.log (Math.round(-5.5)); // Output -5
// console.log (Math.round(-5.95)); // Output -6

// // Math.pow() - Power of
// console.log(Math.pow(7, 3));  // output 343

// // Math.sqrt - Root
// console.log(Math.sqrt(45)) // 6.7





// // EXERCISE
// const y = Number(prompt("Give me y"));
// const z = Number(prompt("Give me z"));
// let x = Math.sqrt( (Math.pow(y,2)) + (Math.pow(z,2)) );
// console.log("x = " + x.toFixed(2));



// RANDOM
// console.log(Math.floor(Math.random()*10 + 1));



// // // EXERCISE - Random number between 2 number
// let num1 = prompt ("Insert number 1:");
// let num2 = prompt ("insert number 2:");


// let max =  Math.max(num1, num2);
// console.log("max = " + max);
// let min =  Math.min(num1, num2);
// console.log("min = " + min);

//  let random = Math.floor(Math.random() * (max - min) + min);
//  console.log("random = " + random);









 
// // WHILE LOOP

// let num1 = prompt ("Insert number 1:");
// let num2 = prompt ("insert number 2:");
// let max =  Math.max(num1, num2);
// console.log("max = " + max);
// let min =  Math.min(num1, num2);
// console.log("min = " + min);

// let count = 1;
// console.log("Loop started")
// while (count <= 50) {
//     console.log("Random number = " + Math.floor(Math.random() * (max - min) + min));

//     // console.log("count = " + count);
//     count = count + 1;
// }

// console.log('Loop ended');







// // Exercise Asuult
// let answer = "yes";


// while (answer == "yes") {
//     answer = prompt("Та тоглоомоо үргэлжлүүлэх үү?").toLowerCase();
//     if(answer == "yes"){
//         alert("Thanks");
//     }
// }

// console.log("Game over");









// // Тооны нийлбэр олох бодлого
// /*
// 1. Prompt - оор 1 тоо авна.
// 2. 1 ээс promp оор авсан тоо хүртэлх нийлбэрийг ол.
// example: input = 10 
// 1+2+3+4+5+6+7+8+9+10 = 55;
// */
// let maxNum = Number(prompt("Дээд тоог оруулна уу."));
// let count = 1;
// let sum = 0;

// while (count <= maxNum) {
    
//     sum = sum + count;
//     console.log("sum = " + sum);
//     count = count + 1;
// }

// console.log("SUM OF DIGIT = " + sum);








// // Тэгш тоог олох
// // while loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.
// let sum = 0;
// let count = 1;
// while (count <= 100) {
//     if(count%2 == 0){
//         console.log("Тэгш тоо - " + count);
//     }
//     count++;
// }




// Isn't it prime number?
/*
n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана.
Example1: input: 1, output: true
Example1: input: 6, output: false

Example1: input: 11, output: true
https://mn.wikipedia.org/wiki/%D0%90%D0%BD%D1%85%D0%BD%D1%8B_%D1%82%D0%BE%D0%BE
*/









// // String exercise - 1
// // Escape sequence
// /*
// 1 удаагийн хэвлэлтээр үүнийг хэвлэж гаргана уу.

// Hello I am "Name Here".
// I am 'Age here' years old.
//     This is the new line with tab and some \backslashes\.
// */

// console.log(`Hello I am "Name Here".\nI am 'Age here' years old.\n\tThis is the new line with tab and some \\backslashes\\.`) 
// console.log("Hello I am \"Name Here\".\nI am 'Age here' years old.\n\tThis is the new line with tab and some \\backslashes\\.") 

















// String exercise - 3
// // Огноо хэвлэн гаргах
// /* Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу. 
// Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар нэг оронтой байвал 2 оронтой болгох буюу сар нь 
// 1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах
// */


// let year = prompt("Insert year / in 4 digit  2000, 1999 etc /:");

// while (year.length != 4 || !Number.isInteger(Number(year))) {
//     year = prompt("Year is wrong. Must be in 4 digit / 2000, 1999 etc / \nInsert year again. :");
// }

// let month = prompt("Insert month:");
// while (month == "0" || Number(month)>12 || Number(month) < 1 || !Number.isInteger(Number(month)) ) {
//     month = prompt("Month is wrong. Insert month again. (value must be 1-12):");
// }

// let date = prompt("Insert date:");
// while (date == "0" || Number(date)>31 || Number(date) < 1  || !Number.isInteger(Number(date))) {
//     date = prompt("Day is wrong. Insert day again. (value must be 1-31):");
// }

// console.log("Year = " + year);
// console.log("Month = " + month);
// console.log("Date = " + date);

// // Remove white spaces from beginning and end.
// year = year.trim();
// month = month.trim();
// date = date.trim();
// fullDate = "";

// // Year Checking
// if (year.length != 4 || year == "0") {
//     console.error("Year is wrong");
// }
// if (month.length > 2 || month == "0" || Number(month)>12) {
//     console.error("Month is wrong");
// }
// if (date.length > 2 || date == "0" || Number(date)>31) {
//     console.error("Date is wrong");
// }

// if(month.length == 1 && month != "0") {
//     month = "0" + month;
//     console.log("Month is changed to -- " + month);
// }

// if(date.length == 1 && date != "0") {
//     date = "0" + date;
//     console.log("Day is changed to --" + date);
// }

// if (month == "02" || month == "2") {
//     if(28 < Number(date)) {
//         console.error("2 cар 28-аас илүү хоногтой байж болохгүй");
//     }
// }

// if (month == "02" || month == "2") {
//     if(28 < Number(date)) {
//         console.error("2 cар 28-аас илүү хоногтой байж болохгүй");
//     }
// }


// fullDate = year + "-" + month + "-" + date;
// console.log (fullDate);



