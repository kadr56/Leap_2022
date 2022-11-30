// let a = "hi";
// let b = "hi";
// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = '10';

// console.log(c == d);
// console.log(c === d);


// console.log("=================================");
// let e = true;
// let f = false;
// console.log(e < f);
// console.log(e > f);

// let result = 15;
// if (result > 10) {
//     console.log("more than 10");
// } else {
//     console.log("less than 10");
// }

// result > 10 ? console.log("more than 10") : console.log("less than 10")
// result > 10 ? (result < 11 ? console.log("test"):console.log("hi")) : console.log("less than 10")



// const tip = prompt ("Insert the first money amount: ");

// if (5000 >= tip1 && 30000 <= tip1) {
//     console.log("15% nemegdene");
// } else {
//     console.log("20 % nemegdene");
// }

// console.log("For - " + tip1);
// (5000 <= tip1 && tip1 <= 30000) ? console.log("+15% Pay: " + (tip1 + tip1*0.15)) : console.log("+20% Pay: " + (tip1 + tip1*0.20))


// console.log("For - " + tip1);
// let tipResult = (5000 <= tip1 && tip1 <= 30000) ? (tip1 + tip1*0.15) : (tip1 + tip1*0.20)
// console.log(tipResult);

// console.log("For - " + tip2);
// (5000 <= tip2 && tip2 <= 30000)  ? console.log("+15% Pay: " + (tip2 + tip2*0.15)) : console.log("+20% Pay: " + (tip2 + tip2*0.20))

// console.log("For - " + tip3);
// (5000 <= tip3 && tip3 <= 30000)  ? console.log("+15% Pay: " + (tip3 + tip3*0.15)) : console.log("+20% Pay: " + (tip3 + tip3*0.20))











// const studentName = prompt ("Таны нэр");
// const studentScore = Number(prompt ("Оноогоо оруул"));
// let studentResult = "Үнэлгээ хийгээгүй.";

// if (studentScore < 60) {
//     studentResult = "Маш муу";
//  } 
// else if (60 <= studentScore && studentScore < 70) {
//     studentResult = "Хангалттай";

// } 
// else if (70 <= studentScore && studentScore < 80) {
//     studentResult = "Дунд";

// } 
// else if (80 <= studentScore && studentScore < 90) {
//     studentResult = "Сайн";

// } 
// else if (90 <= studentScore && studentScore < 100) {
//     studentResult = "Маш Сайн";

// } else {
//     studentResult = "Буруу утга орсон байна.";
// }

// alert("Нэр: " + studentName + "\nДүн: " + studentScore + "\nҮнэлгээ: " + studentResult);


// console.log(`Нэр: ${studentName} \nДүн: ${studentScore} \nҮнэлгээ: ${studentResult}`);



// console.log('Its log');
// console.error("it is error");

// const str = "Life, the universe and everything.";
// console.log(str.length);





// const registerNumber = prompt("Register No");

// // let registerChar = registerNumber.substr(0,2);
// let registerChar1 = registerNumber.substr(0,1);
// let registerChar2 = registerNumber.substr(1,2);

// let registerN = Number(registerNumber.substr(2,9)); 
// // console.log(registerChar);
// console.log(registerN);


// if (registerNumber.length == 10 && !(Number.isInteger(Number(registerChar1))) && !(Number.isInteger(Number(registerChar2))) &&  Number.isInteger(Number(registerN)))  {
//     console.log(`SUCCESS. Register No: ${registerNumber}`);
// }
// else if (registerNumber.substr(0,2))
// {
//     alert("Register number invalid");
// }









// console.log(registerNumber.substr(0, 2));

// console.log(registerNumber.substring(2, 9));

// charAt(index) str[index]
// console.log(str.charAt(0));
// console.log(str[1]);
// str.toUpperCase();
// str.toLowerCase();


// console.log(registerNumber.charAt(0));
// console.log(registerNumber[1]);


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let firstName = 'John';
// let fullName = firstName.concat(' ', 'Smith');
// console.log(fullName);
// console.log(firstName);


// console.log(Number('ABC'));
// console.log(Number.isInteger(Number('Abc')));
// console.log(Number('12223232'));
// console.log(Number.isInteger(Number('1232343453')));



let mobile  = prompt("Монгол улсын утасны дугаарыг оруулна уу. Жич: +976..... гэсэн байдлаар бичнэ үү.");
let hasPlus = (mobile.substr(0,1)=="+");     //Boolean 
let countryCode = (mobile.substr(1,3));  
let number = mobile.substr(4,8);
console.log(number);
console.log(countryCode);

if( hasPlus && countryCode == 976 && mobile.length == 12 && Number.isInteger(mobile) ) {
    console.log(mobile.substr(0,1));
    console.log("Баяр хүргэе. \nТа Монгол улсын утасны дугаарыг улсын кодтой хамт зөв оруулсан байна.");
}
else {
     console.error("Та Монгол улсын утасны дугаарыг буруу оруулсан байна.");

    if(mobile.length != 12) {
        console.error("утасны дугаар илүү эсвэл дутуу оронтой байна.");
    }

    if(!hasPlus) {
        console.error("+ тэмдэг дутуу байна");
    }
    
    if (hasPlus && countryCode != 976) {
        console.error("Улсын код буруу");
    }
}



let p = prompt("Бутархай тоо оруулна уу");
console.log(Math.round(p));




let number1 = prompt ("3 оронтой тоо оруулна уу.");

let digit1 = Number(number1.substr(0,1));
let digit2 = Number(number1.substr(1,1));
let digit3 = Number(number1.substr(2,1));
let sum = digit1 + digit2 + digit3;

console.log("Sum of digit = " + sum);



// let num1 = prompt("Insert the first number");
// let num2 = prompt("Insert the second number");


// let random = Math.floor(Math.random()*(num2 - num1));
// console.log("Random number" + random);



// Exercise 3
console.log("====================== Exercise 3 ================");

const year = prompt("Жил оруулна уу.");
let result = "";

// if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
// {
//     console.log(`${year} = Өндөр жил`);
// }
// else {
//     console.log(`${year} = Өндөр жил биш`);
// }


(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? result = "Өндөр жил" : result = "Өндөр жил биш";
console.log(year + " он = " + result);