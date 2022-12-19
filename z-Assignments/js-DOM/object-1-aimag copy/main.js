

console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);

document.getElementById('aimag-315').innerHTML = 'Bavaria';

document.getElementById('aimagNames').style = 'font-size: 40px; color: brown; margin:10px, padding: 10px; border: 1px solid gray;';
document.getElementById('aimag-315').style = 'font-size: 30px; color: blue; margin: 20px';

// document.getElementsByTagName('span')[0].innerHTML = "SPARTAN";
document.getElementsByClassName('dummy')[0].innerHTML = "SPARTAN";


for (let i = 0; i < document.getElementsByClassName('khangai').length; i++) {
    document.getElementsByClassName('khangai')[i].style = 'font-size: 35px; background-color: magenta;'
}

console.log(document.getElementById('aimagNames').id);
const liLength = document.getElementById('aimagNames').getElementsByTagName('li').length
console.log(document.getElementById('aimagNames').getElementsByTagName('li')[liLength - 1].innerHTML)


console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-1'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if((document.getElementById('aimagNames').getElementsByTagName('li')[i]).id.includes('aimag-1')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'color:black;'
    }
    if((document.getElementById('aimagNames').getElementsByTagName('li')[i]).id.includes('aimag-2')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'color:green;'
    }
    if((document.getElementById('aimagNames').getElementsByTagName('li')[i]).id.includes('aimag-3')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'color:blue;'
    }
    if((document.getElementById('aimagNames').getElementsByTagName('li')[i]).id.includes('aimag-4')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'color:cyan;'
    }
}


console.log(document.querySelector('#aimagNames'));
console.log(document.querySelector('.khangai'));

// return HTML collection
console.log(document.getElementsByClassName('khangai'));

// return NODE list
console.log(document.querySelectorAll('.khangai'));

document.querySelector('#demo').innerHTML = 'Date : ' + Date();



document.querySelector('img').src = 'img/pic.jpeg';

document.querySelector('img').style = 'border-radius: 20px; width:200px';



const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
main[0].appendChild(newDiv);



const newDiv2 = document.createElement("h2");
const newContent2 = document.createTextNode("Манай сайтад тавтай морил");
newDiv2.appendChild(newContent2);
const main2 = document.getElementsByTagName("body");
const h1 = document.querySelector('h1');
h1.appendChild(newDiv2);

