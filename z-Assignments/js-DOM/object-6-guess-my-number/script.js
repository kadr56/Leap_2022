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
let checkBtn = document.querySelector('.check')
let resetBtn = document.querySelector('.again')
let message = document.querySelector('.message')
let scoreBoard = document.querySelector('.score');
let randomNumber = Math.floor((Math.random() * 20) + 1 )
let score = 20;
console.log('random number = ' + randomNumber);

checkBtn.addEventListener('click', checkInput)
resetBtn.addEventListener('click', reset)

function checkInput() {
    // console.log(input.value);
    console.log(checkBtn);
    if(!Number.isInteger(Number(input.value))) {
        // console.log("it is not integer");
        message.textContent = 'Тоо оруулна уу.'
    } else {
        if(score > 0) {
            console.log("it is integer")
        if(Number(input.value) == randomNumber) {
            // console.log(input.value + ' == ' + randomNumber + "??????")
            message.textContent = 'Зөв таалаа.'
            scoreBoard.textContent = score;
            document.body.style.backgroundColor = "#60b347";
        } 
        if (Number(input.value) > randomNumber) {
            score--;
            scoreBoard.textContent = score;
            message.textContent = 'Их байна.'
            console.log('Их байна');
        } 
        if (Number(input.value) < randomNumber) {
            score--;
            scoreBoard.textContent = score;
            message.textContent = 'Бага байна.'
            console.log('Бага байна');
        }
        } else {
            scoreBoard.textContent = score;
            message.textContent = 'Та хожигдлоо.'
            document.body.style.backgroundColor = "red";
            input.disabled = true;
            checkBtn.disabled = true;
                // input.parentElement.children[0].disabled = true;


        }
    }
}


function reset() {
    document.body.style.backgroundColor = "black";
    score = 20;
    scoreBoard.textContent = score;
    // input.parentElement.children[0].disabled = true;
    
    input.value = '';
    randomNumber = Math.floor((Math.random() * 20) + 1 )
    console.log('Random = ' + randomNumber);
    input.disabled = false;
    checkBtn.disabled = false;
}








