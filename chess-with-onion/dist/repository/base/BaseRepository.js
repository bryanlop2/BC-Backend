"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bishop_1 = __importDefault(require("../../entities/bishop"));
const king_1 = __importDefault(require("../../entities/king"));
const knight_1 = __importDefault(require("../../entities/knight"));
const pawn_1 = __importDefault(require("../../entities/pawn"));
const queen_1 = __importDefault(require("../../entities/queen"));
const rook_1 = __importDefault(require("../../entities/rook"));
class Board {
    constructor() {
        this.whiteKing = new king_1.default('White', 'E', 1, 'alive');
        this.whiteRookA = new rook_1.default('White', 'A', 1, 'alive');
        this.whiteRookB = new rook_1.default('White', 'H', 1, 'alive');
        this.whiteKnightA = new knight_1.default('White', 'B', 1, 'alive');
        this.whiteKnightB = new knight_1.default('White', 'G', 1, 'alive');
        this.whiteBishopA = new bishop_1.default('White', 'C', 1, 'alive');
        this.whiteBishopB = new bishop_1.default('White', 'F', 1, 'alive');
        this.whiteQueen = new queen_1.default('White', 'D', 1, 'alive');
        this.whitePawnA = new pawn_1.default('White', 'A', 2, 'alive');
        this.whitePawnB = new pawn_1.default('White', 'B', 2, 'alive');
        this.whitePawnC = new pawn_1.default('White', 'C', 2, 'alive');
        this.whitePawnE = new pawn_1.default('White', 'D', 2, 'alive');
        this.whitePawnD = new pawn_1.default('White', 'E', 2, 'alive');
        this.whitePawnF = new pawn_1.default('White', 'F', 2, 'alive');
        this.whitePawnG = new pawn_1.default('White', 'G', 2, 'alive');
        this.whitePawnH = new pawn_1.default('White', 'H', 2, 'alive');
        this.blackKing = new king_1.default('Black', 'E', 8, 'alive');
        this.blackRookA = new rook_1.default('Black', 'A', 8, 'alive');
        this.blackRookB = new rook_1.default('Black', 'H', 8, 'alive');
        this.blackKnightA = new knight_1.default('Black', 'B', 8, 'alive');
        this.blackKnightB = new knight_1.default('Black', 'G', 8, 'alive');
        this.blackBishopA = new bishop_1.default('Black', 'C', 8, 'alive');
        this.blackBishopB = new bishop_1.default('Black', 'F', 8, 'alive');
        this.blackQueen = new queen_1.default('Black', 'D', 8, 'alive');
        this.blackPawnA = new pawn_1.default('Black', 'A', 7, 'alive');
        this.blackPawnB = new pawn_1.default('Black', 'B', 7, 'alive');
        this.blackPawnC = new pawn_1.default('Black', 'C', 7, 'alive');
        this.blackPawnD = new pawn_1.default('Black', 'D', 7, 'alive');
        this.blackPawnE = new pawn_1.default('Black', 'E', 7, 'alive');
        this.blackPawnF = new pawn_1.default('Black', 'F', 7, 'alive');
        this.blackPawnG = new pawn_1.default('Black', 'G', 7, 'alive');
        this.blackPawnH = new pawn_1.default('Black', 'H', 7, 'alive');
    }
    showKings() {
        return this.whiteKing, this.blackKing;
    }
}
exports.default = Board;
//# sourceMappingURL=BaseRepository.js.map