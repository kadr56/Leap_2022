// // **************************************  JS Number exercise - 5 ************************************** 
// // **************************************  Simple assignment ************************************** 
/*
1. 0-ээс 100 хүртэл санамсаргүй тоог үүсгэнэ үү.
2. 50-ээс 255 хүртэлх санамсаргүй тоог үүсгэнэ үү.
*/


// FORMULA
//let random = Math.floor((Math.random()*(max - min +1)) + min);

let random1 = Math.floor(Math.random()*(101) + 0);
let random2 = Math.floor(Math.random()*(206) + 50);


console.log("0-ээс 100 хүртэл санамсаргүй тоо : " + random1);
console.log("50-ээс 250 хүртэл санамсаргүй тоо : " + random2);

