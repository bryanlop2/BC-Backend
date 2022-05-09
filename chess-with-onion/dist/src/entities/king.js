"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kingPiece_1 = require("./kingPiece");
class King extends kingPiece_1.KingPiece {
    canMove(position) {
        return (Math.abs(this.position.getRank() - position.getRank()) <= 1
            && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) <= 1
            && (this.position.getRank() != position.getRank()
                || this.position.getFile() != position.getFile()));
    }
}
exports.default = King;
//# sourceMappingURL=king.js.map