let myArray = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(myArray.toString());
for(let i = 0; i < myArray.length; i++) {
    if(isEven(myArray[i])) {
        myArray[i] = myArray [i] + 4;
    }
    else {
        myArray[i] = myArray [i] - 5;
    }
}

console.log(myArray.toString());
// console.table(myArray);



function isEven (x) {
    if (x % 2 == 0) {
        // console.log("It is a even number")
        return true;
    } else {
        // console.log('It is odd number');
        return false;
    }
}

// isEven(5);
// isEven(myArray[0])



// addTwoNumbers (x, y) = x + y

function addTwoNumbers (x, y) {
    return x + y;
}

console.log(addTwoNumbers(4, 5)) 


function multiplyTwoNumber(x, y) {
    return x * y;
}
console.log(multiplyTwoNumber(4, 5));


function multiplyThreeNumber(x, y, z) {
    const m =  x * y * z;
    return m;
}

console.log (multiplyThreeNumber(5, 5, 5));


// console.log(addTwoNumbers)