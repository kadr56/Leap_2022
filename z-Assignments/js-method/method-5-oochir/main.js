/*
1. Банканд хүмүүс оочирлож байв. Хаах цаг дөхиж оочирт байгаа эхний 10 хүнийг аваад хаахаар болов. 
   Гэтэл хаанаас ч юм 2 эгч (эгч1, эгч2) Гончигсумлай - д оочир захьсан байсан гэж дайрж орж ирээд зогсчихлоо. 
2. Банкнаас амжиж үйлчилгээ авах хүмүүсийн array - ийг 10 хүнтэй array болгоорой.
   queueLine =["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай", 
   "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар" ]
*/

let queueLine =["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар" ]

console.log(queueLine);

queueLine.splice(8, 0, "эгч1", "эгч2")
console.log(queueLine);