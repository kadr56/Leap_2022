// // **************************************  JS Number exercise - 7 ************************************** 
// // **************************************  Register number validation ************************************** 
/*
Монгол улсын иргэний бүртгэлийн дугаар болох регистрийн дугаар нь 10 оронтой эхний 2 орон нь үсэг үлдсэн нь тоо байдаг билээ. 
Тэгвэл хэрвээ хэрэглэгч гараас 10 тэмдэгт оруулахад эхлээд тухайн оруулсан утганы урт нь 10 байгаа эсэх дараа нь эхний 2 орон нь
 зөвхөн үсэг эсэх хамгийн эцэст нь үлдсэн 8 тэмдэгт нь бүхэлдээ тоо эсэхийг шалгана уу. 
 Хэрвээ энэ бүх нөхцлүүд биелж байвал та монгол улсын регистрийн дугаарыг зөв орууллаа гэж харуулна уу. 
 Хэрвээ аль нэг нөхцөл нь буруу байвал та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа гэж харуулна уу.

Input: СЦ90091817

*/
const registerNumber = prompt("Регистрийн дугаар оруулна уу.").toUpperCase();

let registerChar1 = registerNumber.substr(0,1);
let registerChar2 = registerNumber.substr(1,2);

let registerN = Number(registerNumber.substr(2,8)); 
console.log(`Оруулсан РД: ${registerNumber}`);


if (registerNumber.length == 10 && !(Number.isInteger(Number(registerChar1))) && !(Number.isInteger(Number(registerChar2))) &&  Number.isInteger(Number(registerN)))  {
    console.log(`та монгол улсын регистрийн дугаарыг зөв орууллаа.`);
}
else
{
    console.error(`та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа.`);
}

if(registerNumber.length != 10) {
    console.error(`регистрийн дугаарын орон дутуу эсвэл илүү байна.`);
}

if(!isNaN(Number(registerChar1)) || (!isNaN(Number(registerChar2)))) {
    console.error(`регистрийн дугаарын Эхний 2 орон үсэг байх шаардлагатай`);
}
