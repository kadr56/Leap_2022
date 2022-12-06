/*
Problem
| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| 0 | 0 | 0 | X | X | X | 0 |
| 0 | 0 | 0 | X | X | X | 0 |
| 0 | 0 | 0 | X | X | X | 0 |
| 0 | 0 | 0 | X | X | X | 0 |
| 0 | 0 | 0 | X | X | X | 0 |

Example 2 : TIC TAC TOE
| col1 | col2 | col3 |
|  X   |   0  |  X   | => row1
|  0   |   0  |  X   | => row2
|  X   |   X  |  0   | => row3

*/

// let row1 = ['x', 'o', 'x'];
// let row2 = ['x', 'o', 'x'];
// let row3 = ['x', 'x', 'o'];


// console.log(row1);
// console.log(row2);
// console.log(row3);

let tictactoe = 
[   ['x', 'o', 'x'], 
    ['o', 'o', 'x'], 
    ['x', 'x', 'o'] 
];

tictactoe[0][1] = 'x';
/* 
input - ээр тухайн tictactoe- баганын болоод мөрийн индексийг
дарааллуулж аваад 3 дахь удаад нь юугаар солихыг өгнө.
*/

let rowIndex = prompt("Мөрний индекс оруулна уу.");
let colIndex = prompt("Баганы индекс оруулна уу.");
let value = prompt("Харгалзах утгыг оруулна уу.")

tictactoe[rowIndex][colIndex] = value;


// console.log(tictactoe);
// console.log(tictactoe[1]);
// console.log(tictactoe[1][1]);

let str = "";
// tictac toe-ийн бүх мөрний элементүүдийг хэвлэж харуулна уу.
for (let i = 0; i < tictactoe.length; i++) {
    console.log(tictactoe[i])

    let output = '';
    //double FOR loops
    for (let j = 0; j < tictactoe[i].length; j++) {
        // console.log(tictactoe[i][j]);
        // str += " | " + tictactoe[i][j]; 
        // if(j == tictactoe[i].length - 1) {
        //     str += "|\n";
        // }

            output = output + " | " + tictactoe[i][j] + " |"

    }
    console.log(output);
}


console.log(str);




// for (let k = 0; k < tictactoe.length; k++) {
//     console.log(tictactoe[k].join(" | "))
//     // console.log(tictactoe[k].toString());

// }
