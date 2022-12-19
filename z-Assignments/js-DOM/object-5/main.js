/*
Random color generator
*/



let btn = document.getElementById('submit');
btn.addEventListener('click', changeColor) 

function changeColor() {
    let randomNumber1 = Math.floor((Math.random() * 255))
    let randomNumber2 = Math.floor((Math.random() * 255))
    let randomNumber3 = Math.floor((Math.random() * 255)) 
    color = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
    
    document.getElementById('body').style.backgroundColor = color;
    
}

