/*

Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич. 
Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. / 
РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү.
А – Архангай
Б – Баян-Өлгий
В – Баянхонгор
Г – Булган
Д – Говь-Алтай
Е – Дорноговь
Ж – Дорнод
З – Дундговь
И – Завхан
Й – Өвөрхангай
К – Өмнөговь
Л – Сүхбаатар
М – Сэлэнгэ
Н – Төв
О – Увс
П – Ховд
Р – Хөвсгөл
С – Хэнтий
Т – Дархан-Уул
Ф – Орхон
Х – Говьсүмбэр
У,Ч – Улаанбаатар

*/


/* 
Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич. 
Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. / 
РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү. */


let input = prompt("Регистрийн дугаараа оруулна уу").toUpperCase();
console.log("РД: " + input);



getRegisterInfo(input);

function getRegisterInfo(reg) {
   isCorrectReg(reg);
}




// 1. Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич. 
function isCorrectReg(reg) {
   if((reg.length == 10 && isNaN(Number(reg.charAt(0))) && isNaN(Number(reg.charAt(1)))) ) {  
      console.log("correct reg");
      getGender(reg);
      getBirthDay(reg);
      getBirthRegion(reg);
   } else { 
      console.log("Регистрийн дугаар буруу байна.");
   }
}

//2. Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. / 
function getGender(reg) {
   if (Number(reg[8]) % 2 == 0) {
      console.log("Хүйс: Эмэгтэй");
   } else {
      console.log("Хүйс: Эрэгтэй");
   }

}


// 3. РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
// ЧЙ86050630
function getBirthDay(reg) {
   let year = "19" + reg.substr(2,2);
   let month = reg.substr(4,2)
   let day = reg.substr(6,2)
   console.log(`Төрсөн өдөр = ${year}-${month}-${day}`)
}

// 4. РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
function getBirthRegion(reg) {
   switch (reg[0]) {
      case 'A': 
         console.log("Аймаг : Архангай");
         break;
      case 'Б':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'В':
         console.log("Аймаг : Баянхонгор")
         break;
      case 'Г': 
         console.log("Аймаг : Булган");
         break;
      case 'Д':
         console.log("Аймаг : Говь-Алтай")
         break;
      case 'Е':
         console.log("Аймаг : Дорноговь")
         break;
      case 'Ж': 
         console.log("Аймаг : Дорнод");
         break;
      case 'З':
         console.log("Аймаг : Дундговь")
         break;
      case 'И':
         console.log("Аймаг : Завхан")
         break;
      case 'Й': 
         console.log("Аймаг : Өвөрхангай");
         break;
      case 'К':
         console.log("Аймаг : Өмнөговь")
         break;
      case 'Л':
         console.log("Аймаг : Сүхбаатар")
         break;
      case 'М': 
         console.log("Аймаг : Сэлэнгэ");
         break;
      case 'Н':
         console.log("Аймаг : Төв")
         break;
      case 'О':
         console.log("Аймаг : Увс")
         break;
      case 'П': 
         console.log("Аймаг : Ховд");
         break;
      case 'Р':
         console.log("Аймаг : Хөвсгөл")
         break;
      case 'С':
         console.log("Аймаг : Хэнтий")
         break;
      case 'Т':
         console.log("Аймаг : Дархан-Уул")
         break;
      case 'Ф': 
         console.log("Аймаг : Орхон");
         break;
      case 'Х':
         console.log("Аймаг : Говьсүмбэр")
         break;
      case 'У':
         console.log("Аймаг : Улаанбаатар")
         break;
      case 'Ц':
         console.log("Аймаг : Улаанбаатар")
         break;
      case 'Ч':
         console.log("Аймаг : Улаанбаатар")
         break;
      default:
         console.log("Буруу РД оруулсан байна. Аймаг олдсонгүй.")
         break;
   }   
}
