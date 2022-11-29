// Exercise 1.1
// 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
// a=85 b=75 c=96 d=69
// 80-аас их тоонуудын нийлбэрийг: 181

console.log("====================== Exercise 1.1 ================");
let a = 83;
let b = 75;
let c = 98;
let d = 15;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);

let sum = 0;

if(a > 80) {
    sum = sum + a;
    console.log(a + " is more than 80.");
} 

if (b > 80) {
    sum = sum + b;
    console.log(b + " is more than 80.");
}

if (c > 80) {
    sum = sum + c;
    console.log(c + " is more than 80.");
}

if (d > 80) {
    sum = sum + d;
    console.log(d + " is more than 80.");
}

console.log("Sum of the numbers larger than 80 ： " + sum);


// Exercise 1.2
// 4 н хувьсагч зарлан тоон утга өг. Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4
// 5-аас бага тоонуудын үржвэр: 24

let num1 = 2;
let num2 = 4;
let num3 = 3;
let num4 = 7;

console.log("====================== Exercise 1.2 ================");
console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);
console.log("num4 = " + num4);

let multi = 1;

if(num1 < 5) {
    multi = multi * num1;
    console.log(num1 + " is less than 5.");
} 

if(num2 < 5) {
    multi = multi * num2;
    console.log(num2 + " is less than 5.");
}

if(num3 < 5) {
    multi = multi * num3;
    console.log(num3 + " is less than 5.");
}

if(num4 < 5) {
    multi = multi * num4;
    console.log(num4 + " is less than 5.");
}

console.log("5-аас бага тоонуудын үржвэр:  " + multi);
