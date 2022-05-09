import Position from '../../entities/position';
import { State } from './type';

export interface Movable {
    moveTo(position: Position): boolean;

    canMove(position: Position): boolean;
}