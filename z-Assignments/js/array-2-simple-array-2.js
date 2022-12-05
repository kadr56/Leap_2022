// // **************************************  JS Array  ************************************** 
// // **************************************  Simple array 1 ************************************** 
/*
Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.
Array - аас эхний 3 компанийг хайчилж ав
Array - аас сүүлийн 3 компанийг хайчилж ав
Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
Эхний мэдээллийн технологийн компанийг array - аас хас
Сүүлийн мэдээллийн технологийн компанийг array - аас хас
*/


/*
push()
pop()
shift()
unshift()
splice()
slice()     

*/


let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log('      Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.');
console.log("itCompanies Array: " + itCompanies.join(" , "));



console.log('\n\tArray - аас эхний 3 компанийг хайчилж ав');

for(let i = 0; i < 3; i++) {
    console.log(`Removed element ${i+1}: ` + itCompanies.shift());
}
console.log("Remaining elements in the Array: " + itCompanies.join(" , "));




console.log('\n\tArray - аас сүүлийн 3 компанийг хайчилж ав');
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
for(let i = 0; i < 3; i++) {
    console.log(`Removed element ${i+1}: ` + itCompanies.pop());
}
console.log("Remaining elements in the Array: " + itCompanies.join(" , "));



console.log('\n\tМэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав');
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(`Removed element : ` + itCompanies.splice(3,2));

console.log("Remaining elements in the Array: " + itCompanies.join(" , "));



// console.log("Array length: " + itCompanies.length);
// console.log("Эхний компани: " + itCompanies[0]);
// console.log("Дундах компани: " + itCompanies[3]);
// console.log("Сүүлчийн компани: " + itCompanies[6]);

// console.log("\nБүх компаниуд хэвлэх: " );
// for(let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }

// console.log("\nКомпани тус бүрийг том үсгээр хэвлэх: " );
// for(let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }


// console.log("\nArray - г өгүүлбэр болгон хэвлэ: : " );
// str = "";
// for(let i = 0; i < itCompanies.length; i++) {
//     str = str + itCompanies[i] + ", ";
// }

// str = str + "зэрэг мэдээллийн технологийн томоохон компаниуд." 
// console.log(str);
