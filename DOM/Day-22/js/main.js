

function add (x, y) {
    return x + y;
}


//print function
function print(f) {
    let x = 2, y = 3;
    console.log(f(x, y));
}


//callback function
print(add);



let x = () => {
    console.log('Arrow function')
}

setTimeout(x, 10000);
// setTimeout(()=> { console.log('Arrow function');}, 3000)


function startInterval() {
    let now = new Date();
    let myTImer = document.getElementById("myTimer");
    myTImer.innerHTML = now;
} 

// setInterval is js function
// startInterval is callback Function
setInterval(startInterval, 1000);