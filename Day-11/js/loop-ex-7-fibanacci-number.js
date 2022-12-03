// **************************************  Fibanocci number ***************************************************************
/*
prompt оор n тоо орж ирэхэд тухайн n хүртлэх ширхэг Fibonacci дарааллын тоог хэвлэнэ үү.
Example 1: input (5) -> 1 1 2 3 5 
https://en.wikipedia.org/wiki/Fibonacci_number
*/

let maxNumber = Number(prompt("Enter number"));
firstNumber = 0, 
secondNumber = 1;

console.log("Fibonacci Series till " + maxNumber + ":");

while (firstNumber <= maxNumber) {
  console.log(firstNumber);
  let nextNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextNumber;
}

