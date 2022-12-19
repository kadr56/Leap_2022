/*
Дэлгүүрээс тухайн нэг барааны өнгийг сонгоход тухайн барааны сонгосон өнгийн (color picker) 
барааг харуулах, Жишээ нь Цамц байсан гэж үзвэл улаан өнгө сонговол улаан цамц харуулах. 
(эхлээд default өнгөтэй зураг нь харагдах) Загвар дизайныг өөрийн хүссэнээр хийнэ үү.

click үйлдэл ашиглах
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

