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


// 1. машины брэндийн эхний үсгээр хайх
console.log("1. машины брэндийн эхний үсгээр хайх");
let input = prompt("Автомашины брэндийн эхний үсэг оруул").toLowerCase();

for(let i = 0; i < carBrands.length; i++) {
   if(carBrands[i][0].charAt(0).toLowerCase() == input){
      console.log("brand : " + carBrands[i][0]);
      console.log("country : " + carBrands[i][1]);
      console.log("year : " + carBrands[i][2] + "\n\n");
   } else {
      console.log("олдсонгүй")
   }
}



// 2. машины үйлвэрлэсэн улсаар хайх
console.log("\n2. машины үйлвэрлэсэн улсаар хайх");
let country = prompt("Үйлдвэрлэсэн улсыг оруулна уу").toLowerCase();
let found = false;
let printTxt = "";

for(let i = 0; i < carBrands.length; i++) {
   if(carBrands[i][1].toLowerCase() === country){
      printTxt += carBrands[i].join(", ") + "\n";
      found = true;
   } 
}
found ? console.log(printTxt) : console.log("олдсонгүй");


// 3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах
// output:  Нийт 9 мөр дата, UK-2, Germany-2,  USA-2, Italy-2, Japan-1
console.log("\n3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах");
let row = carBrands.length;
console.log("Нийт мөр = " + row);
let countries = [];
for(let i = 0; i < carBrands.length; i++) {
   countries.push(carBrands[i][1]);
}

countUniqueCountries(countries);

function countUniqueCountries(arr) {
   let count = [];
   for(let i = 0; i < arr.length; i++) {
      count[arr[i]] = 1 + (count[arr[i]] || 0);
   }
   console.log(count);
}


