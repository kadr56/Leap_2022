/*
let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] 
    Sort the array using  method
    Reverse the array using  method
    Remove the first IT company from the array
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies
*/

let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] ;
console.log(array);
console.log("\n\t\tSort the array: ");
array.sort();
console.log(array);



console.log("\n\n\t\tReverse the array: ");
array.reverse();
console.log(array);



console.log("\n\n\t\tRemove the first: ");
array.shift();
console.log(array);



console.log("\n\n\t\tRemove the middle: (if length is even, remove the midle 2. If length is odd, remove the middle 1.) ");
let removeIndex = array.length / 2;
if(array.length % 2 == 0) {
    //if lengt is even, remove the middle 2 
    array.splice(removeIndex - 1 , 2);
} else {
    array.splice(removeIndex, 1);
}
console.log(array);


console.log("\n\n\t\tRemove the last: ");
array.pop();
console.log(array);


console.log("\n\n\t\tRemove all: ");
array.splice( 0, array.length);
console.log(array);

