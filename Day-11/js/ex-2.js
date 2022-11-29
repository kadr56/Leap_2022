
// Exercise 2.1
console.log("====================== Exercise 2.1 ================");

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false



console.log("i = 4 > 3       ------>   " + i);
console.log("iii = 4 < 3       ------>   " + iii);
console.log("ii = 4 >= 3       ------>   " + ii);
console.log("iv = 4 <= 3       ------>   " + iv);
console.log("v = 4 == 4       ------>   " + v);
console.log("vi = 4 === 4       ------>   " + vi);
console.log("vii = 4 != 4       ------>   " + vii);
console.log("iix = 4 !== 4       ------>   " + iix);
console.log("ix = 4 != \"4\"       ------>   " + ix);
console.log("x = 4 == \"4\"       ------>   " + x);
console.log("xi = 4 === \"4\"       ------>   " + xi);


// Exercise 2.2
console.log("====================== Exercise 2.2 ================");

let one = 4 > 3 && 10 < 12;         // True
let two = 4 > 3 && 10 > 12;         // False
let three = 4 > 3 || 10 < 12;       // True
let four = 4 > 3 || 10 > 12;        // True
let five = !(4 > 3);                // False
let six = !(4 < 3);                 // True
let eight = !(4 > 3 && 10 < 12);    // False
let nine = !(4 > 3 && 10 > 12);     // True
let ten = !(4 === "4");             // True


console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);




// Exercise 2.3
console.log("====================== Exercise 2.3 ================");

let myAge = prompt ("Миний нас:");
console.log("Миний нас : " + myAge);
let yourAge = prompt ("Таны нас:");
console.log("Таны нас : " + yourAge);

if (myAge > yourAge) {
    console.log("Би ах юм байна. Нас явах лүд юмаа.");
}
else if (myAge < yourAge) {
    console.log ("Та ах юм байна. Цагаан сараар бэлэг авна шүү.");
}
else {
    console.log ("Бид чацуу. Let's become hommies");
}





// Exercise 2.4
console.log("====================== Exercise 2.4 ================");


//The getDay() method returns the weekday as a number between 0 and 6.
let currentDay = new Date().getDay();

console.log("Өнөөдөр долоо хоногийн " + currentDay + " дахь өдөр");


if (currentDay == 0 || currentDay == 6 ) {
    console.log("Өнөөдөр амралтын өдөр. Амралтын өдрийн мэнд.");
}
else 
    console.log("Ажлын өдөр шүү. Хичээгээрэй.");


// Exercise 2.5
console.log("====================== Exercise 2.5 ================");

let hours = prompt ("Ажилласан цагаа оруулна уу.")
let ratePerHour = prompt ("Цагийн цалинг оруулна уу.");

let wage = hours * ratePerHour;

console.log("Таны бодогдсон цалин : " + wage + " төгрөг байна.");

