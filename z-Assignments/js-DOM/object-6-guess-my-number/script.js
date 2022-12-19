/*
1. script.js file үүсгэн тоглоомыг гүйцээнэ үү.
2. input дээр тооноос бусад утга оруулах үэд "тоо оруулна уу", тоо их байх үзд 
   "Их байна" бага үед "Бага байна" гэж "Тааж эхлээрэй" хэсэгт харуулдаг болгоно уу.
4. Зөв таасан үед "Зөв таалаа" гэж гарж ирэн background color '#60b347' өнгөтэй болдог. 
3. Буруу таасан үед оноо 1 ээр хасагдана .
4. Оноо 0 болсон үед "Та хожигдлоо" гэж харуулдаг.
5. Шинээр эхлэх дээр дарвал дээд амжилт хэвээр үлдэж оноо ахиж 20 оос эхлэдэг болгоно уу.
*/

let input = document.querySelector('.guess');
let checkBtn = document.querySelector('.btn-check')


checkBtn.addEventListener('click', checkInput)

function checkInput() {
    console.log(input.value);
    console.log(checkBtn);
    if(!Number.isInteger(Number(input.value))) {
        console.log("it is not integer");
    } else {
        console.log("it is integer")
    }
}








