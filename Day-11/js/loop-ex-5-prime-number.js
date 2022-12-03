// **************************************  Prime number - Анхны тоо ***************************************************************
// Isn't it prime number?
/*
n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана.
Example1: input: 1, output: true
Example1: input: 6, output: false

Example1: input: 11, output: true
https://mn.wikipedia.org/wiki/%D0%90%D0%BD%D1%85%D0%BD%D1%8B_%D1%82%D0%BE%D0%BE
*/

let number = Number(prompt("Let's check if number is PRIME NUMBER. \nInsert number between 1-100"));
console.log("Let's check if this number : " + number);
i = 2;
isPrimeNumber = true;

while (i < number) {
    // console.log(number + "/" + i + " ======> remainder = " + number%i)

    if(number % i == 0) {
        isPrimeNumber = false;
        // console.log("Setting the value to false");
    }

    i++;
}


if(isPrimeNumber) {
    console.log("Prime number");
} 
else {
    console.log("Not a prime number");
}