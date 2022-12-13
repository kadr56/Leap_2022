/*
1. Input - ээр авсан утгыг palindromic гэдэгийг шалгадаг function бич. (loop хэрэглэхгүй method хэрэглээрэй)
*/

let number = prompt("Insert number");

palindromicChecker(number);

function palindromicChecker(number) {
   let split = number.split("");
   let reverse = split.reverse(); 
   let join = reverse.join("");
   
   if(number === join) {
      console.log(number + " is palindromic number");
   } else {
      console.log(number + " is NOT palindromic number");
   }
}
