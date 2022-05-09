
import { Piece } from "./piece";
import position from "./position";


export default class Queen extends Piece{
    canMove(position: position): boolean {
        return(
            (Math.abs(this.position.getRank() - position.getRank()) >= 1
            && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) >=1
            &&(
                Math.abs(this.position.getRank() - position.getRank()) - 
                Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) == 0
            ))
            || (Math.abs(this.position.getRank() - position.getRank()) >= 1
            && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) == 0)
            || (Math.abs(this.position.getRank() - position.getRank()) == 0 
            && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) >= 1)
            && (this.position.getRank() != position.getRank()
            || this.position.getFile() != position.getFile())
            
        ) 
    }
}