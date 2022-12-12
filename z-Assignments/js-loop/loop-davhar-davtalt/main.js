/*
1. Давхар давталт 1
Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
Input: 5
Output:
 - 1 
 - 1 2 
 - 1 2 3 
 - 1 2 3 4 
 - 1 2 3 4 5

2. Давхар давталт 2
Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
Input: 5
Output:
- 5 4 3 2 1 
- 5 4 3 2 
- 5 4 3 
- 5 4 
- 5
*/

let number = Number(prompt("Input number"));
let sum = "";

for(let i = 1; i <= number; i++) {
    for(let j = 1; j <= i; j++ ) {
        sum += j + " ";
    }
    sum += "\n";
}
console.log(sum + "\n\n");



let pattern = "";
for (let i = 1; i <= number; i++) {
   for (let j = number; j >= i; j--) {
      pattern += j + ' ';
   }
   pattern += "\n";
}
console.log(pattern);


