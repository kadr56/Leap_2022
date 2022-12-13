/*
үгнүүдийн дундуур зураас оруулаx функц бичнэ үү
example: console.log(parameterizeStr("This Is Where I Begin"))
this-is-where-i-begin
*/

let str = "This is where i begin"

parameterizeStr(str)

function parameterizeStr(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            str[i] === "-";
        }
    }
    // var splitString = str.split(""); 
    // var reverseArray = splitString.reverse(); ,
    // var joinArray = reverseArray.join(""); 
}

    console.log(joinArray);