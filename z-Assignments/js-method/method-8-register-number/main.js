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


let input = prompt("Регистрийн дугаараа оруулна уу");
isCorrectReg(input);


function isCorrectReg(reg) {

   console.log(isNaN(Number(reg.charAt(0))));
   console.log(isNaN(Number(reg.charAt(1))));
   console.log(reg.length == 10);
   if((reg.length == 10 && isNaN(Number(reg.charAt(0))) && isNaN(Number(reg.charAt(1)))) ) {
      
      console.log("correct reg");
   } else { 
      console.log("Wrong REg");
   }
    


}
