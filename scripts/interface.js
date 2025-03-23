document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        winner = symbols[playerTime];
        document.getElementById("result")
        .innerHTML = `Game Over! O vencedor foi: ${winner}`;

        document.getElementById("menu").style.display = 'flex';
    }

    handleMove(position);
    updateSquare();
    console.log(playerTime);
}

function updateSquare() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    });
}

document.getElementById("playAgain")
.addEventListener('click', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = '';
        }
    });

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    winner = '';

    document.getElementById("menu").style.display = 'none';

})
