// // **************************************  String exercise - 2 ************************************** 
// // **************************************  Simple assignment ************************************** 

// /*
// 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
// 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.
// 3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
// 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”
// 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт
// 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
//           1 2 3 4 5 
//           2 3 4 5 1 
//           3 4 5 1 2 
//           4 5 1 2 3 
//           5 1 2 3 4
// */

console.log(`\t 1. `);

let firstName = "Munkhbaatar";
let secondName = "Shagdarsuren";

console.log(firstName + "  char length:" + firstName.length);
console.log(secondName + "  char length:" + secondName.length);
if (firstName.length > secondName.length) {
    console.log("---> firstName is longer");
} 
else {
    console.log("---> secondName is longer");
}


console.log(`\n\t 2. `);

console.log(firstName.toLowerCase() + "\n" + secondName.toLowerCase() + "\n");

console.log(`\n\t 3. `);
console.log(firstName.toUpperCase() + "\n" + secondName.toUpperCase());


console.log(`\n\t 4. `);
let str1 = "Pinecone academy- н";
let str2 = " leap хөтөлбөрт тавтай морилго уу";
console.log(str1.concat(str2));

console.log(`\n\t 5. `);
let firstName1 = "Munkhbaatar";
let secondName2 = "Shagdarsuren";
let country = "Mongolia";
let city = "Ulaanbaatar";
let age = "36";
let job = "Software engineer";

console.log (`My name is ${firstName1} ${secondName2}. I live in ${city} city in ${country}. I am ${age} years-old and ${job}.`);

console.log(`\n\t 6. `);

console.log("\n\t1 2 3 4 5 \n\t2 3 4 5 1 \n\t3 4 5 1 2 \n\t4 5 1 2 3 \n\t5 1 2 3 4");