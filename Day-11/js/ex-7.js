//Exercise - 7.1
console.log("====================== Exercise 7.1 ================");

const number = Number(prompt("1-5 ийн хооронд тоо оруулна уу."));
console.log("Number = " + number);

switch (number){
    case 1: 
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    case 4:
        console.log("D");
        break;
    case 5:
        console.log("F");
        break;
    default:
        console.log("Error. Inserted wrong number");

}






//Exercise - 7.2
console.log("====================== Exercise 7.2 ================");

const month = Number(prompt("Сарын тоо оруулна уу. /1-12 хооронд байх/"));
console.log(month + "-р сар");
let dayNumber = 0;

if (1 > month || month > 12) {
    console.error("Алдаа. Оруулсан сарын тоо 1-12 хооронд биш байна.");
}
else if (month == 2) {
    dayNumber = 28;
} 
else if (month == 4 || month == 6 || month == 9 || month == 11 ) {
    dayNumber = 30;
}
else {
    dayNumber = 31;
}

console.log("Өдрийн тоо = " + dayNumber);







//Exercise - 7.3
console.log("====================== Exercise 7.3 ================");


let num = Number(prompt ("Тоо оруулна уу. :"));

if ((num%3==0) && (num%7==0)) {
    console.log(num  + " тоо нь 3 болон 7 -д хуваагдана");
}
else {
    if (num%3 == 0) {
        console.log(num  + "-ийн тоо нь 3 -д хуваагдана");
    } else if (num%7==0) {
        console.log(num  + "-ийн тоо нь 7 -д хуваагдана");
    }  
    else {
        console.log(num + "-ийн тоо нь 3 болон 7 -д хуваагдахгүй")
    }    
}





//Exercise - 7.4
console.log("====================== Exercise 7.4 ================");


let num2 = Number(prompt ("Дасгал 4 \nТоо оруулна уу. :"));

if (num2 > 0) {
    console.log(num  + " тоо нь эерэг");
}
else if (num2 < 0) {
    console.log(num  + " тоо нь эерэг");
}
else {
    console.log(num  + " тоо нь тэгтэй тэнцүү байна. Сөрөг ч биш, эерэг ч биш");
}






// Exercise - 7.5
console.log("====================== Exercise 7.5 ================");
let weight = prompt ("Жингээ оруулна уу");
let height = prompt ("Өндрөө оруулна уу. /метрээр/ /1.73 , 1.65 гэх мэт/");
let bmi = weight/(height*height);
console.log("BMI = " + bmi);

if (bmi < 18.5) {
    console.log("Жингийн дутагдалтай")
}
else if (18.5 <= bmi && bmi <= 24.9) {
    console.log("Эрүүл")
}
else if (25 <= bmi && bmi <= 29.9) {
    console.log("Илүүдэл жинтэй")
}
else if (30 <= bmi && bmi <= 34.9) {
    console.log("Хэт таргаллалттай (Class I)")
}
else if (35 <= bmi && bmi <= 39.9) {
    console.log("Хэт таргаллалттай (Class II)")
}
else {
    console.log("Хэт таргаллалттай (Class III)")
}

