/*
      Амьтадын дата үүсгэнэ үү. 
      let animals = [{type: "dog", sound: "woof"}, {type: "cow",sound: "moo"},{type: "cat",sound: "meow"}] гэх мэт.
      1. Амьтан яаж дугардаг function бичнэ үү. (What does the fox say? "Ring-ding-ding-ding-dingeringeding!" гэх мэт)
      
*/

let animals = [
    {
        type: "dog", 
        sound: "woof"
    }, 
    {
        type: "cow",
        sound: "moo"
    },
    {
        type: "cat",
        sound: "meow"
    }
]

function howDoesTheFoxSay(array, animalType) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].type == animalType) {
            console.log(`${array[i].sound}-${array[i].sound}-${array[i].sound}`);        
        }

    }
}

console.log('Dog barking')
howDoesTheFoxSay(animals, 'dog'); // woof-woof-woof

console.log('Cow moowing')
howDoesTheFoxSay(animals, 'cow'); // moo-moo-moo

console.log('Animals meowiing')
howDoesTheFoxSay(animals, 'cat'); // meow-meow-meow
