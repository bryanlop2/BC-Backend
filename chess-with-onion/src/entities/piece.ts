import { Color, Rank, File, State } from '../repository/interfaces/type';
import Position from './position';
import { Movable } from '../repository/interfaces/IMovable';

export abstract class Piece implements Movable{
    
    protected position: Position;

    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank,
        private state: State
    ){
        this.position = new Position(file, rank);
    }


    moveTo(position: Position): boolean {
        this.position = position
        return true;
    }
    canMove(position: Position): boolean {
        this.position = position;
        return true;
    }
    
    

}