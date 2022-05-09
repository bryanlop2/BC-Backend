import { GameState } from '../interfaces/type';


export default class StatusGame {

    private gameState: GameState;

    constructor(
    ){
        this.gameState = 'Ready to start'
    }

    startGame(){
        this.gameState = 'Playing'
    }
}