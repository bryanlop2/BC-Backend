import Board from "./board";
import StatusGame from "./gameState";
import Player from "./players";


export default class Game{

    private board: Board;
    private players: Player;

    constructor(){
        this.players = new Player;
        this.board = new Board;
    }

    restartGame(){
        let brandNewBoard = new Board;
        let brandNewPlayers = new Player;
        
        this.board = brandNewBoard;
        this.players = brandNewPlayers;
    }

    showBoard() {
        return this.board, this.players;
    }
}

