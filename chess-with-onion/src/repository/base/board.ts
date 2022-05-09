import Bishop from "../../entities/bishop";
import King from '../../entities/king';
import Knight from "../../entities/knight";
import Pawn from "../../entities/pawn";
import Queen from '../../entities/queen';
import Rook from "../../entities/rook";

export default class Board {
    private whiteKing: King;
    private whiteRookA: Rook;
    private whiteRookB: Rook;
    private whiteKnightA: Knight;
    private whiteKnightB: Knight;
    private whiteBishopA: Bishop;
    private whiteBishopB: Bishop;
    private whiteQueen: Queen;
    private whitePawnA: Rook;
    private whitePawnB: Pawn;
    private whitePawnC: Pawn;
    private whitePawnD: Pawn;
    private whitePawnE: Pawn;
    private whitePawnF: Pawn;
    private whitePawnG: Pawn;
    private whitePawnH: Pawn;

    private blackKing: King;
    private blackRookA: Rook;
    private blackRookB: Rook;
    private blackKnightA: Knight;
    private blackKnightB: Knight;
    private blackBishopA: Bishop;
    private blackBishopB: Bishop;
    private blackQueen: Queen;
    private blackPawnA: Rook;
    private blackPawnB: Pawn;
    private blackPawnC: Pawn;
    private blackPawnD: Pawn;
    private blackPawnE: Pawn;
    private blackPawnF: Pawn;
    private blackPawnG: Pawn;
    private blackPawnH: Pawn;

    constructor(){
        this.whiteKing = new King('White', 'E', 1, 'alive', false, false);
        this.whiteRookA = new Rook('White', 'A', 1, 'alive');
        this.whiteRookB = new Rook('White', 'H', 1, 'alive')
        this.whiteKnightA = new Knight('White', 'B', 1, 'alive');
        this.whiteKnightB = new Knight('White', 'G', 1, 'alive');
        this.whiteBishopA = new Bishop('White', 'C', 1, 'alive');
        this.whiteBishopB = new Bishop('White', 'F', 1, 'alive');
        this.whiteQueen = new Queen('White', 'D', 1, 'alive');
        this.whitePawnA = new Pawn('White', 'A', 2, 'alive');
        this.whitePawnB = new Pawn('White', 'B', 2, 'alive');
        this.whitePawnC = new Pawn('White', 'C', 2, 'alive');
        this.whitePawnE = new Pawn('White', 'D', 2, 'alive');
        this.whitePawnD = new Pawn('White', 'E', 2, 'alive');
        this.whitePawnF = new Pawn('White', 'F', 2, 'alive');
        this.whitePawnG = new Pawn('White', 'G', 2, 'alive');
        this.whitePawnH = new Pawn('White', 'H', 2, 'alive');


        this.blackKing = new King('Black', 'E', 8, 'alive', false, false);
        this.blackRookA = new Rook('Black', 'A', 8, 'alive');
        this.blackRookB = new Rook('Black', 'H', 8, 'alive');
        this.blackKnightA = new Knight('Black', 'B', 8, 'alive');
        this.blackKnightB = new Knight('Black', 'G', 8, 'alive');
        this.blackBishopA = new Bishop('Black', 'C', 8, 'alive');
        this.blackBishopB = new Bishop('Black', 'F', 8, 'alive');
        this.blackQueen = new Queen('Black', 'D', 8, 'alive')
        this.blackPawnA = new Pawn('Black', 'A', 7, 'alive');
        this.blackPawnB = new Pawn('Black', 'B', 7, 'alive');
        this.blackPawnC = new Pawn('Black', 'C', 7, 'alive');
        this.blackPawnD = new Pawn('Black', 'D', 7, 'alive');
        this.blackPawnE = new Pawn('Black', 'E', 7, 'alive');
        this.blackPawnF = new Pawn('Black', 'F', 7, 'alive');
        this.blackPawnG = new Pawn('Black', 'G', 7, 'alive');
        this.blackPawnH = new Pawn('Black', 'H', 7, 'alive');
 
    }

    showKings() {
        return this.whiteKing, this.blackKing;
    }

    showQueens(){
        return this.whiteQueen, this.blackQueen;
    }
}

