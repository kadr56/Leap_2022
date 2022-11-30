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


// 2000 яах вэ? 400 яах вэ? 
