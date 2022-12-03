// **************************************  Тооны нийлбэр олох бодлого ***************************************************************
/*
1. Prompt - оор 1 тоо авна.
2. 1 ээс promp оор авсан тоо хүртэлх нийлбэрийг ол.
example: input = 10 
1+2+3+4+5+6+7+8+9+10 = 55;
*/
let maxNum = Number(prompt("Нийлбэр олох бодлого.  \n Дээд тоог оруулна уу."));
let count = 1;
let sum = 0;

while (count <= maxNum) {
    
    sum = sum + count;
    console.log("sum = " + sum);
    count = count + 1;
}

console.log("SUM OF DIGIT = " + sum);