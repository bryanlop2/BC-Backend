"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KingPiece = void 0;
const position_1 = __importDefault(require("./position"));
class KingPiece {
    constructor(color, file, rank, state, isCheck, isCheckmate) {
        this.color = color;
        this.state = state;
        this.isCheck = isCheck;
        this.isCheckmate = isCheckmate;
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
exports.KingPiece = KingPiece;
//# sourceMappingURL=kingPiece.js.map