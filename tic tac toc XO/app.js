let box = document.querySelectorAll('.Box');
let player = document.querySelector('.turn');
let btn = document.querySelector('button');
let winner = document.querySelector('.Winner');
let turn = 'X';
let gameActive = true;
let win = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
];

function changeTurn() {
    turn = turn === "X" ? "O" : "X";
}


// ! game restart



function resetGame() {
    box.forEach(box => box.innerHTML = "");
    turn = 'X';
    gameActive = true;
    winner.innerHTML = "";
    player.innerHTML = `Turn: ${turn}`;
}


// ! check winner 


function isWinner() {
    for (let i = 0; i < win.length; i++) {
        let [win1, win2, win3] = win[i];
        if (box[win1].innerHTML &&
            box[win1].innerHTML === box[win2].innerHTML &&
            box[win1].innerHTML === box[win3].innerHTML
        ) {
            winner.innerHTML = `Winner: ${turn}`;
            gameActive = false;
            
        }
    }
   
}


// ! all boxes


box.forEach(boxes => {
    boxes.addEventListener('click', function() {
        if (boxes.innerHTML === "" && gameActive) {
            boxes.innerHTML = `<p>${turn}</p>`;
            isWinner();
            changeTurn();
            player.innerHTML = `Turn: ${turn}`;
        }
    });
});

// ! resert button


btn.addEventListener('click', resetGame);
