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

let input = prompt("Автомашины брэндийн эхний үсэг оруул").toLowerCase();

for(let i = 0; i < carBrands.length; i++) {
   console.log(carBrands[i][0].charAt(0).toLowerCase());
   if(carBrands[i][0].charAt(0).toLowerCase() == input){
      console.log("found");
      
      for(let j = 0; j < carBrands[i].length; j++) {
         console.log(carBrands[i].join("\n"));
      }
   } else {
      console.log("not found")
   }
}

/*
1. машины брэндийн эхний үсгээр хайх
input: a

brand: Aston Martin Lagonda Ltd
country: UK
year: 2016

brand: Audi
country: Germany
year: 2016

input: s
output: олдсонгүй
*/

