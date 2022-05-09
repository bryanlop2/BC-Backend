import { Play } from '../repository/interfaces/IPlay';
import { Color, WaitTurn } from '../repository/interfaces/type';
import turn from './turn';

export default class User implements Play{
    constructor(
        
        private readonly color: Color,
        private WaitTurn: WaitTurn){
        
    }

    userTurn(turn: turn): boolean {
        if(this.WaitTurn === false){
            // aqui hace su turno
            return true
        }
        return false;
    }
}