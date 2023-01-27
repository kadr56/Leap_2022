/*
    1. минут : секунд : дойл гэж харагддаг дижитал цаг хийнэ үү.
*/


let date = document.getElementById('date');
let clock = document.getElementById('clock');


function getTime() {

    let dateObj = new Date();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();
    let millisecond = dateObj.getMilliseconds();


    date.innerHTML = dateObj.toLocaleString('en-US', {
        dateStyle: 'full',
      }),
    clock.innerHTML = `${hour}:${minute}:${second}: ${millisecond}`;

    
}

window.setInterval(getTime, 100);
