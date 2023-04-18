const gameBoard = (function(){
    //variables
    let player1,player2,gameControler,gameStatus = ".".repeat(9).split("");
    //DOM
    let player1NameInput = document.querySelector(".player-name-1");
    let player2NameInput = document.querySelector(".player-name-2");
    let player1SelecInput = document.querySelector(".player-selection-1");
    let player2SelecInput = document.querySelector(".player-selection-2");
    let startBtn = document.querySelector(".start-button");
    let gameSpace = document.querySelector(".gameboard");
    let squares = [];
    //Bind
    startBtn.addEventListener("click",_init);
    //render
    _render();
    function _init(){
        player1 = player(player1NameInput.value,player1SelecInput.value);
        player2 = player(player2NameInput.value,player2SelecInput.value);
        gameControler = gameFlow();
        gameControler.currentPlayer = player1;
        
    }
    function _render(){
        for(let i=0; i<9; i++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("click",_chooseSquare.bind(square,i))
            gameSpace.appendChild(square);
        }
    }

    function _chooseSquare(index){
        
        if(this.innerText==""){
            if(gameControler.currentPlayer==player1){
                gameControler.currentPlayer=player2;
            }else{
                gameControler.currentPlayer=player1;
            }
            this.innerText=gameControler.currentPlayer.selection;
            gameStatus[index] = gameControler.currentPlayer.selection;
        }
        _checkGameStatus();
    }
    
    function _checkGameStatus(){
        let condition1 = 
        (
            gameStatus[0]==gameControler.currentPlayer.selection &&
            gameStatus[1]==gameControler.currentPlayer.selection &&
            gameStatus[2]==gameControler.currentPlayer.selection 
        );
        let condition2 = 
        (
            gameStatus[3]==gameControler.currentPlayer.selection &&
            gameStatus[4]==gameControler.currentPlayer.selection &&
            gameStatus[5]==gameControler.currentPlayer.selection 
        );
        let condition3 = 
        (
            gameStatus[6]==gameControler.currentPlayer.selection &&
            gameStatus[7]==gameControler.currentPlayer.selection &&
            gameStatus[8]==gameControler.currentPlayer.selection 
        );
        let condition4 = 
        (
            gameStatus[0]==gameControler.currentPlayer.selection &&
            gameStatus[3]==gameControler.currentPlayer.selection &&
            gameStatus[6]==gameControler.currentPlayer.selection 
        );
        let condition5 = 
        (
            gameStatus[1]==gameControler.currentPlayer.selection &&
            gameStatus[4]==gameControler.currentPlayer.selection &&
            gameStatus[7]==gameControler.currentPlayer.selection 
        );
        let condition6 = 
        (
            gameStatus[2]==gameControler.currentPlayer.selection &&
            gameStatus[5]==gameControler.currentPlayer.selection &&
            gameStatus[8]==gameControler.currentPlayer.selection 
        );
        let condition7 = 
        (
            gameStatus[0]==gameControler.currentPlayer.selection &&
            gameStatus[4]==gameControler.currentPlayer.selection &&
            gameStatus[8]==gameControler.currentPlayer.selection 
        );
        let condition8 = 
        (
            gameStatus[3]==gameControler.currentPlayer.selection &&
            gameStatus[5]==gameControler.currentPlayer.selection &&
            gameStatus[7]==gameControler.currentPlayer.selection 
        );
        if(condition1 || condition2 || condition3 || condition4 || condition5 ||
            condition6||condition7 || condition8){
                alert(gameControler.currentPlayer.name);
        }
    }
})();

function gameFlow(){
    let currentPlayer;
    return {currentPlayer};
}

function player(name,selection){
    return {name, selection};
}
