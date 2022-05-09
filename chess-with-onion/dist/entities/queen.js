"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = require("./piece");
class Queen extends piece_1.Piece {
    canMove(position) {
        return (Math.abs(this.position.getRank() - position.getRank()) ===
            Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)));
    }
}
exports.default = Queen;
//# sourceMappingURL=queen.js.map