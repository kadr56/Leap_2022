
/*
1. Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 
2. Сурагчдын насны дунджийг олох функц бичих 
3. Сурагчидад овог нэмж оруулах 
4. Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  
*/

let students=[
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
        {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
        {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]

function genderCount (array) {
    genderCount = {};
    let male = 0;
    let female = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i].gender== 'male') {
            male++;
        } else {
            female++;
        }
    }
    console.log("Fale Students = " + male);
    console.log("Female Students = " + female);

    genderCount = {maleStudents: male, femaleStudents: female};
    return genderCount; 
}
console.log("1. Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих ");
console.log(genderCount(students));


//2. Сурагчдын насны дунджийг олох функц бичих 
console.log("\n2. Сурагчдын насны дунджийг олох функц бичих");
studentAverage(students);

function studentAverage(array) {
    let average = 0;
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i].age;
    }
    console.log("Average age = " + sum/array.length);
}



//3. Сурагчидад овог нэмж оруулах 
console.log("\n3. Сурагчидад овог нэмж оруулах ");

function addLastName(array) {
    for(let i = 0; i < array.length; i++) {
        array[i].lastname = prompt (`${array[i].name} сурагчийн овог оруулна уу: `);
    }
    return array;
}


// 4. Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  
console.log("\n4. Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  ");
findSameAgedStudents(students);


function findSameAgedStudents(array) {
    let sameAgedStudent = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i].age == array[j].age) {
                a = array[i];
                b = array[j];
                console.log(a.name + ' нас = ' + b.name + ' нас');
            }
        }
        if (!sameAgedStudent.includes(a) ){
            sameAgedStudent.push(a)
        }
        if (!sameAgedStudent.includes(b) ){
            sameAgedStudent.push(b)
        }
    }
    console.log(sameAgedStudent);
}


