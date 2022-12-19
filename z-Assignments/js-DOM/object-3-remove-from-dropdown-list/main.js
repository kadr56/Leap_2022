/*
1. Click to remove items from a dropdown list in javaScript file
2. count and display the items of a dropdown list 
*/

// 1. Click to remove items from a dropdown list in javaScript file
console.log(' 1. Click to remove items from a dropdown list in javaScript file');
let listItems = document.querySelector('#cars');

let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', removeItem);

function removeItem () {
    listItems.remove(listItems.selectedIndex)
    countItems();
}


// 2. count and display the items of a dropdown list 
function countItems() {
    let list = document.getElementById('cars').children
    console.log('Dropdown List Length = ' + list.length);
}
