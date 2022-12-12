let myButton = document.querySelector('#myBtn');

myButton.addEventListener('click',changeBackgroundColor);

function changeBackgroundColor() { 
    document.getElementById('par1').style = 'background-color:red';
    document.getElementById('par2').style = 'background-color:yellow';
}