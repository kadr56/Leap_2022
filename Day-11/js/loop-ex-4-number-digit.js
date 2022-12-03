
// **************************************  Number digits - Хэдэн оронтой вэ ************************************** 
/*
1. Prompt - оор 1 тоо авна.
2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
example: input = 1234567; digit: = 7;
// */

//======= Бодолт - 1    String утга байдлаар олох арга =======//
// let number = prompt ("Insert number");
// console.log("Input number: " + number);
// console.log("Digit: " + number.length);


//======= Бодолт - 2      Number утга байдлаар олох арга =======//
let num = Number(prompt ("Insert number"));
while (!Number.isInteger(num)) {
    num = Number(prompt ("Үсэг оруулсан байна. Тоо оруулна уу.!! "));
}

console.log("Inserted number: " + num);

let count = 0;
while (num !== 0) {
    count++;
    num = Math.floor(num/10);
}
console.log("Number of digit: " + count);



