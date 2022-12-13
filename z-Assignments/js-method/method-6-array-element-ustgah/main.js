/*

array - аас тодорхой элементийг устгах функц бичнэ үү
example: console.log(removeArrayElement([2, 1, 6, 5, 8], 6))
[2, 1, 5, 8]

*/


let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("My Array = " + myArray);   

let del = prompt(`My Array = ${myArray} \nInsert element from Array`);

removeArrayElement(myArray, del);

function removeArrayElement(arr, x) {
   let deleteIndex = arr.indexOf(x);
   if(deleteIndex > -1){   // only delete this value if it exists in the array
      console.log("DELETED ITEM = " + arr.splice(deleteIndex, 1));
   } else {
      console.log(x + " element is not found");
   } 

   console.log("My array after delete = " + myArray);   
}


