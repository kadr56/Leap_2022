/*
үгнүүдийн дундуур зураас оруулаx функц бичнэ үү
example: console.log(parameterizeStr("This Is Where I Begin"))
this-is-where-i-begin
*/

let str = "This is where i begin";
console.log(str);

let parameterizeStr = (str) => str.replace(/ /g, "-");

console.log(parameterizeStr(str));