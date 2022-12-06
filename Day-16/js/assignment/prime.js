console.log("Prime number algorithm");


let input = Number(prompt("Give me numver"));
let temp = 0;

for(let i = 2; i<Math.round(input/2); i++) {
    if (input % i == 0) {
        temp ++;
    }
}

if (temp == 0) {
    console.log("Its prime number");
} else {
    console.log('its not a prime number');
}