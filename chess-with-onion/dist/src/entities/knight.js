"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = require("./piece");
class Knight extends piece_1.Piece {
    canMove(position) {
        return (Math.abs(this.position.getRank() - position.getRank()) == 2
            && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) == 1
            || (Math.abs(this.position.getRank() - position.getRank()) == 1
                && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) == 2)
                && (this.position.getRank() != position.getRank()
                    || this.position.getFile() != position.getFile()));
    }
}
exports.default = Knight;
//# sourceMappingURL=knight.js.map