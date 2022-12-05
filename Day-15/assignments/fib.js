let f1 = 0;
let f2 = 1;
let f3 = 0;
// let n = 0;

max = prompt("insert max value");


while (f1 <= max) {
    console.log(f1);
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
}

