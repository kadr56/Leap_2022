// // **************************************  JS Methods  ************************************** 
// // **************************************  Shopping card ************************************** 
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    add 'Meat' in the beginning of your shopping cart if it has not been already added
    add Sugar at the end of you shopping cart if it has not been already added
    remove 'Honey' if you are allergic to honey
    modify Tea to 'Green Tea'
*/


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

if(!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

if(!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);

let honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex,1);


let teaIndex = shoppingCart.indexOf("Tea");
console.log(shoppingCart.indexOf("Tea"));
shoppingCart[teaIndex] = 'Green tea';

console.log("Final Shopping list : " + shoppingCart);



