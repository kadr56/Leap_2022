
/*
1. Ангийнхаа сурагчидын дата үүсгэ. (name: "Гончигсумлай", birthOfYear: 1999, hobby: "морь", single: false)
2. Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх.
3. Сурагчийн насыг бодож олох function бичэх.
4. Сурагчидын ганц бие хүмүүсийг буцаах function бичэх.
*/

let students = [{
    name: "Dorj",
    birthOfYear: 1999,
    hobby: "horse",
    single: false 
}, 
{
    name: "Bat",
    birthOfYear: 1990,
    hobby: "car",
    single: true 
},
{
    name: "Erdene",
    birthOfYear: 2015,
    hobby: "anime",
    single: true 
}
]
console.log("My student object:");
console.log(students);

function findOlderStudents(array) {
    let olderStudentNames = [];
    for(let i = 0; i < array.length; i++) {
        let age = 2022 - array[i].birthOfYear;
        if(age > 20) {
            olderStudentNames.push(array[i].name);
        }
    }
    return olderStudentNames;
}

console.log("2. Students older than 20 years old = " + findOlderStudents(students).join(' | '));





function findAge (array) {
    let age = [];
    for(let i = 0; i < array.length; i++) {
        age.push(2022 - array[i].birthOfYear);
    }
    return age;
}

console.log("3. Students ages = " + findAge(students).join(" | "));


function findSingle (array) {
    let singles = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].single == true) {
            singles.push(array[i].name);
        }
    }
    return singles;
}

console.log("4. Single students = " + findSingle(students).join(" | "));