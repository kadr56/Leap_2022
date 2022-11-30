
// Exercise 4
console.log("====================== Exercise 4 ================");
let a = Number(prompt("Insert number 1"));
let b = Number(prompt("Insert number 2"));
let c = Number(prompt("Insert number 3"));
let d = Number(prompt("Insert number 3"));

let min = 0;




if (a <= b && a <= c && a <= d) {
    min = a;
} 
else if (b <= a && b <= c && b <= d) {
    min = b;
} 
else if (c <= a && c <= b && c <= d) {
    min = c;
}
else {
    min = d;
    }

console.log("num1 = " + a + "\nnum2 = " + b + "\nnum3 = " + c + "\nnum4 = " + d);
console.log("min number is " + min);
