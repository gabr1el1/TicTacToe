const gameBoard = (function(){
    //variables
    let gameControler;
    //DOM
    let player1NameInput = document.querySelector("#player-name-1");
    let player2NameInput = document.querySelector("#player-name-2");
    let player1SelecInput = document.querySelector("#player-selection-1");
    let player2SelecInput = document.querySelector("#player-selection-2");
    let formStartGame = document.querySelector("#myForm")
    let restartBtn = document.querySelector(".restart-button");
    let gameSpace = document.querySelector(".gameboard");
    let squares = []
    //Bind
    formStartGame.addEventListener("submit",_init);
    restartBtn.addEventListener("click",_restart);
    //render
    _render();
    function _init(event){
        event.preventDefault();
        gameControler = gameFlow();
        gameControler.player1 = player(player1NameInput.value,player1SelecInput.value);
        gameControler.player2 = player(player2NameInput.value,player2SelecInput.value);
        gameControler.currentPlayer = gameControler.player1;
        gameSpace.classList.add("game-ready");
        _restart();
    }
    function _restart(){
        squares.forEach(square=>{
            square.innerText="";
        });
        gameControler.gameStatus = [[null,null,null],[null,null,null],[null,null,null]];
        gameControler.gameDone = false; 
    }
    function _render(){
        for(let i=0; i<3; i++){
            for(let j=0; j<3;j++){
                let square = document.createElement("div");
                square.classList.add("square");
                square.addEventListener("click",_chooseSquare.bind(square,i,j));
                squares.push(square);
                gameSpace.appendChild(square);
            }
        }
    }

    function _chooseSquare(array,element){
        if(this.innerText=="" && !gameControler.gameDone){
            this.innerText=gameControler.currentPlayer.selection;
            gameControler.gameStatus[array][element] = gameControler.currentPlayer.selection;
            _checkGameStatus();
            if(gameControler.currentPlayer==gameControler.player1){
                gameControler.currentPlayer=gameControler.player2;
            }else{
                gameControler.currentPlayer=gameControler.player1;
            }
        }
    }
    function _checkGameStatus(){
        if(_checkWin()){
            alert(`${gameControler.currentPlayer.name} wins`);
            gameControler.gameDone = true;
            gameSpace.classList.remove("game-ready");
        }
    }
    function _checkWin(){
        if(_checkWinRows()){
            return true;
        }else if(_checkWinColumns()){
            return true;
        }else if(_checkWinCrosses()){
            return true;
        }else{
            return false;
        }
    }
    function _checkWinRows(){ 
        for(let i=0;i<3;i++){
            let countCurrent = 0, countContrary=0;
            for(let j=0; j<3; j++){
                if(gameControler.gameStatus[i][j]==gameControler.currentPlayer.selection){
                    countCurrent++;
                }
            }
            if(countCurrent==3){
                return true;
            }
        }
        return false;
    }
    function _checkWinColumns(){
        for(let i=0;i<3;i++){
            let countCurrent = 0, countContrary=0;
            for(let j=0;j<3;j++){
                if(gameControler.gameStatus[j][i]==gameControler.currentPlayer.selection){
                    countCurrent++;
                }
            }
            if(countCurrent==3){
                return true;
            }
        }
        return false;
    }
    function _checkWinCrosses(){
        for(let i=0;i<2;i++){
            let countCurrent = 0, countContrary=0;
            if(i==0){
                let k=2;
                for(let j=2;j>=0;j--){
                    console.log(j+" "+k);
                    if(gameControler.gameStatus[j][k]==gameControler.currentPlayer.selection){
                        countCurrent++;
                    }
                    k--;
                }   
            }else{
                let k=0;
                for(let j=2;j>=0;j--){
                    console.log(j+" "+k);
                    if(gameControler.gameStatus[j][k]==gameControler.currentPlayer.selection){
                        countCurrent++;
                    }
                    k++;
                } 
            }
            if(countCurrent==3){
                return true;
            }
        }
    }
})();

function gameFlow(){
    let currentPlayer
    , gameStatus = [[null,null,null],[null,null,null],[null,null,null]]
    ,player1,player2,gameDone=false,tie;

    return {currentPlayer,gameStatus,player1,player2,gameDone,tie};
}

function player(name,selection){
    return {name, selection};
}
