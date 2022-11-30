
const studentName = prompt ("Таны нэр");
const studentScore = Number(prompt ("Оноогоо оруул"));
let studentResult = "Үнэлгээ хийгээгүй.";

if (0 <= studentScore && studentScore < 60) {
    studentResult = "Маш муу";
 } 
else if (60 <= studentScore && studentScore < 70) {
    studentResult = "Хангалттай";

} 
else if (70 <= studentScore && studentScore < 80) {
    studentResult = "Дунд";

} 
else if (80 <= studentScore && studentScore < 90) {
    studentResult = "Сайн";

} 
else if (90 <= studentScore && studentScore <= 100) {
    studentResult = "Маш Сайн";

} else {
    studentResult = "Буруу утга орсон байна.";
}

alert("Нэр: " + studentName + "\nДүн: " + studentScore + "\nҮнэлгээ: " + studentResult);


console.log(`Нэр: ${studentName} \nДүн: ${studentScore} \nҮнэлгээ: ${studentResult}`);