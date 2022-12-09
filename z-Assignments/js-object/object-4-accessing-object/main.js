
/*
1. Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 
2. Сурагчдын насны дунджийг олох функц бичих 
3. Сурагчидад овог нэмж оруулах 
4. Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  
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
    console.log("male = " + male);
    console.log("female Students = " + female);

    genderCount = {maleStudents: male, femaleStudents: female};
    return genderCount; 
}
console.log("\t#1-Gender count");
console.log(genderCount(students));