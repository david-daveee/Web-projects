console.log("JS connected?");
const TILES = document.querySelectorAll(".tile");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;
const gameOver = document.getElementById("sign-game-over");
//array thats gonna be filled with x and o of players (9 tiles)
const boardArea = new Array(TILES.length).fill(null);

// click on tiles
TILES.forEach((tile) => tile.addEventListener("click",tileClick));

function setHoverText(){
    TILES.forEach((tile)=>{
        tile.classList.remove("o-hover");
        tile.classList.remove("x-hover");
    });
    //hover-x / hover-o (`${}` make you convert const to text)
    const hoverClass = `${turn.toLowerCase()}-hover`;

    TILES.forEach((tile)=>{
        if(tile.innerText==""){
            tile.classList.add(hoverClass);
        }

    });

}
setHoverText();
function tileClick (event){
    if(gameOver.classList.contains('visible')){
        return;
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != ""){
        return;
    }
    if(turn === PLAYER_X){
        tile.innerText = PLAYER_X;
        boardArea[tileNumber-1] = PLAYER_X;
        turn = PLAYER_O;
    }
    else{
        tile.innerText = PLAYER_O;
        boardArea[tileNumber-1] = PLAYER_O;
        turn = PLAYER_X;
    }
    setHoverText();
    checkWinner();
}

function checkWinner(){
    if(boardArea[0] == boardArea[1] && boardArea[1] == boardArea[2]&& boardArea[2]=="X"){
        tryAgain();
    }
    if(boardArea[3] == boardArea[4] && boardArea[4] == boardArea[5]&& boardArea[5]=="X"){
        tryAgain();
    }
    if(boardArea[6] == boardArea[7] && boardArea[7] == boardArea[8]&& boardArea[8]=="X"){
        tryAgain();
    }
    if(boardArea[0] == boardArea[3] && boardArea[3] == boardArea[6]&& boardArea[6]=="X"){
        tryAgain();
    }
    if(boardArea[1] == boardArea[4] && boardArea[4] == boardArea[7]&& boardArea[7]=="X"){
        tryAgain();
    }
    if(boardArea[2] == boardArea[5] && boardArea[5] == boardArea[8]&& boardArea[8]=="X"){
        tryAgain();
    }
    if(boardArea[0] == boardArea[4] && boardArea[4] == boardArea[8]&& boardArea[8]=="X"){
        tryAgain();
    }
    if(boardArea[2] == boardArea[4] && boardArea[4] == boardArea[6]&& boardArea[6]=="X"){
        tryAgain();
    }


    if(boardArea[0] == boardArea[1] && boardArea[1] == boardArea[2]&& boardArea[2]=="O"){
        tryAgain();
    }
    if(boardArea[3] == boardArea[4] && boardArea[4] == boardArea[5]&& boardArea[5]=="O"){
        tryAgain();
    }
    if(boardArea[6] == boardArea[7] && boardArea[7] == boardArea[8]&& boardArea[8]=="O"){
        tryAgain();
    }
    if(boardArea[0] == boardArea[3] && boardArea[3] == boardArea[6]&& boardArea[6]=="O"){
        tryAgain();
    }
    if(boardArea[1] == boardArea[4] && boardArea[4] == boardArea[7]&& boardArea[7]=="O"){
        tryAgain();
    }
    if(boardArea[2] == boardArea[5] && boardArea[5] == boardArea[8]&& boardArea[8]=="O"){
        tryAgain();
    }
    if(boardArea[0] == boardArea[4] && boardArea[4] == boardArea[8]&& boardArea[8]=="O"){
        tryAgain();
    }
    if(boardArea[2] == boardArea[4] && boardArea[4] == boardArea[6]&& boardArea[6]=="O"){
        tryAgain();
    }


    if(boardArea[0]!=null&&boardArea[1]!=null&&boardArea[2]!=null&&boardArea[3]!=null&&boardArea[4]!=null&&boardArea[5]!=null&&boardArea[6]!=null&&boardArea[7]!=null&&boardArea[8]!=null){
        tryAgain();
    }

    

    
}
function tryAgain(){
    gameOver.className = "visible";
}

const playAgainButton = document.getElementById("sign-game-over");
playAgainButton.addEventListener("click",resetGame);

function resetGame(){
    gameOver.className = "hidden";
    boardArea.fill(null);
    TILES.forEach((tile) => (tile.innerText =""));
    turn = PLAYER_X;
    setHoverText();
}