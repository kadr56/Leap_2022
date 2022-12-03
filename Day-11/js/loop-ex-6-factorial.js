// **************************************  Factorial ***************************************************************
/*
Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна
n!=1⋅2⋅3⋅⋯⋅n

5! = 120 / 1*2*3*4*5/

Бодлого : 

prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.
*/

const maxNumber = Number(prompt("Factorial exercise\nEnter number"));
let i = 1;
let sum = 1;
//let text = "";
while (i <= maxNumber) {
    sum = sum * i;
    //text = text + "*" + i;
    i++;
    // console.log("sum = " + sum);
}

//console.log(text);
console.log(maxNumber + "'s factorial is = " + sum);