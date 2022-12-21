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
randomNumberGenerate();
let score = 20;
let highRecord = 0;

checkBtn.addEventListener('click', checkInput)
resetBtn.addEventListener('click', reset)

function checkInput() {
    if (!Number.isInteger(Number(input.value))) {
        message.textContent = 'Тоо оруулна уу.'
    } else if (input.value == '') {
        message.textContent = 'Хоосон байна.'
    } else {
        if (score > 0) {
            if (Number(input.value) == randomNumber) {
                message.textContent = 'Зөв таалаа.'
                document.body.style.backgroundColor = "#60b347";
                disableUserInput();
                if(score > Number(highRecord)) {
                    highRecord = score;
                    document.querySelector('.highscore').textContent = score;
                }
            } else if (Number(input.value) > randomNumber) {
                score--;
                message.textContent = 'Их байна.'
            } else if (Number(input.value) < randomNumber) {
                score--;
                message.textContent = 'Бага байна.'
            }
            scoreBoard.textContent = score;

        } else {
            scoreBoard.textContent = score;
            message.textContent = 'Та хожигдлоо.'
            document.body.style.backgroundColor = "red";
            disableUserInput()
        }
    }
}

function disableUserInput() {
    input.disabled = true;
    checkBtn.disabled = true;
    checkBtn.style.display = 'none';
}

function enableUserInput() {
    input.disabled = false;
    checkBtn.disabled = false;
    checkBtn.style.display = 'inline-block';
}

function randomNumberGenerate() {
    randomNumber = Math.floor((Math.random() * 20) + 1)
    console.log('New Random = ' + randomNumber);
}

function reset() {
    document.body.style.backgroundColor = "black";
    score = 20;
    scoreBoard.textContent = score;
    input.value = '';
    randomNumberGenerate()
    enableUserInput();
}








