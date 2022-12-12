/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    1. add 'Meat' in the beginning of your shopping cart if it has not been already added
    2. add Sugar at the end of you shopping cart if it has not been already added
    3. remove 'Honey' if you are allergic to honey
    4. modify Tea to 'Green Tea'
*/


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

//1. add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log("\n1. add 'Meat' in the beginning of your shopping cart if it has not been already added")
if(!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

//2. add Sugar at the end of you shopping cart if it has not been already added
console.log("\n2. add Sugar at the end of you shopping cart if it has not been already added")
if(!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);

//3. remove 'Honey' if you are allergic to honey
console.log("\n3. remove 'Honey' if you are allergic to honey")
let honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex,1);
console.log(shoppingCart);

//4. modify Tea to 'Green Tea'
console.log("\n4. modify Tea to 'Green Tea'")
let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = 'Green tea';

console.log("Final Shopping list : " + shoppingCart);



