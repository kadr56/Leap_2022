console.log('CLick event');

let myButton = document.getElementById('myButton');
console.log(myButton);

let color = 'white';
function changeBackgroundColor () {
    if(color == 'white'){
        color = 'green';
        myButton.style = `background-color: ${color}`
        console.log('inside green');
    } else {
        color = 'white';
        myButton.style = `background-color: ${color}`
        console.log('inside white')
    }
}


myButton.addEventListener("click", changeBackgroundColor);



// let arrowFunc = () => {

// }

// myButton.addEventListener('click', () => {
//     myButton.style = 'background-color: red'
// })


// // document.getElementById("register").disabled = true;

// let registerButton = document.querySelector('#register');
// console.log(registerButton);
// registerButton.disabled = true;




