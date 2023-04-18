const gameBoard = (function(){
    //variables
    let player1,player2,gameControler,gameStatus = [];
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
        /* console.log(this);
        console.log(index); */
        if(gameControler.currentPlayer==player1){
            gameControler.currentPlayer=player2;
        }else{
            gameControler.currentPlayer=player1;
        }
        if(this.innerText==""){
            this.innerText=gameControler.currentPlayer.selection;
        }
        _checkGameStatus();
    }
    
    function _checkGameStatus(){
        console.log("hola");
    }
})();

function gameFlow(){
    let currentPlayer;
    return {currentPlayer};
}

function player(name,selection){
    return {name, selection};
}
