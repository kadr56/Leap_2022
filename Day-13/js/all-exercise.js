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






// // **************************************  Дасгал АСУУЛТ ***************************************************************
// // Exercise Asuult
// let answer = "yes";


// while (answer == "yes") {
//     answer = prompt("Та тоглоомоо үргэлжлүүлэх үү?").toLowerCase();
//     if(answer == "yes"){
//         alert("Thanks");
//     }
// }

// console.log("Game over");








// // **************************************  Тооны нийлбэр олох бодлого ***************************************************************
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







// // **************************************  Тэгш тоог олох ***************************************************************
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








// // **************************************  Prime number - Анхны тоо ***************************************************************
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






// // **************************************  Palindromic number ***************************************************************
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







// // **************************************  Fibanocci number ***************************************************************
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








// // **************************************  Factorial ***************************************************************
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





// // **************************************  Number digits - Хэдэн оронтой вэ ************************************** 
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
//     num = Number(prompt ("Үсэг оруулсан байна. Тоо оруулна уу.!! "));
// }

// console.log("Inserted number: " + num);

// let count = 0;
// while (num !== 0) {
// count++;
// num = Math.floor(num/10);
// }
// console.log("Number of digit: " + count);




 
// // **************************************  Урвуу тоо ************************************** 
// ////  12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.

// // Бодолт А - Утга String байдлаар байвал
// let number = prompt ("Insert number");
// console.log("Input number: " + number);
// let flipNumber;
// let i = number.length;

// while (0 < i) {
//     flipNumber = flipNumber + number.charAt(i-1);
//     i--;
// }

// console.log("Flipped number: " + flipNumber);




// let number = prompt ("Insert number");
// console.log("Input number: " + number);
// let flipNumber = "";
// let i = 0;

// while (i < number.length) {
//     i++;
//     flipNumber = flipNumber + number.charAt(number.length-i);
// }

// console.log("Flipped number: " + flipNumber);




// // Бодолт Б - Утга Number байдлаар байвал
// let num = (prompt ("Insert number"));
// console.log("Input number: " + num);
// i = 0;

// if(number >= 1 || number === 0) {
//     i++
// }

// while (number / 10 >= 1) {
//     number = number / 10;
//     console.log(number);123
//     i++;
// }

// console.log("Number of digit : " + i );



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






// // **************************************  String exercise - 1 ************************************** 
// // **************************************  Escape sequence ************************************** 

// /*
// 1 удаагийн хэвлэлтээр үүнийг хэвлэж гаргана уу.

// Hello I am "Name Here".
// I am 'Age here' years old.
//     This is the new line with tab and some \backslashes\.
// */

// console.log(`Hello I am "Name Here".\nI am 'Age here' years old.\n\tThis is the new line with tab and some \\backslashes\\.`) 
// console.log("Hello I am \"Name Here\".\nI am 'Age here' years old.\n\tThis is the new line with tab and some \\backslashes\\.") 






// // // **************************************  String exercise - 2 ************************************** 
// // // **************************************  Simple assignment ************************************** 

// // /*
// // 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
// // 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.
// // 3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
// // 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”
// // 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт
// // 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
// //           1 2 3 4 5 
// //           2 3 4 5 1 
// //           3 4 5 1 2 
// //           4 5 1 2 3 
// //           5 1 2 3 4
// // */

// console.log(`\t 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз. `);

// let firstName = "Munkhbaatar";
// let secondName = "Shagdarsuren";

// console.log(firstName + "  char length:" + firstName.length);
// console.log(secondName + "  char length:" + secondName.length);
// if (firstName.length > secondName.length) {
//     console.log("---> firstName is longer");
// } 
// else {
//     console.log("---> secondName is longer");
// }


// console.log(`\n\t 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.`);

// console.log(firstName.toLowerCase() + "\n" + secondName.toLowerCase() + "\n");

// console.log(`\n\t 2. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.`);
// console.log(firstName.toUpperCase() + "\n" + secondName.toUpperCase());


// console.log(`\n\t 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”`);
// let str1 = "Pinecone academy- н";
// let str2 = " leap хөтөлбөрт тавтай морилго уу";
// console.log(str1.concat(str2));

// console.log(`\n\t 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт
// `);
// let firstName1 = "Munkhbaatar";
// let secondName2 = "Shagdarsuren";
// let country = "Mongolia";
// let city = "Ulaanbaatar";
// let age = "36";
// let job = "Software engineer";

// console.log (`My name is ${firstName1} ${secondName2}. I live in ${city} city in ${country}. I am ${age} years-old and ${job}.`);

// console.log(`\n\t 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
//            1 2 3 4 5 
//            2 3 4 5 1 
//            3 4 5 1 2 
//            4 5 1 2 3 
//            5 1 2 3 4
// \n\n`);

// console.log("Result: \n\t1 2 3 4 5 \n\t2 3 4 5 1 \n\t3 4 5 1 2 \n\t4 5 1 2 3 \n\t5 1 2 3 4");






// // **************************************  String exercise - 3.1 ************************************** 
// // **************************************  Огноо хэвлэн гаргах ************************************** 

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
//         console.b
//     }
// }

// fullDate = year + "-" + month + "-" + date;
// console.log ("FINAL RESULT - FULL DATE: " + fullDate);




// // **************************************  String exercise - 3.3 ************************************** 
// // **************************************  Үүрэн телефоны Operator олох ************************************** 

// /* 2. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) 
// хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
// */


// let mobileNumber = prompt("Утасны дугаараа оруулна уу. /8 оронтой байх 99003322 гэх мэт. /")
// console.log("Оруулсан утасны дугаар : " + mobileNumber);
// // validation 

// while (!(Number.isInteger(Number(mobileNumber))) || mobileNumber.length != 8) {
//     mobileNumber = prompt("Утасны дугаараа зөв оруулна уу. /8 оронтой байх 99003322 гэх мэт. /")
// }

// let firstTwoDigit = mobileNumber.substring(0,2);
// let operator = "Not defined operator";



// for (let i = 0; i < mobileNumber.length; i++) {

//     if(firstTwoDigit == "80" || firstTwoDigit == "86" || firstTwoDigit == "88" ) {
//         operator = "Unitel";
//     }

//     if(firstTwoDigit == "91" || firstTwoDigit == "96" || firstTwoDigit == "90" || firstTwoDigit == "90" || firstTwoDigit == "90") {
//         operator = "Skytel";
//     }

//     if(firstTwoDigit == "85" || firstTwoDigit == "99" || firstTwoDigit == "94" || firstTwoDigit == "75") {
//         operator = "Mobicom";
//     }

//     if(firstTwoDigit == "75" || firstTwoDigit == "83" || firstTwoDigit == "93" || firstTwoDigit == "97" || firstTwoDigit == "98") {
//         operator = "G-Mobile";
//     }

// }

// console.log("\nOperator : " + operator);





// console.log('Day 14\n');
// console.log("Find out the even numbers from 1 to 10");

// const max = 10;
// let i = 1;

// while (i <= max) {
//     if (i%2 == 0) {
//         console.log(i + " is even number");
//     }
//     i++; 
// }




// // // **************************************  JS loop exercise - 8 ************************************** 
// // // **************************************  Guess the number ************************************** 
// /*
// 1. 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
// 2. Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй. 
// 3. Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.
// */

// let max = 100;
// let min = 1;

// let random = Math.floor(Math.random() * (max - min + 1) + min);
// let guessNumber = 0;
// console.log("Оруулсан тоо: " + random);

// guessed = false;


// while (!guessed) {

//     guessNumber = prompt("Random = " + random + "\nRandom тоог таах тоглоом. Тоо оруулна уу: /1-100 хооронд утга оруулна уу./ ", );
    
//     if (!Number.isInteger(Number(guessNumber))){
//         alert("Үсэг болон Тэмдэгт оруулахгүй. Зөвхөн тоо оруулна уу.")
//     }

//     if (guessNumber > random) {
//         alert("Арай их байна.Дахиад оролдоно уу.")
//     }
//     if (guessNumber < random) {
//         alert("Арай бага байна.Дахиад оролдоно уу.")
//     }
//     if (guessNumber == random) {
//         alert("Баяр хүргэе та таалаа")
//         guessed = true;
//     } 
// }





// // // **************************************  JS loop exercise - 9 ************************************** 
// // // **************************************  Convert String ************************************** 
// /*
// example 1: input = "Hello World", output = "hELLO wORLD"
// example 2: input = "This Is STRING!", output = "tHIS iS string!"
// */


// let input = prompt("Хөрвүүлэх текстээ оруулна уу.")
// let convertedInput = "";

// for (let i = 0; i < input.length; i++) {
//     if(input.charAt(i).toUpperCase() == input.charAt(i)){
//         convertedInput += input.charAt(i).toLowerCase();
//     }
//     else {
//         convertedInput += input.charAt(i).toUpperCase();
//     }
// }

// console.log("Хөрвүүлэх текс : " + input);
// console.log("Үр дүн         : " + convertedInput);







// // // **************************************  JS Number exercise - 1 ************************************** 
// // // **************************************  Nearest number ************************************** 
// /*
// n бутархай тооны хамгийн ойрын бүхэл тоог ол.
// */


// let input = prompt("Бутархай тоо оруулна уу.")
// console.log("Оруулсан тоо : " + input);

// let inputRounded = Math.round(input);
// console.log("Ойрын тоонд бүхэлчилсний дараа : " + inputRounded);





// // // **************************************  JS Number exercise - 2 ************************************** 
// // // **************************************  Numbers Sum ************************************** 
// /*
// 3 оронтой той ( n ) ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
// */

// let input = prompt("Тоо оруулна уу.")
// console.log("Оруулсан тоо : " + input);

// sum = 0;
// let i = 0; 

// while (i < input.length) {
//     sum += Number(input.charAt(i));
//     i++;
// }

// if(isNaN(sum)) {
//     console.error("Алдаа гарлаа. Үсэг оруулсан байна.");
// }
// else {
//     console.log("Ципрүүдийн нийлбэр : " + sum);
// }




// // // **************************************  JS Number exercise - 3 ************************************** 
// // // **************************************  Random numbers between ************************************** 
// /*
// 1. 2 тоо prompt - оор авна.
// 2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.
// */

// let input1 = prompt("Тоо №1 оруулна уу .")
// let input2 = prompt("Тоо №2 оруулна уу.")
// console.log("Оруулсан тоо №1 : " + input1);
// console.log("Оруулсан тоо №2 : " + input2);


// let max = Math.max(input1, input2);
// let min = Math.min(input1, input2);

// let random = Math.floor((Math.random()*(max - min +1)) + min);

// console.log("Уг хоёр тооны дундах Random тоо: " + random);




// // // **************************************  JS Number exercise - 4 ************************************** 
// // // **************************************  General-Triangle ************************************** 
// /*
// Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол
// */

// let side1 = Number(prompt("Тэгш өнцөгт Гурвалжны А тал оруулна уу ."));
// let side2 = Number(prompt("Тэгш өнцөгт Гурвалжны B тал оруулна уу."));

// if(isNaN(side1) || isNaN(side2)) {
//     console.error("Алдаа. Зөвхөн тоо оруулна уу.")
// }
// else {
//     console.log("Тэгш өнцөгт Гурвалжны А тал : " + side1);
//     console.log("Тэгш өнцөгт Гурвалжны B тал : " + side2);
    
//     let side3 = Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2))
    
//     console.log("Тэгш өнцөгт Гурвалжны урт C тал  /c2 = a2 + b2/: " + side3);
// }




// // // **************************************  JS Number exercise - 5 ************************************** 
// // // **************************************  Simple assignment ************************************** 
// /*
// 1. 0-ээс 100 хүртэл санамсаргүй тоог үүсгэнэ үү.
// 2. 50-ээс 255 хүртэлх санамсаргүй тоог үүсгэнэ үү.
// */

// //let random = Math.floor((Math.random()*(max - min +1)) + min);
// let random1 = Math.floor(Math.random()*(100-0+1) + 0);
// let random2 = Math.floor(Math.random()*(255-50+1) + 50);


// console.log("0-ээс 100 хүртэл санамсаргүй тоо : " + random1);
// console.log("50-ээс 250 хүртэл санамсаргүй тоо : " + random2);








// // // **************************************  JS Number exercise - 6 ************************************** 
// // // **************************************  Validate phone number ************************************** 
// /*
// Хэрвээ хэрэглэгч гараас утасны дугаар оруулвал өгөгдсөн утгыг тоо мөн эсвэл биш эсэхийг шалгаарай.
// Дараа нь тухайн өгөгдсөн утасны эхний 4 орон нь +976 байгаа эсэхийг шалгана. 
// Эцэст нь өгөгдсөн утасны дугаарын урт 12 байвал та монгол улсын утасны дугаарыг зөв орууллаа гэж харуулаарай. 
// Хэрвээ буруу байвал та монгол улсын утасны дугаарыг буруу орууллаа гэж харуулна.
// Жишээ нь
// Input: +97699119911

// */


// let mobile  = prompt("Монгол улсын утасны дугаарыг оруулна уу. Жич: +976..... гэсэн байдлаар бичнэ үү.");
// console.log("Оруулсан утасны дугаар: " + mobile);
// let hasPlus = (mobile.substr(0,1)=="+");     //Boolean 
// let countryCode = (mobile.substr(1,3));  
// let number = mobile.substr(4,8);
// // console.log(number);
// // console.log(countryCode);


// if( hasPlus && countryCode == "976" && mobile.length == 12 && Number.isInteger(Number(mobile)) ) {
//     // console.log(mobile.substr(0,1));
//     console.log("Баяр хүргэе. \nТа Монгол улсын утасны дугаарыг улсын кодтой хамт зөв оруулсан байна.");
// }
// else {
//      console.error("Та Монгол улсын утасны дугаарыг буруу оруулсан байна.");

//     if(mobile.length != 12) {
//         console.error("утасны дугаар илүү эсвэл дутуу оронтой байна.");
//     }

//     if(!hasPlus) {
//         console.error("+ тэмдэг дутуу байна");
//     }
    
//     if (hasPlus && countryCode != 976) {
//         console.error("Улсын код буруу");
//     }
// }





// // // **************************************  JS Number exercise - 7 ************************************** 
// // // **************************************  Register number validation ************************************** 
// /*
// Монгол улсын иргэний бүртгэлийн дугаар болох регистрийн дугаар нь 10 оронтой эхний 2 орон нь үсэг үлдсэн нь тоо байдаг билээ. 
// Тэгвэл хэрвээ хэрэглэгч гараас 10 тэмдэгт оруулахад эхлээд тухайн оруулсан утганы урт нь 10 байгаа эсэх дараа нь эхний 2 орон нь
//  зөвхөн үсэг эсэх хамгийн эцэст нь үлдсэн 8 тэмдэгт нь бүхэлдээ тоо эсэхийг шалгана уу. 
//  Хэрвээ энэ бүх нөхцлүүд биелж байвал та монгол улсын регистрийн дугаарыг зөв орууллаа гэж харуулна уу. 
//  Хэрвээ аль нэг нөхцөл нь буруу байвал та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа гэж харуулна уу.

// Input: СЦ90091817

// */
// const registerNumber = prompt("Регистрийн дугаар оруулна уу.").toUpperCase();

// let registerChar1 = registerNumber.substr(0,1);
// let registerChar2 = registerNumber.substr(1,2);

// let registerN = Number(registerNumber.substr(2,8)); 
// console.log(`Оруулсан РД: ${registerNumber}`);


// if (registerNumber.length == 10 && !(Number.isInteger(Number(registerChar1))) && !(Number.isInteger(Number(registerChar2))) &&  Number.isInteger(Number(registerN)))  {
//     console.log(`та монгол улсын регистрийн дугаарыг зөв орууллаа.`);
// }
// else
// {
//     console.error(`та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа.`);
// }

// if(registerNumber.length != 10) {
//     console.error(`регистрийн дугаарын орон дутуу эсвэл илүү байна.`);
// }

// if(!isNaN(Number(registerChar1)) || (!isNaN(Number(registerChar2)))) {
//     console.error(`регистрийн дугаарын Эхний 2 орон үсэг байх шаардлагатай`);
// }
