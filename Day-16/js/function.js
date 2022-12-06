console.log("My function");

// function declaration - функцыг тодорхойлох

function f() {
    console.log('Hello function');
}

// function call
f();


/*
f(x) = x * x => x is parameter буюу функцын гаднаас авдаг хувсагч
*/

function f1 (x) {
    console.log( x * x);
}

f1(5);



// 2. f(x,y) = (x+y)`2
f2(4, 4);

function f2(x, y) {
   console.log(Math.pow((x + y), 2));
}



// 3. E = mc2
function e(m) {
    let c = 300_000;
    console.log(m * Math.pow(c,2))
}

e(75);




// 4. f(x) = x!
function factorial(x) {
    let sum = 1;
    for (let i = 1; i <= x; i++) {
        sum = sum * i;
    }
    console.log(sum);
} 

factorial(5);


// 5. f(x, y) = cos(x) - sin(x);
function f5 (x,y) {
    console.log(Math.cos(x) - Math.sin(y));
}

f5 (5,5);


// 6. f(x) = x3 + x2 + 5x + 12
 function f6(x) {
    console.log(Math.pow(x,3) + Math.pow(x,2) + 5*x + 12);
 }

 f6(4);


 // 7. f(x) = x`2 
 function f7 (x) {
    console.log(Math.pow(x,2));
 }
 f7(4);

 // 8. fib(x) 

 

 // 9. f(x) = sqr(x)
 function f9 (x) {
    console.log(Math.sqrt(x));
 }
 f9(9);



