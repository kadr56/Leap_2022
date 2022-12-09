
/*
1. Нохой нэртэй хоосон объект үүсгэ
2. Нохойн объектыг консол дээр хэвлэ
3. Нохойны объектын үүлдэр, нэр, өнгө, нас, хайр татсан шинж чанарыг нэмнэ үү. 
4. Нохойн объектоос үүлдэр, нэр, хөл, өнгө, нас, хайр татсан шинж чанарын value - г аваарай
*/

// 1
let dog = {

};

//2 
console.log(dog)


//3
dog.breed = "Retriver";
dog.name = "Dingo";
dog.color = "Black";
dog.age = "3";
dog.character = "likes to play";

//4 
console.log(Object.values(dog));
// console.log(dog.name);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.character);