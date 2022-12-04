// // **************************************  JS loop exercise - 8 ************************************** 
// // **************************************  Guess the number ************************************** 
/*
1. 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
2. Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй. 
3. Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.
*/

let max = 100;
let min = 1;

let random = Math.floor(Math.random() * (max - min + 1) + min);
let guessNumber = 0;
console.log("Оруулсан тоо: " + random);

guessed = false;



while (!guessed) {

    guessNumber = prompt("Random = " + random + "\nRandom тоог таах тоглоом. Тоо оруулна уу: /1-100 хооронд утга оруулна уу./ ", );
    
    if (!Number.isInteger(Number(guessNumber))){
        alert("Үсэг болон Тэмдэгт оруулахгүй. Зөвхөн тоо оруулна уу.")
    }

    if (guessNumber > random) {
        alert("Арай их байна.Дахиад оролдоно уу.")
    }
    if (guessNumber < random) {
        alert("Арай бага байна.Дахиад оролдоно уу.")
    }
    if (guessNumber == random) {
        alert("Баяр хүргэе та таалаа")
        guessed = true;
    } 

}
