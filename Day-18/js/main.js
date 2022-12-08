console.log('Array methods');

//Shift

// arr1 = [1, 2, 3] => Shift (arr1) =[2, 3]

let shiftArr = (arr) => {
    let tempArray = []
    for(let i = 0; i < arr.length; i++) {
        if(i != 0) {
            tempArray.push(arr[i])
        }
    }
    return tempArray;
}



let arr1 = [1, 2, 3, 5, 6]

console.log(shiftArr(arr1));  // [2, 3, 5, 6]
console.log('array shift method');

const arr = [1, 2, 3];
const firstElement = arr.shift();
console.log(arr) // [2, 3]
console.log(firstElement)



// Unshift
console.log("unshift Array algorithm") 
let unshiftArray = function (arr, number) {
    let tempArray = [];
    tempArray.push(number);

    for (let i = 0; i < arr.length; i++) {
        tempArray.push(arr[i]);
    }

    return tempArray;
}

let arr2 = [5, 6, 7];
console.log(unshiftArray(arr2, 1)); // [1, 5, 6, 7] 



console.log('Array unshift Method');
const array1 = [1, 2, 3]
console.log(array1.unshift(4)) //5
console.log(array1)








// Sorting algorithm
function sortingAlgorithm(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i;
        for(let j = i+1; j < arr.length - 1; j++) {
            if(arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }
    return arr;

}


let sortArray = [1, 2, 8, 7, -1, 10];
console.log(sortingAlgorithm(sortArray));  // [-1, 1, 2, 7, 8, 10]

console.log("Array sorting");
const names = ['Marlaa', 'Javkhaa', 'Javkhlan', 'Dorj'];
names.sort();
console.log(names)





// Reverse
function arrayReverse (arr) {
    let tempArray = [];
    for (let i = arr.length - 1 ; i >=0; i--) {
        tempArray.push(arr[i])
    }
    return tempArray;
}

let arrReverse = [4, 5, 1, 8];
console.log(arrayReverse(arrReverse)); // [8, 1, 5, 4]



const numbers = ['one', 'two', 'three'];
console.log("array1:", numbers);
const reversed = numbers.reverse();
console.log("reersed", reversed);







// Slice

// const nameSlice = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];
// console.log(nameSlice);
// console.log(nameSlice.slice(2));


function nameSlice (arr, index) {
    for(let i = 0; i < index; i++){
        arr.shift();
    }
    return arr;
}

function nameSlice2 (arr, index) {
    let tempArray = [];
    for(let i = index; i < arr.length; i++){
            tempArray.push(arr[i]);
    }
    return tempArray;
}

//console.log(nameSlice([1,2,3,4,5], 3)) // // [3, 4, 5]
console.log(nameSlice2([1,2,3,4,5], 3)) // // [3, 4, 5]




console.log('SPLICE METHOD');
const spliceNames = ['Davaa', 'Lkhagva', 'Purev', 'Byamba'];
spliceNames.splice(1, 0, 'Myagmar');
// 1 дэх индкс дээр шинээр утга нэмэх үйлдэл
console.log(spliceNames);

spliceNames.splice(4, 0, "baasan")
console.log(spliceNames);

spliceNames.splice(6, 0, "Nyam")
console.log(spliceNames);




