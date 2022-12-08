console.log('Lesson object');


let rabbit1 = {
    color: 'White',
    rName: 'Chandaga',
    gender: 'Male',
    age: 2,

    jump: function() {
        console.log('Sorry i broke my leg, i cant jump');
    },
    sayMyName: function(myName) {
        console.log(`Your name is ${myName}`)
    }

}

console.log(rabbit1);
console.log(rabbit1.color);
rabbit1.color = 'Dirty';
console.log(rabbit1);
rabbit1.jump();
rabbit1.sayMyName('Munkhbaatar')


console.log('******************************')
console.log('Here is the rabbit 2 property')
console.log('******************************')

let rabbit2 = {
    color: 'Black',
    rName: 'Bumbar',
    gender: 'Female',
    age: 4,

    jump: function() {
        console.log('I can jump');
    }
}
console.log(rabbit2);




// let car = {
//     manufacturer: 'Toyota',
//     year: 2012,

// }