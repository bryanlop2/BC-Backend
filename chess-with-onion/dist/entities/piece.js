"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
const position_1 = __importDefault(require("./position"));
class Piece {
    constructor(color, file, rank, state) {
        this.color = color;
        this.state = state;
        this.position = new position_1.default(file, rank);
    }
    moveTo(position) {
        this.position = position;
        return true;
    }
    canMove(position) {
        this.position = position;
        return true;
    }
}
exports.Piece = Piece;
//# sourceMappingURL=piece.js.map