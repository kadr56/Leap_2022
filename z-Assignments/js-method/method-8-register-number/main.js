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
isCorrectReg(input);


// 1. Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич. 
function isCorrectReg(reg) {
   if((reg.length == 10 && isNaN(Number(reg.charAt(0))) && isNaN(Number(reg.charAt(1)))) ) {  
      // console.log("correct reg");
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
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'Г': 
         console.log("Аймаг : Архангай");
         break;
      case 'Д':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'Е':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'Ж': 
         console.log("Аймаг : Архангай");
         break;
      case 'З':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'И':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'Й': 
         console.log("Аймаг : Архангай");
         break;
      case 'К':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'Л':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'М': 
         console.log("Аймаг : Архангай");
         break;
      case 'Н':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'О':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'П': 
         console.log("Аймаг : Архангай");
         break;
      case 'Р':
         console.log("Аймаг : Баян-Өлгий")
         break;
      case 'С':
         console.log("Аймаг : Баян-Өлгий")
         break;
   }   
}

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
      У,Ц – Улаанбаатар

// 5. Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү. 