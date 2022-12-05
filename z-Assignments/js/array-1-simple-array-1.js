// // **************************************  JS Array  ************************************** 
// // **************************************  Simple array 1 ************************************** 
/*
Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 

console.log() ашиглан array хэвлэх
Array дахь компаниудын length хэвлэх
Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
Компани бүрийг хэвлэх
Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.
*/


let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);
console.log("Array length: " + itCompanies.length);
console.log("Эхний компани: " + itCompanies[0]);
console.log("Дундах компани: " + itCompanies[3]);
console.log("Сүүлчийн компани: " + itCompanies[6]);

console.log("\nБүх компаниуд хэвлэх: " );
for(let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

console.log("\nКомпани тус бүрийг том үсгээр хэвлэх: " );
for(let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}


console.log("\nArray - г өгүүлбэр болгон хэвлэ: : " );
str = "";
for(let i = 0; i < itCompanies.length; i++) {
    str = str + itCompanies[i] + ", ";
}

str = str + "зэрэг мэдээллийн технологийн томоохон компаниуд." 
console.log(str);
