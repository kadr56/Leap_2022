// // // **************************************  JS Function  ************************************** 
// // // **************************************  Function zohioh ************************************** 
// /*
// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.
// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
// 5. Өгөгдсөн array - ийн дундажыг олох функц бич.
// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
// 7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

// */


// // 1. Өгөгдсөн 2 тооны ихийг олох функц бич.
// console.log(`\n\t 1. `);

// let num1 = Number(prompt("Insert number 1"));
// let num2 = Number(prompt("Insert number 2"));

// function findMax(x, y) {
//     if(x < y) {
//         console.log(y + ' is bigger than ' + x);
//     } else if (x > y) {
//         console.log(x + ' is bigger than ' + y);
//     } else {
//         console.log(y + ' = ' + x);
//     }
// }

// findMax(num1, num2)





// // 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// console.log(`\n\t 2. `);
// let myArray = [1, 3, 4, 5, 6, 7, 0, 20, 15, 13];


// console.log("My array = " + myArray.toString());
// function checkExist(x) {
//     let exist = true;

//     for(let i = 0; i < myArray.length; i++) {    
        
//         if(myArray[i] == x) {
//             exist = true;
//             break;
//         }
//         else {
//             exist = false;
//         }
//     }
    
//     if(exist == true) {
//         console.log(`${x} number exist in the array`);
//     } else {
//         console.log(`${x} number doesn't exist in the array`);
//     }
// }

// let input = Number(prompt("Input the number to check"));
// console.log("user input = " + input);5
// checkExist(input);




// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
console.log(`\n\t 3. `);
let str = `This is simple example text containing special character + , " ' `;
console.log("My Text = " + str);

let input = prompt(str + "\nInput character to check");
console.log("user input = " + input);
console.log("Location Index = " + checkChar(input));

function checkChar(x) {
    let index = -1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == x) {
            index = i;
            console.log("Yes, exists.")
            break;
        } 
    }

    return index;
}