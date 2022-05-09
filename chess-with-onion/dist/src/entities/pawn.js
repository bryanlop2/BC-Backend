"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = require("./piece");
class Pawn extends piece_1.Piece {
    canMove(position) {
        return (Math.abs(this.position.getRank() - position.getRank()) == 1
            && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) == 0
            && (this.position.getRank() != position.getRank()));
    }
}
exports.default = Pawn;
//# sourceMappingURL=pawn.js.map