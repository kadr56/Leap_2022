// // **************************************  JS loop exercise - 9 ************************************** 
// // **************************************  Convert String ************************************** 
/*
example 1: input = "Hello World", output = "hELLO wORLD"
example 2: input = "This Is STRING!", output = "tHIS iS string!"
*/


let input = prompt("Хөрвүүлэх текстээ оруулна уу.")
let convertedInput = "";

for (let i = 0; i < input.length; i++) {
    if(input.charAt(i).toUpperCase() == input.charAt(i)){
        convertedInput += input.charAt(i).toLowerCase();
    }
    else {
        convertedInput += input.charAt(i).toUpperCase();
    }
}

console.log("Хөрвүүлэх текс : " + input);
console.log("Үр дүн         : " + convertedInput);