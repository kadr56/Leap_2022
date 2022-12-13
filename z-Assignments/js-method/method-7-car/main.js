/*

carBrands = [
["Aston Martin Lagonda Ltd", "UK", 2016],
["Audi", "Germany", 2016],
["BMW", "Germany", 2016],
["Chevrolet", "USA", 2016],
["Dodge", "USA", 2016],
["Ferrari", "Italy", 2016],
["Honda", "Japan", 2016],
["Jaguar", "UK", 2016],
["Lamborghini", "Italy", 2016],
];


1. машины брэндийн эхний үсгээр хайх
input: a
output:   дараах байдлаар хэвлэнэ.

brand: Aston Martin Lagonda Ltd
country: UK
year: 2016


brand: Audi
country: Germany
year: 2016

input: s

output: олдсонгүй

2. машины үйлвэрлэсэн улсаар хайх

input: USA
output: дараах байдлаар хэвлэнэ.


Chevrolet, USA, 2016
Dodge, USA,  2016

3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах
output:  Нийт 9 мөр дата, UK-2, Germany-2,  USA-2, Italy-2, Japan-1

*/


let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("My Array = " + myArray);   

let del = prompt(`My Array = ${myArray} \nInsert element from Array`);

removeArrayElement(myArray, del);

function removeArrayElement(arr, x) {
   let deleteIndex = arr.indexOf(x);
   if(deleteIndex > -1){   // only delete this value if it exists in the array
      console.log("DELETED ITEM = " + arr.splice(deleteIndex, 1));
   } else {
      console.log(x + " element is not found");
   } 

   console.log("My array after delete = " + myArray);   
}


