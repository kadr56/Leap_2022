console.log('BOM JS');

// window.alert('Hello')
// console.log(window)


// window.open('https://www.google.com', 'Hello')


// let result = window.confirm('Та устгахдаа итгэлтэй байна уу');

// let result = confirm('Та устгахдаа итгэлтэй байна уу');
// let message = result ? 'Та ОК товчийг дарлаа' : 'Та cancel товчийг дарсан';

// alert(message);
// // console.log(result);


let alertButton = document.getElementById('alertButton');
let cancelButton = document.getElementById('cancelButton');


let timeoutID;
// function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
// }

// function clearAlert() {
    clearTimeout(timeoutID);
// }

// alertButton.addEventListener('click', showAlert);
// cancelButton.addEventListener('click', clearAlert);

alertButton.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
})

cancelButton.addEventListener('click', () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);
    console.log(timeoutID);
})


setTimeout(() => {
    console.log('Timeout is running');
}, 5000)

let counter = 0;

// window.setInterval(startInterval, 5000);

function startInterval(){
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now;
    myTimer.innerHTML = now.getHours() + " : " + now.getMinutes() + " : "+ now.getSeconds() + " : " + now.getMilliseconds();
    // colorChange();    
}
let startMyTimer = document.getElementById('startTimer');
startMyTimer.addEventListener('click', runTimerInterval)


function runTimerInterval () {
    window.setInterval(startInterval, 5000);
}


// function colorChange() {
//     for(let i = 0; i < 255; i++) {
//         // document.getElementById('body1').style = `background-color: rgb(${i},${i},${i})`
//         rgbColor = `${i},${i},${i}`;
//         console.log(rgbColor)
//         console.log(`background-color: rgb(${rgbColor})`);
//         document.getElementById('body1').style = `background-color : rgb(${rgbColor})`;
//     }
// }
