import { WaitTurn } from "../repository/interfaces/type";



export default class Turn {
    constructor(
        private turn: WaitTurn
    ){
        
    }
    getTurn(){
        return this.turn;
    }
}