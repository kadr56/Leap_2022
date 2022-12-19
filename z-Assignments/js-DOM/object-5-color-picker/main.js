/*
      Дэлгүүрээс тухайн нэг барааны өнгийг сонгоход тухайн барааны сонгосон өнгийн (color picker) 
      барааг харуулах, Жишээ нь Цамц байсан гэж үзвэл улаан өнгө сонговол улаан цамц харуулах. 
      (эхлээд default өнгөтэй зураг нь харагдах) Загвар дизайныг өөрийн хүссэнээр хийнэ үү.
      
      click үйлдэл ашиглах
*/


let chosenColor = document.getElementById('shirt')

chosenColor.addEventListener('change', showImage);

function showImage() {
      let index = chosenColor.selectedIndex;
      let img = document.getElementById('img')
      if(index == 0) {
            img.src = `./img/default.jpg`
      } else if (index == 1) {
            img.src = `./img/blue.jpg`
      } else if (index == 2) {
            img.src = `./img/yellow.jpg`
      } else if (index == 3) {
            img.src = `./img/white.jpg`
      } else if (index == 4) {
            img.src = `./img/black.jpg`
      } else if (index == 5) {
            img.src = `./img/green.jpg`
      } else if (index == 6) {
            img.src = `./img/gray.jpg`
      }

}



