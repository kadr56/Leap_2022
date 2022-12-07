function pow (number, exponent) {
    let multiply = 1;
    for(let i = 1; i <= exponent; i++) {
        multiply = multiply * number;
    }
    return multiply
}

let result = pow (2, 3);


console.log(result);
console.log(pow (2, 4));
console.log(pow (5, 2));

console.log(Math.pow(4, 3));
console.log(pow(4, 3));


/*
1.  Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false 
буцаадаг функц бичнэ үү. Функцын нэр  нь findMin
*/

function findMin (x, y) {
    if(x < y) {
        console.log('Min = ' + x);
        return true;
    }
    else {
        console.log('Min = ' + y);
        return false;
    }
}

let min = findMin(2, 4);
console.log(min);


/*
2.  Өгөгдсөн array-ны элементүүлэг хэвлэдэг функц бичнэ үү. Функцын нэр нь printArray
*/

function printArray(arr) {
    console.log('I will print the array now:');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > 1) {
            console.log('inner array found: ');
            for(let j = 0; j < arr[i].length; j++) {
                console.log("\t" + arr[i][j])                
            }
        } else {
            console.log(arr[i]);
        }
    }
}

myArray = [1, 3, [1, 2, 3], 5, 6, 7, [10, 11, 12]];

printArray(myArray);




/* 
3. Өгөгдсөн array-наас хамгийн их утгыг нь олоод буцаадаг функц бичнэ үү. 
Функцын нэр нь findArrayMax. Функцээ expression хэлбэрээр бичнэ үү.

example ==> 6
*/

console.log('\n\t\t****** Exercise-3 *******');

function findArrayMax (x) {
    let max = -999;
    for(let i = 0; i < x.length; i++) {
        if(x[i] >= max) {
            max = x[i];
        }
    }
    return max
}

myArray = [1, 3, 77, 5, 6, 7, 32, 22];

console.log("Max = " + findArrayMax(myArray));


/* 
4. Өгөгдсөн тоон array-ны утгуудыг бүгдийг нь нэмээд дундажыг нь олоод буцаадаг функц бичнэ үү. 
Функцын нэр нь findArrayAverage. Функцээ arrow expression function хэлбэрээр бичнэ үү.
*/

let findArrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log('Average number = ' + findArrayAverage(myArray));




function evaluateScore(points) {
    if(points < 60) {
        return "very bad";
    } else if (points >= 60 && points < 70) {
        return "satisfied";
    } else if (points >= 70 && points < 80) {
        return "Average";
    } else if (points >= 80 && points < 90) {
        return "Good";
    } else if (points >= 90 && points <= 100) {
        return "Very Good";
    } else {
        return "Please give me number between 1-100";
    }
} 

let inputPoint = Number (prompt("Give me student point"));
let inputStudentname = prompt("Give me student name");
let pointResult = evaluateScore(inputPoint);

console.log(`${inputStudentname} - ${inputPoint} - ${pointResult}`);