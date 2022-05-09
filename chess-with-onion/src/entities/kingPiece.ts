import { Movable } from '../repository/interfaces/IMovable';
import Position from './position';
import { Color, Rank, File, State, IsCheck, IsChackMate } from '../repository/interfaces/type';


export abstract class KingPiece implements Movable {

    protected position: Position;

    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank,
        private state: State,
        private isCheck: IsCheck,
        private isCheckmate: IsChackMate 
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