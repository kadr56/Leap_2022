// **************************************  String exercise - 3.1 ************************************** 
// **************************************  Огноо хэвлэн гаргах ************************************** 

// String exercise - 3
// Огноо хэвлэн гаргах
/* Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу. 
Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар нэг оронтой байвал 2 оронтой болгох буюу сар нь 
1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах
*/


let year = prompt("Insert year / in 4 digit  2000, 1999 etc /:");

while (year.length != 4 || !Number.isInteger(Number(year))) {
    year = prompt("Year is wrong. Must be in 4 digit / 2000, 1999 etc / \nInsert year again. :");
}

let month = prompt("Insert month:");
while (month == "0" || Number(month)>12 || Number(month) < 1 || !Number.isInteger(Number(month)) ) {
    month = prompt("Month is wrong. Insert month again. (value must be 1-12):");
}

let date = prompt("Insert date:");
while (date == "0" || Number(date)>31 || Number(date) < 1  || !Number.isInteger(Number(date))) {
    date = prompt("Day is wrong. Insert day again. (value must be 1-31):");
}

console.log("Year = " + year);
console.log("Month = " + month);
console.log("Date = " + date);

// Remove white spaces from beginning and end.
year = year.trim();
month = month.trim();
date = date.trim();
fullDate = "";

// Year Checking
if (year.length != 4 || year == "0") {
    console.error("Year is wrong");
}
if (month.length > 2 || month == "0" || Number(month)>12) {
    console.error("Month is wrong");
}
if (date.length > 2 || date == "0" || Number(date)>31) {
    console.error("Date is wrong");
}

if(month.length == 1 && month != "0") {
    month = "0" + month;
    console.log("Month is changed to -- " + month);
}

if(date.length == 1 && date != "0") {
    date = "0" + date;
    console.log("Day is changed to --" + date);
}

if (month == "02" || month == "2") {
    if(28 < Number(date)) {
        console.error("2 cар 28-аас илүү хоногтой байж болохгүй");
    }
}

if (month == "02" || month == "2") {
    if(28 < Number(date)) {
        console.b
    }
}

fullDate = year + "-" + month + "-" + date;
console.log ("FINAL RESULT - FULL DATE: " + fullDate);







// **************************************  String exercise - 3.3 ************************************** 
// **************************************  Үүрэн телефоны Operator олох ************************************** 

/* 2. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) 
хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
*/


let mobileNumber = prompt("Утасны дугаараа оруулна уу. /8 оронтой байх 99003322 гэх мэт. /")
console.log("\n\nОруулсан утасны дугаар : " + mobileNumber);
// validation 

while (!(Number.isInteger(Number(mobileNumber))) || mobileNumber.length != 8) {
    mobileNumber = prompt("Утасны дугаараа зөв оруулна уу. /8 оронтой байх 99003322 гэх мэт. /")
}

let firstTwoDigit = mobileNumber.substring(0,2);
let operator = "Not defined operator";



for (let i = 0; i < mobileNumber.length; i++) {

    if(firstTwoDigit == "80" || firstTwoDigit == "86" || firstTwoDigit == "88" ) {
        operator = "Unitel";
    }

    if(firstTwoDigit == "91" || firstTwoDigit == "96" || firstTwoDigit == "90" || firstTwoDigit == "90" || firstTwoDigit == "90") {
        operator = "Skytel";
    }

    if(firstTwoDigit == "85" || firstTwoDigit == "99" || firstTwoDigit == "94" || firstTwoDigit == "75") {
        operator = "Mobicom";
    }

    if(firstTwoDigit == "75" || firstTwoDigit == "83" || firstTwoDigit == "93" || firstTwoDigit == "97" || firstTwoDigit == "98") {
        operator = "G-Mobile";
    }

}

console.log("Operator : " + operator);


