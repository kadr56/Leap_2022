console.log('Date is here');
let now = new Date();
console.log ( now );


let jan01_1970 = new Date(0);
console.log(jan01_1970);

let Dec31_2022 = new Date("2022-12-31")
console.log(Dec31_2022);

let difference = Dec31_2022 - now;
console.log(difference);

let time = new Date (difference);
console.log(time.getDate());