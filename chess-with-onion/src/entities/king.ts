
import { KingPiece } from "./kingPiece"
import Position from "./position"

export default class King extends KingPiece{

    canMove(position: Position): boolean {
        return (Math.abs(this.position.getRank() - position.getRank()) <= 1
        && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) <= 1
        && (this.position.getRank() != position.getRank() 
        || this.position.getFile() != position.getFile()))
    }
}