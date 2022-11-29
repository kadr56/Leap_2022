

// let babyShark = "Baby Shark, doo-doo, doo-doo";
// let mommyShark = "Mommy Shark, doo-doo, doo-doo";

// let baby = "Baby Shark";
// let mommy = "Mommy Shark";


// console.log(babyShark + "\n" + babyShark + "\n" + babyShark + "\n"+ baby);
// console.log(mommyShark + "\n" + mommyShark + "\n" + mommyShark + "\n" + mommy);



// let undify;
// let nullVariable = null;
// let myDecision = true;

// console.log (typeof undify);
// console.log (typeof nullVariable);
// console.log (myDecision);
// console.log (typeof myDecision);

// let x = 2;
// let y = 3;
// let z = 4;

// // alert( (x*x + y*y - z*z*z)/240*175 );

// console.log(36%19);

// let result = '30' - 10;
// console.log(result);


// const Pi = 3.14;
// let r = 3;
// console.log("Circle radius (2*Pi*r) = " + (2 * Pi * r));


// let a = prompt("Please give me the top");
// let b = prompt("Please give me the bottom");
// let h = prompt("please give me the ");

// console.log("Trapeziod Area = " + (a+b)/2*h); 


// let a = prompt("Please insert the first number: ");
// let b = prompt("Please insert the second number: "); 

// console.log(a + ">" + b)

// if(a > b) {
//     console.log("It is true");
// } else {
//     console.log("It is false");
// }


// const year = prompt ("Insert the Year of birth");
// const old = 2022 - year;
// console.log(old);

// if (0 <= old && old <= 1) {
//     console.log("Infant");
// }
// else if (1 < old && old <= 3) {
//     console.log("Toddler");
// }
// else if (3 < old && old <= 5) {
//     console.log("Preschool");
// }
// else if (5 < old && old <= 12) {
//     console.log("Gradeschooler");
// }
// else if (12 < old && old <= 18) {
//     console.log("Teen");
// }
// else if (18 < old && old <= 21) {
//     console.log("Young adult");
// }
// else {
//     console.log("Adult");
// }



// // Exercise - 6 

// let number = prompt ("Insert number:");

// if ((number%2)==0) {
//     console.log("Even number");
// }
// else {
//     console.log("Odd number")
// }






// Exercise - 3

// let number = prompt ("Insert number:");

// if ((number%3==0)||(number%7==0)) {
//     console.log(number  + " is divisible by 3 or 7");
// }
// else {
//     console.log(number + " Not divisible by 3 or 7")
// }





// Exercise - 5
// let weight = prompt ("Insert Weight");
// let height = prompt ("Insert height in meter");
// let bmi = weight/(height*height);
// console.log("BMI = " + bmi);

// if (bmi < 18.5) {
//     console.log("Under weight")
// }
// else if (18.5 <= bmi && bmi <= 24.9) {
//     console.log("Normal")
// }
// else if (25 <= bmi && bmi <= 29.9) {
//     console.log("Over weight")
// }
// else if (30 <= bmi && bmi <= 34.9) {
//     console.log("Obesity (Class I)")
// }
// else if (35 <= bmi && bmi <= 39.9) {
//     console.log("Obesity (Class II)")
// }
// else {
//     console.log("Obesity (Class III)")
// }



let dayString = prompt("Insert day");
console.log(typeof dayString);
let day = Number(dayString);
console.log(day);
console.log(typeof day);
let dayName;

switch(day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log (dayName);

