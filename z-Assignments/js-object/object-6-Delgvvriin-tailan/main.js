
/*
Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн. 
productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна. 
Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.

const data = [
         {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000  casherId:1, date: '2022-11-01'},
         {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {.}
         {.}
         {.}
];
Дараах даалгаварыг хийж гүйцэтгэнэ үү.
1. Нийт борлуулалтын дүнг тооцоолох.
2. Нийт борлуулагдсан барааны тоог тооцоолох.
3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
*/

const data = [
  {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500_000,  casherId:1, date: '2022-11-01'},
  {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54_000, casherId:1, date: '2022-11-01'},
  {productName:"Cake", unitPrice:8000, amount:10 , totalPrice:80_000 , casherId:1, date: '2022-11-01'},
  {productName:"Sweet", unitPrice:1000, amount:20 , totalPrice:20_000 , casherId:1, date: '2022-11-01'},
  {productName:"Meat", unitPrice:20000, amount:20 , totalPrice:400_000 , casherId:1, date: '2022-11-01'},
  {productName:"Butter", unitPrice:2000, amount:5 , totalPrice:10000 , casherId:1, date: '2022-11-01'},
  {productName:"Orange", unitPrice:3000, amount:10 , totalPrice:30000 , casherId:1, date: '2022-11-01'},
  {productName:"Onion", unitPrice:1500, amount:20 , totalPrice:30000 , casherId:1, date: '2022-11-01'},
  {productName:"Chocopie", unitPrice:2000, amount:15 , totalPrice:30000 , casherId:1, date: '2022-11-01'},
  {productName:"Egg", unitPrice:10000, amount:20 , totalPrice:200000 , casherId:1, date: '2022-11-01'},
  {productName:"Youghurt", unitPrice:2000, amount:20 , totalPrice:40000 , casherId:1, date: '2022-11-01'},
  {productName:"Coke", unitPrice:1500, amount:30 , totalPrice:45000 , casherId:1, date: '2022-11-01'},
  {productName:"Ice cream", unitPrice:1000, amount:210 , totalPrice:210000 , casherId:1, date: '2022-11-01'},
  {productName:"tea", unitPrice:2000, amount:50 , totalPrice:100_000 , casherId:1, date: '2022-11-01'},
  {productName:"Banana", unitPrice:3000, amount:100 , totalPrice:300_000 , casherId:1, date: '2022-11-01'},
  {productName:"Edible oil", unitPrice:9000, amount:120 , totalPrice:1_080_000 , casherId:1, date: '2022-11-01'},
  {productName:"Buuz", unitPrice:10000, amount:130 , totalPrice:1_300_000 , casherId:1, date: '2022-11-01'},
  {productName:"Carrot", unitPrice:1000, amount:200 , totalPrice:200_000 , casherId:1, date: '2022-11-01'},
  {productName:"Orange juice", unitPrice:3000, amount:30 , totalPrice: 90_000 , casherId:1, date: '2022-11-01'},
  {productName:"Mushroom", unitPrice:1000, amount:10 , totalPrice:10000 , casherId:1, date: '2022-11-01'},
  {productName:"Apple", unitPrice:4000, amount:111 , totalPrice:444_000 , casherId:1, date: '2022-11-01'},
  {productName:"Salt", unitPrice:500, amount:30 , totalPrice:15000 , casherId:1, date: '2022-11-01'},
];

// 1. Нийт борлуулалтын дүнг тооцоолох.
console.log("\n1. Нийт борлуулалтын дүнг тооцоолох.")
let totalSale = 0;
for(let i = 0; i < data.length; i++) {
  totalSale +=  data[i].totalPrice;
}
console.log("TOTAL SALES = " + totalSale);


// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
console.log("\n2. Нийт борлуулагдсан барааны тоог тооцоолох.")
let totalProducts = 0;
for(let i = 0; i < data.length; i++) {
  totalProducts +=  data[i].amount;
}
console.log("TOTAL SOLD PRODUCTS = " + totalProducts);

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
console.log("\n3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.")
data.sort((firstItem, secondItem) => secondItem.totalPrice - firstItem.totalPrice)
for(let i = 0; i < 5; i++) {
  console.log((i+1)+". "+ data[i].productName + " \t Total sales = " + data[i].totalPrice)
}

// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
console.log("\n4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.")
data.sort((firstItem, secondItem) => secondItem.amount - firstItem.amount)
for(let i = 0; i < 5; i++) {
  console.log((i+1)+". "+ data[i].productName + '\t\t Sold amount-' + data[i].amount)
}


// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
console.log("\n5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.")
data.sort((firstItem, secondItem) => firstItem.totalPrice - secondItem.totalPrice)
for(let i = 0; i < 5; i++) {
  console.table((i+1)+". "+ data[i].productName + "\t\t Total sales =" + data[i].totalPrice)
}

// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
console.log("\n6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.")
data.sort((firstItem, secondItem) => firstItem.amount - secondItem.amount)
for(let i = 0; i < 5; i++) {
  console.table((i+1)+". "+ data[i].productName + '\t\t Sold amount-' + data[i].amount )
}

// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
console.log("\n7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.")
for(let i = 0; i < data.length; i++) {
  data[i].percent = Math.round((data[i].totalPrice * 100 / totalSale )*100)/100;
}

data.sort((firstItem, secondItem) => secondItem.percent - firstItem.percent);

for(let i = 0; i < 5; i++) {
  console.table((i+1)+". "+ data[i].productName + "\t\t Total sales =" + data[i].totalPrice +  '\t\t Sold percent-' + data[i].percent + " %" )
}


// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
console.log("\n7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.")
for(let i = 0; i < data.length; i++) {
  data[i].percentAmt = Math.round((data[i].amount * 100 / totalProducts )*100)/100;
}

data.sort((firstItem, secondItem) => secondItem.percentAmt - firstItem.percentAmt);

for(let i = 0; i < 5; i++) {
  console.table((i+1)+". "+ data[i].productName + "\t\t Total sold amount =" + data[i].amount +  '\t\t Sold percent-' + data[i].percentAmt + " %" )
}


// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
console.log("\n9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.")
data.sort((firstItem, secondItem) => firstItem.percent - secondItem.percent);

for(let i = 0; i < 5; i++) {
  console.table((i+1)+". "+ data[i].productName + "\t\t Total sales =" + data[i].totalPrice +  '\t\t Sold percent-' + data[i].percent + " %" )
}


// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
console.log("\n10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.")
data.sort((firstItem, secondItem) => firstItem.percentAmt - secondItem.percentAmt);

for(let i = 0; i < 5; i++) {
  console.table((i+1)+". "+ data[i].productName + "\t\t Total sold amount =" + data[i].amount +  '\t\t Sold percent-' + data[i].percentAmt + " %" )
}