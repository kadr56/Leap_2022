/*
      Улсын жагсаалт харуулах
      Жагсаалтаас хайх - form input
      Улсуудыг тивээр сонгох - form select
      Улсыг хүн амын тоогоор эрэмбэлэх
      Улсыг газар нутгын хэмжээгээр эрэмбэлэх
      
      HTML, JAVASCRIPT, CSS ашиглан хийх, загварыг хүссэнээрээ хийх

      https://restcountries.com/
*/
let data = [];


async function fetchData() {
      let fetchedData = await fetch ('https://restcountries.com/v3.1/all');
      let fetchedJSON = await fetchedData.json();
      console.log(fetchedJSON);
      data = fetchedJSON;
      console.log(data);


      const container = document.querySelector('#outer-container');

      container.innerHTML = '';
      data.map((element, index) => {
          container.innerHTML += getCountries(element, index)
      })
}

fetchData();

function getCountries(data, index) {

}

