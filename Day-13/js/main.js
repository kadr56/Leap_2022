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








// // List of prime number


// let number = Number(prompt("Insert number"));
// console.log("Let's check if this number : " + number);
// i = 2;
// isPrimeNumber = true;

// while (i < number) {
//     // console.log(number + "/" + i + " ======> remainder = " + number%i)

//     if(number % i != 0) {
//         // isPrimeNumber = false;
//         console.log("number = " + number);
//     }

//     i++;
// }


// if(isPrimeNumber) {
//     console.log("Prime number");
// } 
// else {
//     console.log("Not a prime number");
// }









// // Isn't it prime number?
// /*
// n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана.
// Example1: input: 1, output: true
// Example1: input: 6, output: false

// Example1: input: 11, output: true
// https://mn.wikipedia.org/wiki/%D0%90%D0%BD%D1%85%D0%BD%D1%8B_%D1%82%D0%BE%D0%BE
// */

// let number = Number(prompt("Insert number between 1-100"));
// console.log("Let's check if this number : " + number);
// i = 2;
// isPrimeNumber = true;

// while (i < number) {
//     // console.log(number + "/" + i + " ======> remainder = " + number%i)

//     if(number % i == 0) {
//         isPrimeNumber = false;
//         // console.log("Setting the value to false");
//     }

//     i++;
// }


// if(isPrimeNumber) {
//     console.log("Prime number");
// } 
// else {
//     console.log("Not a prime number");
// }







// // // Palindromic number
// // /*
// // prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
// // Example1 : input: 111, output: true
// // Example2 : input: 110, output: false
// // Example3 : input: 101, output: true
// // https://en.wikipedia.org/wiki/Palindromic_number
// // */

// let number = prompt("insert any number");
// let flipNumber = "";
// digit = number.length;

// console.log(number);
// console.log("орон: " + digit);
// count = digit;

// while (count >= 0) {
//     console.log("count = " + count);
//     flipNumber = flipNumber + number.charAt(count);
//     console.log("Flipped number = " + count);
//     count--;
// }

// console.log("flipped number = " + flipNumber);


// if(number == flipNumber) {
//     console.log("TRUE");
// } 
// else {
//     console.log("FALSE");
// }








// // pibanocci number
// /*
// prompt оор n тоо орж ирэхэд тухайн n хүртлэх ширхэг Fibonacci дарааллын тоог хэвлэнэ үү.
// Example 1: input (5) -> 1 1 2 3 5 
// https://en.wikipedia.org/wiki/Fibonacci_number
// */

// let maxNumber = Number(prompt("Enter number"));
// firstNumber = 0, 
// secondNumber = 1;

// console.log("Fibonacci Series till " + maxNumber + " terms:");

// while (firstNumber <= maxNumber) {
//   console.log(firstNumber);
//   let nextNumber = firstNumber + secondNumber;
//   firstNumber = secondNumber;
//   secondNumber = nextNumber;
// }









// // Factorial
// /*
// Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна
// n!=1⋅2⋅3⋅⋯⋅n
// 5! = 120 / 1*2*3*4*5/
// Бодлого : 
// prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.
// */

// const maxNumber = Number(prompt("Factorial exercise\nEnter number"));
// let i = 1;
// let sum = 1;
// //let text = "";
// while (i <= maxNumber) {
//     sum = sum * i;
//     //text = text + "*" + i;
//     i++;
//     console.log("sum = " + sum);
// }

// //console.log(text);
// console.log(maxNumber + "'s factorial is = " + sum);






// // Number digits
// /*
// 1. Prompt - оор 1 тоо авна.
// 2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
// example: input = 1234567; digit: = 7;
// // */

// //======= String утга байдлаар олох арга =======//
// // let number = prompt ("Insert number");
// // console.log("Input number: " + number);
// // console.log("Digit: " + number.length);


// //======= Number утга байдлаар олох арга =======//
// let num = Number(prompt ("Insert number"));
// while (!Number.isInteger(num)) {
//     num = Number(prompt ("You inserted STRING. Insert number only!! "));
// }

// console.log("Inserted number: " + num);

// let count = 0;
// while (num !== 0) {
// count++;
// num = Math.floor(num/10);
// }
// console.log("Number of digit: " + count);








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







// // String exercise - 2
// // Simple assignment

// /*
// 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
// 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.
// 3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
// 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”
// 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт
// 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
//           1 2 3 4 5 
//           2 3 4 5 1 
//           3 4 5 1 2 
//           4 5 1 2 3 
//           5 1 2 3 4
// */

// let firstName = "Munkhbaatar";
// let secondName = "Shagdarsuren";

// console.log(firstName.length);
// console.log(secondName.length);











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



 