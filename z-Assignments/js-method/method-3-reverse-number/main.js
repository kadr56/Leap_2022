/*
Reverse number
      Input: 45361
      Output: 16354
*/

let str = prompt("Insert number");
var splitString = str.split(""); 
var reverseArray = splitString.reverse(); 
var joinArray = reverseArray.join(""); 

console.log(joinArray);