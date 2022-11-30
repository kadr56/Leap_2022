
// Exercise 4
console.log("====================== Exercise 4 ================");
let a = Number(prompt("Insert number 1"));
let b = Number(prompt("Insert number 2"));
let c = Number(prompt("Insert number 3"));

let max = 0;
let min = 0;




if (a >= b && a >=c) {
    max = a;
} 
else if (b >= a && b >= c) {
    max = b;
} 
else {
    max = c;
    }

console.log("num1 = " + a + "\nnum2 = " + b + "\nnum3 = " + c);
console.log("max number is " + max);

if (a <= b && a <=c) {
    min = a;
} 
else if (b <= a && b <= c) {
    min = b;
} 
else {
    min = c;
    }

console.log("min number is " + min);